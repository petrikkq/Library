using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using BookStore.SqlInteraction;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace BookStore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env; 
        public BooksController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
          
           return(DataProvider.GetBooks(_configuration));
        }
        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var HttpRequest = Request.Form;
                var postedFile = HttpRequest.Files[0];
                string FileName = postedFile.FileName;
                var physicalPath = _env.ContentRootPath + "/Photos/" + FileName;
                
                using (var stream = new FileStream(physicalPath,FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                }
                return new JsonResult(FileName);

            }
            catch
            {
                return new JsonResult("Anynymous books");
            }
        }
    }
}
