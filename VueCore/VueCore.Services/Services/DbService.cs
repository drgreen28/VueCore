using VueCore.Data.Entities;
using VueCore.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace VueCore.Services
{
    public class DbService : IDbService
    {
        private MainContext _context { get; set; }
        private IConfiguration _config;
        private readonly IMemoryCache _cache;

        public DbService(MainContext context, IConfiguration config, IMemoryCache cache)
        {
            _context = context;
            _config = config;
            _cache = cache;
        }
        public void UpdateConnectionString(string user, string dbName)
        {
            _cache.Set<string>(user, dbName);
        }

        public MainContext Context(string user)
        {
            string dbName = GetCurrentDb(user);

            SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder(_config.GetConnectionString("Main"));
            builder["Initial Catalog"] = dbName;

            _context.Database.GetDbConnection().ConnectionString = builder.ConnectionString;
            return _context;
        }

        public List<string> GetDbs()
        {
            List<SystemDatabase> dbs = _context.SystemDatabase.FromSqlRaw(@"SELECT name FROM   sys.databases WHERE  CASE WHEN state_desc = 'ONLINE' THEN OBJECT_ID(QUOTENAME(name) + '.[dbo].[ELMAH_Error]', 'U') END IS NOT NULL").ToList();
            return dbs.OrderBy(x => x.Name).Select(x => x.Name).ToList();
        }

        public string GetCurrentDb(string user)
        {
            string dbName = GetDefaultDb();
            try
            {
                dbName = _cache.Get<string>(user) ?? GetDefaultDb();
            }
            catch (Exception) { }

            return dbName;
        }

        private string GetDefaultDb()
        {
            return _config["DefaultDb"];
        }
    }
}
