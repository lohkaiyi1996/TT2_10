using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class CategoryContext : DbContext {
        public CategoryContext(DbContextOptions<CategoryContext> contextOptions) : base(contextOptions)
        {

        }

        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>(entity =>
           {
               entity.HasKey(e => e.Id).HasName("id");
               entity.Property(e => e.Name).HasColumnName("name");

           });
       
        }
    }

    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
