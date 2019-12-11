using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;


namespace ProyectoV2.Models
{
    public class Estudiante
    {
        [Key]
        public int EstudianteId { get; set; }
        
        [Required]
        public string Identificacion { get; set; }

        [Required]
        public string PrimerNombre { get; set; }

        public string SegundoNombre { get; set; }

        [Required]
        public string PrimerApellido { get; set; }

        public string SegundoApellido { get; set; }

        public string Correo { get; set; }

        public int GrupoId { get; set; }

        public Grupo Grupo { get; set; }
    }
}