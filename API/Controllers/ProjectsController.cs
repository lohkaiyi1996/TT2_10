using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("projects")]
    public class ProjectsController : ControllerBase
    {

        private List<Project> projects; // change class accordingly

        public ProjectsController()
        {
        }

        // TASK 2
        // Get /projects
        [HttpGet]
        public List<Project> GetProjects()
        {
            projects = getAllProjectsFromDB(); // function not written yet, change accordingly
            return projects;
        }


        // GET /projects/test
        [HttpGet("test")]
        public string Test()
        {
            return "Hello";
        }
    }
}