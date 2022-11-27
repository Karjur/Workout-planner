using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public class GroupData : NamedEntityData
    {
        public string CoachName { get; set;}
        public int NrOfParticipants { get; set;}
        public string Status { get; set;}
    }
}