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
    public class TemaController:ControllerBase
    {
        private readonly SoftwareContext _context;
        public TemaController(SoftwareContext context)
        {
            _context = context;

        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Tema>> GetTema(int id)
        {
            var tema = await _context.Temas
            .FindAsync(id);
            if (tema == null)
            {
                return NotFound();
            }
            return tema;
        }


    }
}