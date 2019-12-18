using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
namespace ProyectoV2.Models
{
    public class ItemPlanDesarrollo
    {
        [Key]
        public int IdPlan { get; set; }
        public EjeTematico EjeTematico { get; set; }
        public int EjeTematicoId { get; set; }
        public Grupo grupo { get; set; }
        public int GrupoId { get; set; }
        public string FechaInicio { get; set; }
        public string FechaFin { get; set; }
        public List<TemaIP> TemasIP{get; set;}
        public string Periodo { get; set; }
        public string Ano { get; set; }
        public string TrabajoIndependiente { get; set; }
        public string Estrategias { get; set; }
        public string Competencias { get; set; }
        public string Referencias { get; set; }
    }
}