using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string Username { get; set; } = "";

        public string Password { get; set; } = "";

        // [JsonIgnore]
        // public virtual ICollection<Workout> UserWorkouts { get; set; } = new List<Workout>();
    }
}
