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

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Workout>().Property(p => p.Id).HasIdentityOptions(startValue: 3);
            modelBuilder.Entity<Workout>().HasData(
                new Workout { Id = 1, Name = "Jalgpall", Trainer = "Kalle", Description = "kirjeldus", Location = "Tallinn", StartTime = "18:00", EndTime = "20:00" },
                new Workout { Id = 2, Name = "Võrkpall", Trainer = "Pille", Description = "kirjeldus", Location = "Tallinn", StartTime = "18:00", EndTime = "20:00" }
            );
        }
    }
}