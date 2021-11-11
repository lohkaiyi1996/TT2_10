using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Expense
    {
        public int Id { get; set; }
        public int Project_id { get; set; }
        public int Category_id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
        public DateTime Created_at { get; set; }
        public string Created_by { get; set; }
        public DateTime Updated_at { get; set; }
        public DateTime Updated_by { get; set; }
    }
}
