using System;
using System.ComponentModel.DataAnnotations;

namespace Travel_Agency_project.Models
{
    public class RequestModel
    {
        [Display(Prompt = "Ваше імʼя")]
        [Required(ErrorMessage = "Поле обов'язкове для заповнення")]
        public string Name { get; set; }

        [Phone]
        [Required(ErrorMessage = "Поле обов'язкове для заповнення")]
        [Display(Prompt = "Телефон")]
        public string Phone { get; set; }

        [Required(ErrorMessage = "Поле обов'язкове для заповнення")]
        [Display(Prompt = "Повідомлення")]
        public string Message { get; set; }
    }
}

