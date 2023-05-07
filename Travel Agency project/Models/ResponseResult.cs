using System;
namespace Travel_Agency_project.Models
{
    public class ResponseResult
    {
        public bool Success { get; set; }
        public dynamic[] Data { get; set; }
    }
}

