using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BackEnd.Model
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<Workout>? WorkoutList { get; set; }
        public DbSet<User>? UserList { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Workout>().Property(p => p.Id).HasIdentityOptions(startValue: 5);

            modelBuilder.Entity<User>().HasData(
                new User { Id = 1, Username = "admin", Password = "admin" },
                new User { Id = 2, Username = "test", Password = "test" }
            );

            modelBuilder.Entity<Workout>().HasData(
                new Workout { Id = 1, Name = "Jalgpall", Trainer = "Kalle", Description = "kirjeldus", Location = "Tallinn", StartTime = "18:00", EndTime = "20:00" },
                new Workout { Id = 2, Name = "Võrkpall", Trainer = "Pille", Description = "kirjeldus", Location = "Tallinn", StartTime = "18:00", EndTime = "20:00" },
                new Workout { Id = 3, Name = "Sulgpall", Trainer = "Sulev", Description = "kirjeldus", Location = "Tallinn", StartTime = "18:00", EndTime = "20:00" },
                new Workout { Id = 4, Name = "Korvpall", Trainer = "Olev", Description = "kirjeldus", Location = "Tallinn", StartTime = "18:00", EndTime = "20:00" }
            );
        }
    }
}