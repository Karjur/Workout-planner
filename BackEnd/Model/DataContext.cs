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

        public DbSet<Coach>? CoachList { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Coach>().HasData(
                new Coach { Id = 1, Name = "Peep Meri", Specialisation = "Jalgpall", Email = "peep.meri@gmail.com", PhoneNr = "56123456" },
                new Coach { Id = 2, Name = "Mari Mets", Specialisation = "Tennis", Email = "mari.mets@gmail.com", PhoneNr = "56234567" }
            );
        }
    }
}