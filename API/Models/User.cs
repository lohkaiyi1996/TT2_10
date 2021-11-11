using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> contextOptions) : base(contextOptions)
        { }

        protected override void  OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id).HasName("id");
                entity.Property(e => e.Username).HasColumnName("username");
                entity.Property(e => e.Name).HasColumnName("name");
                entity.Property(e => e.Password).HasColumnName("password");
                entity.Property(e => e.Appointment).HasColumnName("appointment");

            });
        }

        public DbSet<User> Users { get; set; }
    }

    [Table("user")]
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } 
        public string Password { get; set; }
        public string Name { get; set; }
        public string Appointment { get; set; }

    }
}
