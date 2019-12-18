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
    public class ItemPlanDesarrolloController: ControllerBase
    {
        private readonly SoftwareContext _context;

        public ItemPlanDesarrolloController(SoftwareContext context)
        {
            _context = context;

            if (_context.ItemPlanesDesarrollo.Count() == 0)
            {


            }
        }

        // Aquí, despues del constructor de la clase, irán los Métodos HTTP GET,POST, DELETE, PUT
        [HttpGet]

        public async Task<ActionResult<IEnumerable<ItemPlanDesarrollo>>> Get()
        {
            return await _context.ItemPlanesDesarrollo
            .Include(t=>t.EjeTematico)
            .Include(t=>t.grupo)
            .ThenInclude(t=>t.Docente)
            .ThenInclude(t=>t.Programa)
            .Include(t=>t.grupo)
            .ThenInclude(t=>t.Asignatura)
            .Include(t=>t.TemasIP)
            .ToListAsync();
        }
                [HttpGet("grupo={idGrupo}")]

        public async Task<ActionResult<IEnumerable<ItemPlanDesarrollo>>> GetItemsPlanByGrupo(int idGrupo)
        {
            return await _context.ItemPlanesDesarrollo
            .Include(t=>t.EjeTematico)
            .Include(t=>t.grupo)
            .ThenInclude(t=>t.Docente)
            .ThenInclude(t=>t.Programa)
            .Include(t=>t.grupo)
            .ThenInclude(t=>t.Asignatura)
            .Include(t=>t.TemasIP)
            .Where(t=>t.GrupoId==idGrupo)
            .ToListAsync();
        }
 
 

        [HttpGet("{id}")]
        public async Task<ActionResult<ItemPlanDesarrollo>> GetItemPlanDesarrollo(int id)
        {
            var  itemPlanDesarrollo = await _context.ItemPlanesDesarrollo
            .Include(t=>t.EjeTematico)
            .Include(t=>t.grupo)
            .ThenInclude(t=>t.Docente)
            .ThenInclude(t=>t.Programa)
            .Include(t=>t.grupo)
            .ThenInclude(t=>t.Asignatura)
            .Include(t=>t.TemasIP)
            .FirstOrDefaultAsync(t=>t.IdPlan==id);
            if (itemPlanDesarrollo == null)
            { 
                return NotFound();
            }
            return itemPlanDesarrollo;
        }
    

        // POST: api/Task
        [HttpPost]
        public async Task<ActionResult<ItemPlanDesarrollo>> PostitemPlanDesarrollo(ItemPlanDesarrollo item)
        {
            item.GrupoId=item.grupo.GrupoId;
            item.grupo=null;
            item.EjeTematicoId=item.EjeTematico.EjeId;
            item.EjeTematico=null;
            _context.ItemPlanesDesarrollo.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetItemPlanDesarrollo), new { id = item.IdPlan }, item);

        }


        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemPlanDesarrolloItem(int id, ItemPlanDesarrollo item)
        {
            if (id != item.IdPlan)
            {
                return BadRequest();
            }
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

  


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemPlanDesarrolloItem(string id)
        {
            var itemPlanDesarrollo = await _context.ItemPlanesDesarrollo.FindAsync(id);
            if (itemPlanDesarrollo == null)
            {
                return NotFound();
            }

            _context.ItemPlanesDesarrollo.Remove(itemPlanDesarrollo);
            await _context.SaveChangesAsync();
            return NoContent();

        }

    
    }
    
}