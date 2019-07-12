using ProjectCRUD.Models.Domain;
using ProjectCRUD.Models.Responses;
using ProjectCRUD.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace ProjectCRUD.Controllers.Api
{
    [RoutePrefix("api/logins")]
    public class LoginController : ApiController
    {
        IUserService _userService;
        public LoginController(IUserService userService)
        {
            _userService = userService;
        }
        [Route(), HttpPost, AllowAnonymous]
        public IHttpActionResult Login(LoginRequestModel data)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);
                ItemResponse<LoginResponse> response = new ItemResponse<LoginResponse>
                {
                    Item = _userService.Login(data.UserName, data.Password)
                };
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}