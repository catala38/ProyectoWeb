using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace ProyectoV2.Models
{
    public class Programa
    {
        [Key]
        public string programaId { get; set; }
        
        public string nombrePro { get; set; }        
        public int duracionSementral { get; set; }
        public string horario { get; set; }
        public string metodologia { get; set; }

        public int FacultadId { get; set; }
        public Facultad Facultad { get; set; }
   

    }
}