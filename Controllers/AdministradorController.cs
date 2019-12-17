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
    public class AdministradorController : ControllerBase
    {
        private readonly SoftwareContext _context;

        public AdministradorController(SoftwareContext context)
        {
            _context = context;

            if (_context.Administradores.Count() == 0)
            {


                _context.Administradores.Add(new Administrador { Usuario = "Admin", Password = "123", Rol = "Administrador" });
                _context.SaveChanges();
            }
        }


        [HttpGet]
        public IEnumerable<Administrador> Get()
        {
            return _context.Administradores;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<Administrador>> GetAdministradorItem(string id)
        {
            
            var Administrador = await _context.Administradores.FindAsync(id);
            if (Administrador == null)
            {
                return NotFound();
            }
            return Administrador;
        }


      

        [HttpPost]
        public async Task<ActionResult<Administrador>> PostAdministradorItem(Administrador item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

 
           
            _context.Administradores.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAdministradorItem), new { id =item.Usuario }, item);
        }


        
    }
}