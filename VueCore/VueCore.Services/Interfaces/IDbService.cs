using VueCore.Data.Entities;
using System.Collections.Generic;

namespace VueCore.Services.Interfaces
{
    public interface IDbService
    {
        public void UpdateConnectionString(string user, string dbName);
        public MainContext Context(string user);
        public List<string> GetDbs();
        public string GetCurrentDb(string user);
    }
}
