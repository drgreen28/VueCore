using VueCore.Data.Models;
using System.Collections.Generic;

namespace VueCore.Services.Interfaces
{
    public interface IElmahErrorService
    {
        public List<ElmahErrorModel> GetLogs(string user, string fromDate, string toDate);
    }
}
