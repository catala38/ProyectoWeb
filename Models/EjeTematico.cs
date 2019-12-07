using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;
namespace ProyectoV2.Models
{
    public class EjeTematico
    {
        
        [Key]
        public int EjeId { get; set; }
        
        [Required]
        public string Nombre { get; set; }

        public string AsignaturaId { get; set; }

        public Asignatura Asignatura { get; set; }
        
        public List<Tema> Temas { get; set; }
    }
}