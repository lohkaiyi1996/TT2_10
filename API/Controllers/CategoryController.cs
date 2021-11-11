using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _context;
        public CategoryController(ICategoryService context)
        {
            _context = context;
        }

        [HttpGet]
        [Route("get")]
        public IActionResult Get()
        {
            return Ok(_context.GetAll());
        }
    }
}
