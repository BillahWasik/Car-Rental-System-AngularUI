using CarRentalApi.Models;
using EmployeeApi.Data;
using Microsoft.EntityFrameworkCore;

namespace CarRentalApi.Repository
{
    public class DriverRepository : IDriverRepository
    {
        private readonly ApplicationDbContext _db;
        public DriverRepository(ApplicationDbContext db)
        {
            this._db = db;
        }

        public async Task<List<Driver>> getAllDriver()
        {
            return await _db.Drivers.ToListAsync();
        }
        public async Task<Driver> getDriverbyId(int id)
        {
            var data = await _db.Drivers.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (data != null)
            {
                return data;
            }
            return null;
        }
        public async Task<int> AddDriver(Driver obj)
        {
            _db.Drivers.Add(obj);
            await _db.SaveChangesAsync();
            return obj.Id;
        }
        public async Task<int> DeleteDriver(int id)
        {
            var data = await _db.Drivers.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (data?.Any() == true)
            {
                _db.Drivers.Remove(data);
                await _db.SaveChangesAsync();
            }
            return id;
        }
        public async Task<Driver> UpdateDriver(int id, Driver obj)
        {
            var data = await _db.Drivers.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (data != null)
            {
                data.Age = obj.Age;
                data.Mobile_Number = obj.Mobile_Number;
                data.Driving_Year = obj.Driving_Year;
                data.City = obj.City;
                data.District = obj.District;
                data.Driver_Name = obj.Driver_Name;

                _db.Drivers.Update(data);
               await _db.SaveChangesAsync();
            }
            return obj;
        }

    }
}
