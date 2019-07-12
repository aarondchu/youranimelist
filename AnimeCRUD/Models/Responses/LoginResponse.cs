using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProjectCRUD.Models.Responses
{
    public class LoginResponse
    {
        public bool IsSuccessful { get; set; }
        public string Message { get; set; }
    }
}