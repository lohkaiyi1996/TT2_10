using API.Models;
using API.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace API.Controllers
{
    [ApiController]
    [Route("projects")]
    public class ProjectsController : ControllerBase
    {

        private IProjectsService _context;

        public ProjectsController(IProjectsService context)
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