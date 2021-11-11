using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IProjectsService
    {
        IEnumerable<Project> GetAll();
    }

    public class ProjectsService : IProjectsService
    {
        private ProjectContext _context;

        public ProjectsService(ProjectContext context)
        {
            _context = context;
        }

        public IEnumerable<Project> GetAll()
        {
            return _context.Projects;
        }
    }
}
