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
    public class DocenteController : ControllerBase
    {
        private readonly SoftwareContext _context;

        public DocenteController(SoftwareContext context)
        {
            _context = context;

            if (_context.Docentes.Count() == 0)
            {


                _context.Docentes.Add(new Docente {Identificacion="77030926",TipoId="Cedula de ciudadanía",PrimerNombre="LUCHO",PrimerApellido="catalan",SegundoApellido="santiago",Correo="yovaingeniero@gmail.com",Telefono="3107138302",Password="123",Rol="Docente",programaId=1  });
                _context.SaveChanges();
            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        [HttpGet]
    
        public async Task<ActionResult<IEnumerable<Docente>>> Get()
        {
            return await _context.Docentes.Include(t => t.Programa).ToListAsync();
        }


     
        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetDocenteItem(string id)
        {
            
            var docente = await _context.Docentes.Include(t => t.Programa).FirstOrDefaultAsync(t => t.Identificacion==id);
            if (docente == null)
            {
                return NotFound();
            }
            return docente;
        }


/*
        [HttpGet("{id}")]
        public async Task<ActionResult<Docente>> GetDocenteItem(string id)
        {
            var docente = await _context.Docentes.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }
            return docente;
        } 
*/



        [HttpGet("Programa={ProgramaId}")]
        public async Task<ActionResult<IEnumerable<Docente>>> GetDocentesByProgramas(int programaId)
        {
            return await _context.Docentes.Where(t=>t.programaId==programaId).Include(t =>t.Programa).ToListAsync();
        }


        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Docente>> PostDocenteItem(Docente item)
        {
            if (item.Programa != null)
            {
                item.programaId = item.Programa.programaId;
                item.Programa = null;
            }
          
            _context.Docentes.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetDocenteItem), new { id = item.Identificacion}, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutDocenteItem(string id, Docente item)
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
        public async Task<IActionResult> DeleteDocenteItem(string id)
        {
            var docente = await _context.Docentes.FindAsync(id);
            if (docente == null)
            {
                return NotFound();
            }

            _context.Docentes.Remove(docente);
            await _context.SaveChangesAsync();
            return NoContent();

        }


    }
}