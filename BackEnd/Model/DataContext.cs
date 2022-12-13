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
        public DbSet<WorkoutUser>? WorkoutUserList { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);

            // modelBuilder.Entity<WorkoutUser>().ToTable("WorkoutUser").HasKey(key => key.Id);
            // modelBuilder.Entity<WorkoutUser>().HasOne(x => x.Workout)
            // .WithMany(x => x.WorkoutUsers)
            // .HasForeignKey(x => x.WorkoutId);

            // modelBuilder.Entity<WorkoutUser>().HasOne(x => x.User)
            // .WithMany(x => x.UserWorkouts)
            // .HasForeignKey(x => x.UserId);

            modelBuilder.Entity<Workout>().Property(p => p.Id).HasIdentityOptions(startValue: 5);

            modelBuilder.Entity<User>().HasData(
                new User { Id = 1, Username = "admin", Password = "admin" },
                new User { Id = 2, Username = "test", Password = "test" }
            );

            modelBuilder.Entity<Workout>().HasData(
                new Workout { Id = 1, Name = "Jalgpall", Trainer = "Kalle", Description = "kirjeldus", Location = "Tallinn", Date = "12/12/2022", StartTime = "18:00", EndTime = "20:00", MaxParticipants = 10, NrOfParticipants = 0},
                new Workout { Id = 2, Name = "Võrkpall", Trainer = "Pille", Description = "kirjeldus", Location = "Tallinn", Date = "12/12/2022", StartTime = "18:00", EndTime = "20:00", MaxParticipants = 10, NrOfParticipants = 0},
                new Workout { Id = 3, Name = "Sulgpall", Trainer = "Sulev", Description = "kirjeldus", Location = "Tallinn", Date = "12/12/2022", StartTime = "18:00", EndTime = "20:00", MaxParticipants = 10, NrOfParticipants = 0},
                new Workout { Id = 4, Name = "Korvpall", Trainer = "Olev", Description = "kirjeldus", Location = "Tallinn", Date = "12/12/2022", StartTime = "18:00", EndTime = "20:00", MaxParticipants = 10, NrOfParticipants = 0}
            );
            modelBuilder.Entity<WorkoutUser>().HasData(
                new { Id = 1, WorkoutId = 1, UserId = 2, Participating = true },
                new { Id = 2, WorkoutId = 1, UserId = 3, Participating = true },
                new { Id = 3, WorkoutId = 2, UserId = 2, Participating = false } 
            );
        }
    }
}