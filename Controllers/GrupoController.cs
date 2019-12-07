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
    public class GrupoController : ControllerBase
    {
        private readonly SoftwareContext _context;

        public GrupoController(SoftwareContext context)
        {
            _context = context;

            if (_context.Grupos.Count() == 0)
            {


            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        [HttpGet]
     
        public async Task<ActionResult<IEnumerable<Grupo>>> Get()
        {
            return await _context.Grupos
            .Include(t => t.Asignatura)
            .Include(t => t.Docente)
            .ToListAsync();
        }
         [HttpGet("asignatura={asignaturaId}")]
     
        public async Task<ActionResult<IEnumerable<Grupo>>> GetGrupoByAsignatura(string asignaturaId)
        {
            return await _context.Grupos
            .Include(t => t.Asignatura)
            .Include(t => t.Docente)
            .Where(t=>t.AsignaturaId==asignaturaId)
            .ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Grupo>> GetGrupoItem(int id)
        {
            var grupo = await _context.Grupos
            .Include(t => t.Asignatura)
            .Include(t => t.Docente)
            .FirstOrDefaultAsync(t => t.GrupoId==id);
            if (grupo == null)
            {
                return NotFound();
            }
            return grupo;
        }


    

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Grupo>> PostGrupoItem(Grupo item)
        {
          
                item.AsignaturaId = item.Asignatura.AsignaturaId;
                item.Asignatura = null;
            
         
                item.DocenteId = item.Docente.Identificacion;
                item.Docente = null;
            
            _context.Grupos.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetGrupoItem), new { id = item.GrupoId }, item);

        }
        


        [HttpPut("{id}")]
        public async Task<IActionResult> PutGrupoItem(int id, Grupo item)
        {
            if (id != item.GrupoId)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGrupoItem(int id)
        {
            var grupo = await _context.Grupos.FindAsync(id);
            if (grupo == null)
            {
                return NotFound();
            }

            _context.Grupos.Remove(grupo);
            await _context.SaveChangesAsync();
            return NoContent();

        }

    }
}


    
