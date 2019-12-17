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
    public class EjeTematicoController : ControllerBase
    {
        
         private readonly SoftwareContext _context;

        public EjeTematicoController(SoftwareContext context)
        {
            _context = context;

            if (_context.EjeTematicos.Count() == 0)
            {


            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        [HttpGet]
        /* public async Task<ActionResult<IEnumerable<FacturaItem>>> GetMaestroFactura()
        {
        return await _context.MaestroFactura.ToListAsync();
        }*/

        public async Task<ActionResult<IEnumerable<EjeTematico>>> Get()
        {
            return await _context.EjeTematicos
            .Include(t => t.Asignatura)
            .Include(t=>t.Temas)
            .ToListAsync();
        }

        

        [HttpGet("{id}")]
        public async Task<ActionResult<EjeTematico>> GetEjeTematicoItem(int id)
        {
            var eje = await _context.EjeTematicos
            .Include(t => t.Asignatura)
            .Include(t=>t.Temas)
            .FirstOrDefaultAsync(t => t.EjeId==id);
            if (eje == null)
            {
                return NotFound();
            }
            return eje;
        }


      

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<EjeTematico>> PostEjeTematicoItem(EjeTematico item)
        {
            if (item.Asignatura != null)
            {
                item.AsignaturaId = item.Asignatura.AsignaturaId;
                item.Asignatura = null;
            }
            _context.EjeTematicos.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetEjeTematicoItem), new { id = item.EjeId }, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutEjeTematicoItem(int id, EjeTematico item)
        {
            if (id != item.EjeId)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEjeTematicoItem(int id)
        {
            var eje = await _context.EjeTematicos.FindAsync(id);
            if (eje == null)
            {
                return NotFound();
            }
            _context.Temas.RemoveRange(eje.Temas);
            _context.EjeTematicos.Remove(eje);
            await _context.SaveChangesAsync();
            return NoContent();

        }


    }
}