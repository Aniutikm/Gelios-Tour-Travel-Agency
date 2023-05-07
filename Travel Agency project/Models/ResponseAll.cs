using System;
namespace Travel_Agency_project.Models
{
    public class ResponseAll
    {
        public bool Success { get; set; }
        public string ServerName { get; set; }
        public List<Cities> Cities { get; set; }
        public List<Countries> Countries { get; set; }
        public List<Currencies> Currencies { get; set; }
        public List<HotelClasses> HotelClasses { get; set; }
        public List<Meal> RAndBs { get; set; }
        public List<TourTypes> TourTypes { get; set; }


    }
}

