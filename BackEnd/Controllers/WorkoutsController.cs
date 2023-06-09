using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackEnd.Model;
using static BackEnd.Model.Workout;

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
            var workout = _context.WorkoutList!.Find(id);
            if (workout == null) {
                return NotFound();
            }
            return Ok(workout);
        }

        [HttpGet("{id}/participants")]
        public IActionResult GetWorkoutParticipants(int id) {
            var workout = _context.WorkoutList!.Find(id);
            if (workout == null) {
                return NotFound();
            }
            var participants = _context.WorkoutUserList?.Where(wu => wu.WorkoutId == id);
            return Ok(participants);
        }
        [HttpPut("{id}/participants")]
        public IActionResult GetWorkoutParticipants(int id, [FromQuery] bool remove) {
            var workout = _context.WorkoutList!.Find(id);
            if (workout == null) {
                return NotFound();
            }
            var userId = 1;
            var participant = _context.WorkoutUserList?.FirstOrDefault(wu => wu.UserId == userId && wu.WorkoutId== id);
            if(remove && participant != null) {
                _context.WorkoutUserList.Remove(participant);
                _context.SaveChanges();
            } else if(!remove && participant == null) {
                _context.WorkoutUserList.Add(new () {
                    Id = 0,
                    UserId = userId, 
                    WorkoutId = id 
                });
                _context.SaveChanges();
            }
            var participants = _context.WorkoutUserList.Where(wu => wu.WorkoutId == id);
            return Ok(participants.Count());
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
            var dbWorkout = _context.WorkoutList!.AsNoTracking().FirstOrDefault(x => x.Id == workout.Id);
            if (id != workout.Id || dbWorkout == null) {
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
        [HttpPost("/add-workout-user")]
        public IActionResult AddWorkoutUser([FromBody] WorkoutUser workoutUser)
        {
            var dbWorkout = _context.WorkoutList!.Find(workoutUser.WorkoutId);
            if (dbWorkout == null)
            {
                return Conflict();
            }
            var dbUser = _context.UserList!.Find(workoutUser.UserId);
            if(dbUser == null)
            {
                return Conflict();
            }

            if(_context.WorkoutUserList.Any(wu => wu.UserId == workoutUser.UserId && wu.WorkoutId == workoutUser.WorkoutId)) {
                return Conflict();
            }

            _context.Add(workoutUser);
            //dbWorkout.WorkoutUsers.Add(workoutUser);
            _context.SaveChanges();

            return Ok(workoutUser);
        }
    }
}