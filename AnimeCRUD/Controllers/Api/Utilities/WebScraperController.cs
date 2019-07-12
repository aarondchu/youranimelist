using ProjectCRUD.Models.Responses;
using ProjectCRUD.Services.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ProjectCRUD.Controllers.Api.Utilities
{
    [RoutePrefix("api/scraper")]
    public class WebScraperController : ApiController
    {
        IWebScraperService _webScraperService;
        public WebScraperController(IWebScraperService webScraperService)
        {
            _webScraperService = webScraperService;
        }
        [Route(), HttpGet]
        public IHttpActionResult Scrape()
        {
            try
            {
                ItemResponse<string> response = new ItemResponse<string>();
                response.Item = _webScraperService.Scrape();
                return Ok(response);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
