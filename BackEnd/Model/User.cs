using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    [Table("user")]
    public class User
    {
        [Column("id")]
        public int Id { get; set; }

        [Column("username")]
        public string Username { get; set; } = "";

        [Column("password")]
        public string Password { get; set; } = "";
        
        [Column("organzation_id")]
        public int OrganizationId { get; set; }

    }
}
