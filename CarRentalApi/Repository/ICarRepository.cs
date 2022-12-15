using CarRentalApi.Models;

namespace CarRentalApi.Repository
{
    public interface ICarRepository
    {
        Task AddCar(Car obj);
        Task<int> DeleteCar(int id);
        Task<List<Car>> GetAllCars();
        Task<Car?> GetById(int id);
        Task<Car> UpdateCar(int id, Car obj);
    }
}