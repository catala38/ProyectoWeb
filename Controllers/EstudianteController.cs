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
            return await _context.Estudiantes.Include(t => t.CargaAcademica).ToListAsync();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Estudiante>> GetEstudianteItem(string id)
        {
            
            var estudiante = await _context.Estudiantes.Include(t => t.CargaAcademica)
            .FirstOrDefaultAsync(t => t.Identificacion==id);
            if (estudiante == null)
            {
                return NotFound();
            }
            return estudiante;
        }



        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Estudiante>> PostEstudianteItem(Estudiante item)
        {
           
          
            _context.Estudiantes.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEstudianteItem), new { id = item.Identificacion}, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstudianteItem(string id, Estudiante item)
        {
            if (id != item.Identificacion)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstudianteItem(string id)
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