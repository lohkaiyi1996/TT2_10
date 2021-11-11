using API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace API.Models.Authentication
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Appointment { get; set; }
        public string JwtToken { get; set; }

        public AuthenticateResponse(User user, string jwtToken)
        {
            Id = user.Id;
            Name = user.Name;
            Appointment = user.Appointment;
            JwtToken = jwtToken;
        }
    }
}
