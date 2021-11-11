using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICategoryService
    {
        IEnumerable<Category> GetAll();
    }

    public class CategoryService : ICategoryService
    {
        private readonly CategoryContext _context;

        public CategoryService(CategoryContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetAll()
        {
            return _context.Categories;
        }
    }
}
