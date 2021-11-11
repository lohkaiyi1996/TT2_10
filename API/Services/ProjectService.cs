using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IProjectService
    {
        IEnumerable<Project> GetAll();
    }

    public class ProjectService : IProjectService
    {
        private ProjectContext _context;

        public ProjectService(ProjectContext context)
        {
            _context = context;
        }

        public IEnumerable<Project> GetAll()
        {
            return _context.Projects;
        }
    }
}
