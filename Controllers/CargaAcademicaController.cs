using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoV2.Models;
using System;
using System.Collections;

namespace ProyectoV2.Models
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargaAcademicaController : ControllerBase
    {
        private readonly SoftwareContext _context;

        public CargaAcademicaController(SoftwareContext context)
        {
            _context = context;

            if (_context.CargaAcademicas.Count() == 0)
            {


            }
        }

      
       

    }
}