using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Model;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CoachesController : ControllerBase
    {
        private readonly DataContext _context;

        public CoachesController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCoaches() {
            return Ok(_context.CoachList);
        }
    }
}