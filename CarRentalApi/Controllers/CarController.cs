using CarRentalApi.Models;
using CarRentalApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarController : ControllerBase
    {
        private readonly ICarRepository _db;
        public CarController(ICarRepository db)
        {
            this._db = db;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllCars()
        {
            var data = await _db.GetAllCars();
            return Ok(data);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCarById(int id)
        {
            var data = await _db.GetById(id);
            if (data != null)
            {
                return Ok(data);
            }
            return NotFound(" Car Not Found");

        }

        [HttpPost]
        public async Task<IActionResult> AddCar([FromBody] Car obj)
        {
            await _db.AddCar(obj);
            return Ok(obj);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCar(int id, [FromBody] Car obj)
        {
            var data = _db.UpdateCar(id, obj);
            return Ok(obj);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            var data = await _db.DeleteCar(id);
            return Ok("Successfully Deleted");
        }
    }
}
