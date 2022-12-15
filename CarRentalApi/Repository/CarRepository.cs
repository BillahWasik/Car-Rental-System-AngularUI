using CarRentalApi.Models;
using EmployeeApi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;

namespace CarRentalApi.Repository
{
    public class CarRepository : ICarRepository
    {
        private readonly ApplicationDbContext _db;
        public CarRepository(ApplicationDbContext db)
        {
            this._db = db;
        }

        public async Task<List<Car>> GetAllCars()
        {
            return await _db.Cars.ToListAsync();
        }

        public async Task<Car?> GetById(int id)
        {
            var data = await _db.Cars.Where(x => x.Id == id).FirstOrDefaultAsync();
            if (data != null)
            {
                return data;
            }
            return null;
        }

        public async Task AddCar(Car obj)
        {
            _db.Cars.Add(obj);
            await _db.SaveChangesAsync();
        }

        public async Task<Car> UpdateCar(int id, Car obj)
        {
            var data = _db.Cars.Where(x => x.Id == id).FirstOrDefault();
            if (data != null)
            {
                data.Seating_Capacity = obj.Seating_Capacity;
                data.AddedDate = obj.AddedDate;
                data.DailyHirePrice = obj.DailyHirePrice;
                data.Brand = obj.Brand;
                data.Registration_Number = obj.Registration_Number;
                data.Fuel_Type = obj.Fuel_Type;
                data.Model = obj.Model;
                data.Registration_Year = obj.Registration_Year;

                await _db.SaveChangesAsync();
            }
            return data;
        }
        public async Task<int> DeleteCar(int id)
        {
            var data = await _db.Cars.Where(x => x.Id == id).FirstOrDefaultAsync();
            _db.Cars.Remove(data);
            await _db.SaveChangesAsync();

            return data.Id;
        }
    }
}
