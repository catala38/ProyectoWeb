using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace ProyectoV2.Models
{
    public class Grupo
    {
        [Key]
        public int GrupoId { get; set; }

        [Required]
        public int numero { get; set; }
        public Asignatura Asignatura { get; set; }
        public string AsignaturaId { get; set; }
        public Docente Docente { get; set; }
        public string DocenteId { get; set; }
    
     

    }
}