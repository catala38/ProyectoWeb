using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoV2.Models;
using System;
using System.Collections;


namespace ProyectoV2.Controllers
{
      [Route("api/[controller]")]
    [ApiController]
    public class EstudianteController : ControllerBase
    {
        private readonly SoftwareContext _context;
    public EstudianteController(SoftwareContext context)
        {
            _context = context;

            if (_context.Estudiantes.Count() == 0)
            {
             
            }
        }

        
        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
       [HttpGet]
     

        public async Task<ActionResult<IEnumerable<Estudiante>>> Get()
        {
            return await _context.Estudiantes.Include(t => t.Grupo).ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante>> GetEstudianteItem(int id)
        {
            
            var estudiante = await _context.Estudiantes.Include(t => t.Grupo)
            .FirstOrDefaultAsync(t => t.EstudianteId==id);
            if (estudiante == null)
            {
                return NotFound();
            }
            return estudiante;
        }




         [HttpPost]
        public async Task<ActionResult<Estudiante>> PostEstudianteItem(Estudiante item)
        {
            if (item.Grupo != null)
            {
                item.GrupoId = item.Grupo.GrupoId;
                item.Grupo = null;
            }
          
            _context.Estudiantes.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEstudianteItem), new { id = item.EstudianteId}, item);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudianteItem(int id, Estudiante item)
        {
            if (id != item.EstudianteId)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

      
  [HttpGet("Grupo={GrupoId}")]
        
        public async Task<ActionResult<IEnumerable<Estudiante>>> GetEstudianteByGrupo(int GrupoId)
        {
            return await _context.Estudiantes.Where(t=>t.GrupoId==GrupoId).Include(t => t.Grupo).ToListAsync();
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstudianteItem(int id)
        {
            var estudiante = await _context.Estudiantes.FindAsync(id);
            if (estudiante == null)
            {
                return NotFound();
            }

            _context.Estudiantes.Remove(estudiante);
            await _context.SaveChangesAsync();
            return NoContent();

        }
        
    }
}