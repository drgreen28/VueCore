using AutoMapper;
using VueCore.Data.Entities;
using VueCore.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductAdmin.Web
{
    public class MainProfile : Profile
    {
        public MainProfile()
        {
            CreateMap<ElmahError, ElmahErrorModel>()
                .ReverseMap();
            CreateMap<AppSetting, AppSettingModel>()
                .ReverseMap();
            CreateMap<AppSettingKey, AppSettingKeyModel>()
                .ReverseMap();
        }
    }
}
