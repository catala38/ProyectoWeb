using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;


namespace ProyectoV2.Models
{
    public class Facultad
    {
    
        [Key]
        public int facultadId { get; set; }
        [Required]
        public string nombre { get; set; }

        
        
      
    }
}