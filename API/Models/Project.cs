﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Project
    {
        public int Id { get; set; }
        public int User_id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Budget { get; set; }
    }
}
