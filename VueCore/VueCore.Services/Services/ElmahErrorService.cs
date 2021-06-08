using AutoMapper;
using VueCore.Data.Entities;
using VueCore.Data.Models;
using VueCore.Services.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace VueCore.Services
{
    public class ElmahErrorService : IElmahErrorService
    {
        private readonly IMapper _mapper;
        private readonly ILogger _logger;
        private readonly IConfiguration _config;
        private readonly MainContext _context;
        private IDbService _dbService;

        public ElmahErrorService(MainContext context, IDbService dbService, IMapper mapper, ILogger<ElmahErrorService> logger, IConfiguration config)
        {
            _mapper = mapper;
            _logger = logger;
            _config = config;
            _context = context;
            _dbService = dbService;
        }

        public List<ElmahErrorModel> GetLogs(string user, string fromDate, string toDate)
        {
            List<ElmahError> errors = _dbService.Context(user).ElmahError.Where(x => x.TimeUtc >= Convert.ToDateTime(fromDate) && x.TimeUtc <= Convert.ToDateTime(toDate)).OrderByDescending(x => x.TimeUtc).ToList();

            return _mapper.Map<List<ElmahErrorModel>>(errors);
        }
    }
}
