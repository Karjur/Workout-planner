using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GroupsController
    {
        private readonly DataContext _context;

        public GroupsController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetGroups() {
            return Ok(_context.GroupList);
        }
    }
}