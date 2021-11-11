namespace API.Controllers
{
    [ApiController]
    [Route("projects")]
    public class ProjectsController : ControllerBase
    {

        private List<Project> projects; // change class accordingly

        public ProjectsController()
        {
            projects = new List<Project>();  // change class accordingly
        }

        // Get /projects
        [HttpGet]
        public List<Project> GetProjects()
        {
            // var projects = getProjectsFromDB ();
            new NotFound();
            return projects;
        }

        public string Test()
        {
            return "Hello";
        }
    }
}