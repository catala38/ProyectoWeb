using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;


namespace ProyectoV2.Models
{
    public class Asignatura
    {
        [Key]
        [JsonProperty("AsignaturaId")]
        public string AsignaturaId { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Ncreditos { get; set; }

      
        public string PreRequisitos { get; set; }

        
        public string CoRequisitos { get; set; }

        [Required]
        public string Tipo { get; set; }


        [Required]
        public string NatAsignatura1 { get; set; }

        [Required]
        public string NatAsignatura2 { get; set; }
       
        public string programaId { get; set; }


        public Programa Programa { get; set; }






    }
}