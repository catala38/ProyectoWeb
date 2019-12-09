using Microsoft.EntityFrameworkCore;
namespace ProyectoV2.Models
{
    public class SoftwareContext : DbContext
    {
        public SoftwareContext(DbContextOptions<SoftwareContext> options) :
        base(options)
        {
        }
        public DbSet<Facultad> Facultades { get; set; }
        public DbSet<Programa> Programas { get; set; }
        public DbSet<Asignatura> Asignaturas { get; set; }
        public DbSet<Docente> Docentes { get; set; }
        public DbSet<EjeTematico> EjeTematicos { get; set; }
        
        public DbSet<Tema> Temas { get; set; }

        public DbSet<Grupo> Grupos { get; set; }
        public DbSet<CargaAcademica> CargaAcademicas { get; set; }
        public DbSet<Estudiante> Estudiantes { get; set; }

        public DbSet<Administrador> Administradores { get; set; }
    }
}

