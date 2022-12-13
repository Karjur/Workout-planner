using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackEnd.Model
{
    [Table("workout")]
    public class Workout
    {
        [Column("id")]
        public int Id { get; init; }
        [Column("name")]
        public string? Name { get; init; }
        [Column("trainer")]
        public string? Trainer { get; init; }
        [Column("description")]
        public string? Description { get; init; }
        [Column("location")]
        public string? Location { get; init; }
        [Column("date")]
        public string? Date { get; init; }
        [Column("start_time")]
        public string? StartTime { get; init; }
        [Column("end_time")]
        public string? EndTime { get; init; }
        [Column("max_participants")]
        public int MaxParticipants { get; init; }
        [Column("nr_of_participants")]
        public int NrOfParticipants { get; init; }
        // public virtual ICollection<WorkoutUser> WorkoutUsers { get; set; } = new List<WorkoutUser>();
    }
}