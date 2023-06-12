using System;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace Travel_Agency_project.Models
{
    public class BasicInfo
    {
        public SelectListModel Currencies { get; set; }
        public SelectListModel Countries { get; set; }
        public SelectListModel Cities { get; set; }
        public SelectListModel HotelClasses { get; set; }
        public SelectListModel Meal { get; set; }
        public int PriceMin { get; set; }
        public int PriceMax { get; set; }
        [UIHint("date")]
        public DateTime Before { get; set; }
        [UIHint("date")]
        public DateTime After { get; set; }
        public int NightsMin { get; set; }
        public int NightsMax { get; set; }

        public BasicInfo()
        {
            PriceMax = 999999;
            After = DateTime.Now;
            Before = DateTime.Now;
        }
    }

    public class SelectListModel
    {
        public string SelectedValue { get; set; }
        public List<SelectListItem> Result { get; set; }
    }

    public static class ExtendResponseAll
    {
        public static BasicInfo GenerateBasic(this ResponseAll response)
        {
            BasicInfo result = new BasicInfo();

            List<SelectListItem> currensies = new List<SelectListItem>();
            foreach (var currency in response.Currencies)
            {
                currensies.Add(new SelectListItem(currency.Code, currency.CurrencyId.ToString()));
            }

            result.Currencies = new SelectListModel()
            {
                Result = currensies,
                SelectedValue = currensies[3].Value
            };


            List<SelectListItem> countries = new List<SelectListItem>();
            foreach (var currency in response.Countries)
            {
                countries.Add(new SelectListItem(currency.Name, currency.CountryId.ToString()));
            }

            result.Countries = new SelectListModel()
            {
                Result = countries,
                SelectedValue = countries[20].Value
            };

            List<SelectListItem> cities = new List<SelectListItem>();
            foreach (var city in response.Cities)
            {
                cities.Add(new SelectListItem(city.Name, city.CityId.ToString()));
            }

            result.Cities = new SelectListModel()
            {
                Result = cities,
                SelectedValue = cities[11].Value
            };

            List<SelectListItem> hotelClasses = new List<SelectListItem>();
            foreach (var hotelClass in response.HotelClasses)
            {
                hotelClasses.Add(new SelectListItem(hotelClass.Name, hotelClass.ClassId.ToString()));
            }

            result.HotelClasses = new SelectListModel()
            {
                Result = hotelClasses,
                SelectedValue = hotelClasses[0].Value
            };

            List<SelectListItem> meals = new List<SelectListItem>();
            foreach (var meal in response.RAndBs)
            {
                meals.Add(new SelectListItem(meal.Name, meal.RAndBId.ToString()));
            }

            result.Meal = new SelectListModel()
            {
                Result = meals,
                SelectedValue = meals[0].Value
            };

            return result;
        }
    }
}
