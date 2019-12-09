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
    public class FacultadController : ControllerBase
    {

        private readonly SoftwareContext _context;

        public FacultadController(SoftwareContext context)
        {
            _context = context;

            if (_context.Facultades.Count() == 0)
            {
                _context.Facultades.Add(new Facultad { nombre = "TECNOLOGIAS" });
                _context.SaveChanges();
            }
        }

       
        [HttpGet]
        public IEnumerable<Facultad> Get()
        {
            return _context.Facultades;
        }

        //consultar por nombre 
        [HttpGet("facultad={nombre}")]
        public async Task<ActionResult<Facultad>> GetFacultadItem(string nombre)
        {
            var facultad =  await _context.Facultades.FirstOrDefaultAsync(t=>t.nombre==nombre);
            if (facultad == null)
            {
                return NotFound();
            }
            return facultad;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Facultad>> GetFacultadItem(int id)
        {
            var facultad = await _context.Facultades.FindAsync(id);
            if (facultad == null)
            {
                return NotFound();
            }
            return facultad;
        }

        

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<Facultad>> PostFacultadItem(Facultad item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //Validar si el nombre ya existe
            item.nombre=item.nombre.ToUpper();
            _context.Facultades.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetFacultadItem), new { id = item.facultadId }, item);
        }



        [HttpPut("{id}")]
        public async Task<IActionResult> PutFacultadItem(int id, Facultad item)
        {
            if (id != item.facultadId)
            {
                return BadRequest();
            }
            item.nombre=item.nombre.ToUpper();
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }



        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFacultadItem(int id)
        {
            var facultad = await _context.Facultades.FindAsync(id);
            if (facultad == null)
            {
                return NotFound();
            }

            _context.Facultades.Remove(facultad);
            await _context.SaveChangesAsync();
            return NoContent();

        }
    }


}
