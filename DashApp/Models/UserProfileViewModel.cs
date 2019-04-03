using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DashApp.Models
{
    public class UserProfileViewModel
    {
        public int ID { get; set; }
        public string UserEmailId { get; set; }
        public string Password { get; set; }
        public string confirmPassword { get; set; }
        public string Gender { get; set; }
        public string CountryName { get; set; }
        public string StateName { get; set; }
        public string CityName { get; set; }
        public string Address { get; set; }
    }
}