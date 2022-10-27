using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Model
{
    public record Coach
    {
        public int Id { get; init; }
        public string? Name { get; init; }
        public string? Specialisation { get; init; }
        public string? Email { get; init; }
        public string? PhoneNr { get; init; }
    }
}