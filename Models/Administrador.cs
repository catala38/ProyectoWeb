using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace ProyectoV2.Models
{
    public class Administrador
    {
        
       [Key]
        public string Usuario { get; set; }
        public string Password { get; set; }
        public string Rol { get; set; }
    }
}