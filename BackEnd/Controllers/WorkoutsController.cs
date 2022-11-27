using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Model;
using static BackEnd.Model.Workout;

namespace BackEnd.Controllers
{
    // [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class WorkoutsController : ControllerBase
    {
        private readonly DataContext _context;

        public WorkoutsController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetWorkouts() {
            var workouts = _context.WorkoutList?.ToArray();
            return Ok(workouts);
        }

        [HttpGet("{id}")]
        public IActionResult GetWorkout(int? id) {
            // && e.OrganizationId == GetOrganizationId()
            var workout = _context.WorkoutList!.FirstOrDefault(e => e.Id == id );
            if (workout == null) {
                return NotFound();
            }
            return Ok(workout);
        }

        [HttpPost]
        public IActionResult AddWorkout([FromBody] Workout workout) {
            var dbWorkout = _context.WorkoutList!.Find(workout.Id);
            if (dbWorkout == null) {
                // workout.OrganizationId = GetOrganizationId();
                _context.Add(workout);
                _context.SaveChanges();

                return CreatedAtAction(nameof(GetWorkout), new { Id = workout.Id }, workout);
            }
            return Conflict();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateWorkout(int? id, [FromBody] Workout workout) {
            var dbWorkout = _context.WorkoutList!.AsNoTracking().FirstOrDefault(x => x.Id == workout.Id);
            if (id != workout.Id || dbWorkout == null) {
                return NotFound();
            }

            // workout.OrganizationId = GetOrganizationId();

            // if (workout.OrganizationId != dbWorkout.OrganizationId) {
            //     return Unauthorized();
            // }

            _context.Update(workout);
            _context.SaveChanges();

            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteWorkout(int? id) {
            var workout = _context.WorkoutList?.Find(id);
            if (workout == null) {
                return NotFound();
            }

            // if (workout.OrganizationId != GetOrganizationId()) {
            //     return Unauthorized();
            // }

            _context.Remove(workout);
            _context.SaveChanges();

            return NoContent();
        }

        private int GetOrganizationId() {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            return int.Parse(identity!.FindFirst("organizationId")!.Value);
        }

    }
}