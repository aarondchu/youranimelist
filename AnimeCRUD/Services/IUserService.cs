using ProjectCRUD.Models.Domain.Register;
using ProjectCRUD.Models.Responses;

namespace ProjectCRUD.Services
{
    public interface IUserService
    {
        LoginResponse Login(string userName, string password);
        string Register(RegisterRequestModel info);
    }
}