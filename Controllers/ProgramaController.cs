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
    public class ProgramaController : ControllerBase
    {
        private readonly SoftwareContext _context;

        public ProgramaController(SoftwareContext context)
        {
            _context = context;

            if (_context.Programas.Count() == 0)

                _context.Programas.Add(new Programa { FacultadId = 1, programaId="01",nombrePro = "SISTEMAS", duracionSementral = 0, horario = "Normal", metodologia = "dinamica" });
            _context.SaveChanges();
        }


        // traer todo el objeto facultad

        public async Task<ActionResult<IEnumerable<Programa>>> Get()
        {
            return await _context.Programas.Include(t => t.Facultad).ToListAsync();
        }


        //consultar por nombre 
        [HttpGet("programa={nombrePro}")]
        public async Task<ActionResult<Programa>> GetProgramaItem(string nombrePro)
        {
            var programa = await _context.Programas.FirstOrDefaultAsync(t => t.nombrePro == nombrePro);
            if (programa == null)
            {
                return NotFound();
            }
            return programa;
        }



        [HttpGet("{id}")]
        public async Task<ActionResult<Programa>> GetProgramaItem1(string id)
        {
            var programa = await _context.Programas
            .Include(t => t.Facultad)
            .FirstOrDefaultAsync(t => t.programaId == id);
            if (programa == null)
            {
                return NotFound();
            }
            return programa;
        }


        [HttpGet("Facultad={FacultadId}")]
        public async Task<ActionResult<IEnumerable<Programa>>> GetProgramasFac(int FacultadId)
        {
            return await _context.Programas.Where(t=>t.FacultadId==FacultadId).Include(t =>t.Facultad).ToListAsync();
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Programa>> PostProgramaItem(Programa item)
        {
            if (item.Facultad != null)
            {
                item.FacultadId = item.Facultad.facultadId;
                item.Facultad = null;
            }
            item.nombrePro=item.nombrePro.ToUpper();
            _context.Programas.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetProgramaItem), new { id = item.programaId }, item);
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgramaItem(string id, Programa item)
        {
            if (id != item.programaId)
            {
                return BadRequest();
            }
            item.nombrePro=item.nombrePro.ToUpper();
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProgramaItem(string id)
        {
            var programa = await
            _context.Programas.FindAsync(id);
            if (programa == null)
            {
                return NotFound();
            }

            _context.Programas.Remove(programa);
            await _context.SaveChangesAsync();
            return NoContent();

        }

    }

}


