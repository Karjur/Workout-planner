using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using Microsoft.AspNetCore.Mvc;
using BackEnd.Model;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;



namespace BackEnd.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : Controller {
        private readonly DataContext _context;
        private IConfiguration _config;

        public UsersController(IConfiguration config, DataContext context) {
            _config = config;
            _context = context;
        }

        [HttpGet("{username}&{password}")]
        public ActionResult<User> GetUser(string username, string password) {
            var userN = _context.UserList!.Where(x => x.Username == username);
            var userP = _context.UserList!.Where(x => x.Password == password);
            if (userN == null || userP == null && userN == userP) {
                return NotFound();
            }
            return Ok(userN);
        }
    }
}
