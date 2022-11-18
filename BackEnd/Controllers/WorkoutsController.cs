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
    public class WorkoutsController : ControllerBase
    {
        private readonly DataContext _context;

        public WorkoutsController(DataContext context) {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetWorkouts() {
            return Ok(_context.WorkoutList);
        }

        [HttpGet("{id}")]
        public IActionResult GetWorkout(int? id) {
            var coach = _context.WorkoutList!.Find(id);
            if (coach == null) {
                return NotFound();
            }
            return Ok(coach);
        }

        [HttpPost]
        public IActionResult AddWorkout([FromBody] Workout workout) {
            var dbWorkout = _context.WorkoutList!.Find(workout.Id);
            if (dbWorkout == null) {
                _context.Add(workout);
                _context.SaveChanges();

                return CreatedAtAction(nameof(GetWorkout), new { Id = workout.Id }, workout);
            }
            return Conflict();
        }

        [HttpPut("{id}")]
        public IActionResult UpdateWorkout(int? id, [FromBody] Workout workout) {
            if (id != workout.Id || !_context.WorkoutList!.Any(e => e.Id == id)) {
                return NotFound();
            }

            _context.Update(workout);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteWorkout(int? id) {
            var workout = _context.WorkoutList?.Find(id);
            if (workout == null) {
                return NotFound();
            }

            _context.Remove(workout);
            _context.SaveChanges();

            return NoContent();
        }
    }
}