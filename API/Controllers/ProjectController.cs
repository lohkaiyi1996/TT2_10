using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers
{
    [ApiController]
    [Route("projects")]
    public class ProjectController : ControllerBase
    {

        private IProjectService _context;

        public ProjectController(IProjectService context)
        {
            _context = context;
        }

        // TASK 2
        // Get /projects
        [HttpGet]
        public IActionResult GetProjects()
        {
            return Ok(_context.GetAll());
        }


        // GET /projects/test
        [HttpGet("test")]
        public string Test()
        {
            return "Hello";
        }
    }
}