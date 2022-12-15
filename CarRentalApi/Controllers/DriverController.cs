using CarRentalApi.Models;
using CarRentalApi.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriverController : ControllerBase
    {
        private readonly IDriverRepository _db;
        public DriverController(IDriverRepository _db)
        {
            this._db = _db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var data = await _db.getAllDriver();
            return Ok(data);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDriverById (int id) 
        {
           var data = await _db.getDriverbyId(id);
            return Ok(data);    
        }
        [HttpPost]
        public async Task<IActionResult> AddDriver([FromBody]Driver obj)
        {
            await _db.AddDriver(obj);
            return Ok("New Driver Added");
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDriver(int id , [FromBody] Driver obj)
        {
            var data = await _db.UpdateDriver(id, obj);
            return Ok(data);
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriver(int id)
        {
            var data = await _db.DeleteDriver(id);
             return Ok("Delete Successful");
        }
    }
}
