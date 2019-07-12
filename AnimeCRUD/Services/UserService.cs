using DbConnector.Tools;
using ProjectCRUD.Models.Domain.Register;
using ProjectCRUD.Models.Domain.User;
using ProjectCRUD.Models.Responses;
using ProjectCRUD.Services.Interfaces.Cryptography;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ProjectCRUD.Services
{
    public class UserService : BaseService, IUserService
    {
        ICryptographyService _cryptographyService;
        public UserService(ICryptographyService cryptographyService)
        {
            _cryptographyService = cryptographyService;
        }
        public LoginResponse Login(string userName, string password)
        {
            LoginResponse response = new LoginResponse();
            UserLoginInfo info = GetUserInfo(userName);
            if (!String.IsNullOrEmpty(info.Salt))
            {
                string passwordHash = _cryptographyService.Hash(password, info.Salt);
                if (passwordHash.Equals(info.Passwordhash))
                {
                    response.IsSuccessful = true;
                }
            }
            else
            {
                response.IsSuccessful = false;
                response.Message = "No Account found for username: " + userName;
            }
            return response;
        }
        private UserLoginInfo GetUserInfo(string userName)
        {
            return Adapter.LoadObject<UserLoginInfo>("dbo.User_GetLoginInfo",
                 new SqlParameter[]
                 {
                    new SqlParameter("@userName", userName)
                 }).FirstOrDefault();
        }
        public string Register(RegisterRequestModel info)
        {
            string guid = "";
            string salt = _cryptographyService.GenerateRandomString(15);
            string passwordHash = _cryptographyService.Hash(info.Password, salt);
            SqlParameter outParam = new SqlParameter("@GUID", System.Data.SqlDbType.NVarChar, 128);
            outParam.Direction = System.Data.ParameterDirection.Output;
            Adapter.ExecuteNonQuery("dbo.User_Insert",
                new[] {
                new SqlParameter("@email", info.Email),
                new SqlParameter("@userName", info.UserName),
                new SqlParameter("@passwordHash", passwordHash),
                new SqlParameter("@salt", salt),
                outParam
            }, (parameters) =>
            {
                guid = parameters.GetParamValue<string>("@guid");
            });
            return guid;
        }
    }
}