using CarRentalApi.Models;

namespace CarRentalApi.Repository
{
    public interface IDriverRepository
    {
        Task<int> AddDriver(Driver obj);
        Task<int> DeleteDriver(int id);
        Task<List<Driver>> getAllDriver();
        Task<Driver> getDriverbyId(int id);
        Task<Driver> UpdateDriver(int id, Driver obj);
    }
}