namespace API.Controllers
{
    [ApiController]
    [Route("projects")]
    public class ProjectsController : ControllerBase
    {

        private List<Project> projects; // change class accordingly

        public ProjectsController()
        {
            projects = getProjectsFromDB(); 
        }

        // Get /projects
        [HttpGet]
        public List<Project> GetProjects()
        {
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