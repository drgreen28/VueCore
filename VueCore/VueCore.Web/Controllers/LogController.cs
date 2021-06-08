using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using VueCore.Data.Models;
using VueCore.Services.Interfaces;

namespace VueCore.Web.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class LogController : ControllerBase
    {
        private readonly IElmahErrorService _service;
        private readonly IDbService _dbService;
        //public string client;

        public LogController(IElmahErrorService service, IDbService dbService)
        {
            _service = service;
            _dbService = dbService;
        }

        [HttpGet("GetLogs/{fromDate}/{toDate}")]
        public List<ElmahErrorModel> GetLogs(string fromDate, string toDate)
        {
            var logs = _service.GetLogs(User.Identity.Name, fromDate, toDate);
            return logs;
        }

        [HttpGet("UpdateContext/{dbName}")]
        public bool UpdateContext(string dbName)
        {
            _dbService.UpdateConnectionString(User.Identity.Name, dbName);
            return true;
        }

        [HttpGet("GetDbs")]
        public List<string> GetDbs()
        {
            var dbs = _dbService.GetDbs();
            return dbs;
        }

        [HttpGet("GetCurrentDb")]
        public string GetDefaultDb()
        {
            return _dbService.GetCurrentDb(User.Identity.Name);
        }
    }
}
