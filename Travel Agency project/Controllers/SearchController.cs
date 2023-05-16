using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Newtonsoft.Json;
using Travel_Agency_project.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Travel_Agency_project.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SearchController : Controller
    {

        [HttpGet("GetOffers")]
        public async Task<IActionResult> GetOffers(DateTime date)
        {


            /* ViewData["value"] = info.Currencies.SelectedValue + " / " +
                                 info.Countries.SelectedValue + " / " +
                                 info.Cities.SelectedValue + " / " +
                                 info.HotelClasses.SelectedValue + " / " +
                                  DateTime.Now;*/

            string url = "https://search.tez-tour.com/tariffsearch/getResult";
            Dictionary<string, string> param = new Dictionary<string, string>()
        {
            {"accommodationId", "2"},
            {"after", date.ToString("d") },
            {"before",date.ToString("d") },
            {"cityId", "345" },
            {"countryId", "1104" },
            {"nightsMin", "8" },
            {"nightsMax", "12" },
            {"currency", "5561" },
            {"priceMin", "0" },
            {"priceMax", "120000" },
            {"hotelClassId", "2569" },
            {"hotelClassBetter", "true" },
            {"rAndBId", "2424"},
            {"rAndBBetter", "true" }
        };

            string request = QueryHelpers.AddQueryString(url, param);

            HttpClient client = new HttpClient();
            var response = await client.GetAsync(request);
            var json = await response.Content.ReadAsStringAsync();

            ResponseResult result = JsonConvert.DeserializeObject<ResponseResult>(json);

            LinkedList<Hotel> hotels = new LinkedList<Hotel>();

            foreach (var hotel in result.Data)
            {
                hotels.AddLast(new Hotel()
                {
                    HImage = hotel[6][2],
                    HName = hotel[6][1],
                    Date = hotel[0],
                    Day = hotel[2],
                    Nights = hotel[3],
                    Price = hotel[10].total

                });


            
                
             }
            return Json(hotels);
}

        // GET: /<controller>/

    }
}

