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
    public class AsignaturaController : ControllerBase
    {
        private readonly SoftwareContext _context;

        public AsignaturaController(SoftwareContext context)
        {
            _context = context;

            if (_context.Asignaturas.Count() == 0)
            {


                _context.Asignaturas.Add(new Asignatura {AsignaturaId="SS501",Nombre="programacion web",Ncreditos="3",PreRequisitos="prueba",CoRequisitos="prueba",Tipo="Teorico-Practica",NatAsignatura1="prueba",NatAsignatura2="prueba1",programaId="01"});
                _context.SaveChanges();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        [HttpGet]
        /* public async Task<ActionResult<IEnumerable<FacturaItem>>> GetMaestroFactura()
        {
        return await _context.MaestroFactura.ToListAsync();
        }*/

        public async Task<ActionResult<IEnumerable<Asignatura>>> Get()
        {
            return await _context.Asignaturas.Include(t => t.Programa).ToListAsync();
        }
        
       [HttpGet("programa={ProgramaId}")]
        
        public async Task<ActionResult<IEnumerable<Asignatura>>> GetAsignaturasByPrograma(string ProgramaId)
        {
            return await _context.Asignaturas.Where(t=>t.programaId==ProgramaId).Include(t => t.Programa).ToListAsync();
        }

    


        

        [HttpGet("{id}")]
        public async Task<ActionResult<Asignatura>> GetAsignaturaItem(string id)
        {
            var asignatura = await _context.Asignaturas.Include(t => t.Programa)
            .FirstOrDefaultAsync(t => t.AsignaturaId==id);
            if (asignatura == null)
            {
                return NotFound();
            }
            return asignatura;
        }


    

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Asignatura>> PostAsignaturaItem(Asignatura item)
        {
            if (item.Programa != null)
            {
                item.programaId = item.Programa.programaId;
                item.Programa = null;
            }
            _context.Asignaturas.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAsignaturaItem), new { id = item.AsignaturaId }, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutAsignaturaItem(string id, Asignatura item)
        {
            if (id != item.AsignaturaId)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

  


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsignaturaItem(string id)
        {
            var asignatura = await _context.Asignaturas.FindAsync(id);
            if (asignatura == null)
            {
                return NotFound();
            }

            _context.Asignaturas.Remove(asignatura);
            await _context.SaveChangesAsync();
            return NoContent();

        }

    }
}