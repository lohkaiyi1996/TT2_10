namespace API.Controllers
{
    [ApiController]
    [Route("projects")]
    public class ProjectsController : ControllerBase
    {

        private Projects projects; // change class accordingly

        public ProjectsController()
        {
            projects = new Projects();  // change class accordingly
        }

        // Get /projects
        [HttpGet]
        public List<Project> GetProjects()
        {
            // var projects = getProjectsFromDB ();
            return projects;
        }
    }
}