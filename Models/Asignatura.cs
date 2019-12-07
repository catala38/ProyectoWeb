using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;


namespace ProyectoV2.Models
{
    public class Asignatura
    {
        [Key]
        public string AsignaturaId { get; set; }

        [Required]
        public string Nombre { get; set; }

        [Required]
        public string Ncreditos { get; set; }

        [Required]
        public string PreRequisitos { get; set; }

        [Required]
        public string CoRequisitos { get; set; }

        [Required]
        public string Tipo { get; set; }


        [Required]
        public string NatAsignatura1 { get; set; }

        [Required]
        public string NatAsignatura2 { get; set; }
       
        public int programaId { get; set; }


        public Programa Programa { get; set; }






    }
}