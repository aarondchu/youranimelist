using ProjectCRUD.Models.Domain.Register;
using ProjectCRUD.Models.Responses;
using ProjectCRUD.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectCRUD.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/registers")]
    public class RegisterController : ApiController
    {
        IUserService _userService;
        public RegisterController(IUserService userService)
        {
            _userService = userService;
        }
        // GET api/<controller>
        [Route(), HttpPost]
        public IHttpActionResult Register(RegisterRequestModel data)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);
                ItemResponse<string> response = new ItemResponse<string>();
                string guid = _userService.Register(data);
                if (guid == "1")
                {
                    response.Item = "Sorry, that UserName is already taken!";
                }
                else if (guid == "0")
                {
                    response.Item = "An account with that email already exists!";
                }
                else response.Item = "0";
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

    }
}