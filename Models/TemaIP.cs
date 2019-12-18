using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;


namespace ProyectoV2.Models
{
    public class TemaIP
    {
          [Key]
        public int TemaIPId { get; set; }

        [Required]
        public string Nombre { get; set; }

       

        
    }
}