using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class WorkoutUser
    {
        public int Id { get; set; }
        public int WorkoutId { get; set; }
        public int UserId { get; set; }

        // [JsonIgnore]
        // public virtual Workout? Workout { get; set; }
        // [JsonIgnore]
        // public virtual User? User { get; set; }

        public bool Participating { get; set; }
    }
}