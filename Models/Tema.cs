using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;


namespace ProyectoV2.Models
{
    public class Tema
    {
        [Key]
        public int TemaId { get; set; }

        [Required]
        public string Nombre { get; set; }

       
         public int EjeTematicoId { get; set; }




    }
}