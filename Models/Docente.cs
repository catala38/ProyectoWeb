using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace ProyectoV2.Models
{
    public class Docente
    {
        [Key]
        [Required]
        public string Identificacion { get; set; }
        [Required]
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        [Required]
        public string PrimerApellido { get; set; }
        [Required]
        public string SegundoApellido { get; set; }

        [Required]
        public string Correo { get; set; }
        [Required]
        public string Telefono { get; set; }

        public string Password { get; set; }

        public string Rol { get; set; }

        public int programaId { get; set; }

        public Programa Programa { get; set; }
    }
}