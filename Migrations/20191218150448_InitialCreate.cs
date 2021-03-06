﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoV2.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Administradores",
                columns: table => new
                {
                    Usuario = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Rol = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Administradores", x => x.Usuario);
                });

            migrationBuilder.CreateTable(
                name: "CargaAcademicas",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CargaAcademicas", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Facultades",
                columns: table => new
                {
                    facultadId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Facultades", x => x.facultadId);
                });

            migrationBuilder.CreateTable(
                name: "Programas",
                columns: table => new
                {
                    programaId = table.Column<string>(nullable: false),
                    nombrePro = table.Column<string>(nullable: true),
                    duracionSementral = table.Column<int>(nullable: false),
                    horario = table.Column<string>(nullable: true),
                    metodologia = table.Column<string>(nullable: true),
                    FacultadId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Programas", x => x.programaId);
                    table.ForeignKey(
                        name: "FK_Programas_Facultades_FacultadId",
                        column: x => x.FacultadId,
                        principalTable: "Facultades",
                        principalColumn: "facultadId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Asignaturas",
                columns: table => new
                {
                    AsignaturaId = table.Column<string>(nullable: false),
                    Nombre = table.Column<string>(nullable: false),
                    Ncreditos = table.Column<string>(nullable: false),
                    PreRequisitos = table.Column<string>(nullable: true),
                    CoRequisitos = table.Column<string>(nullable: true),
                    Tipo = table.Column<string>(nullable: false),
                    NatAsignatura1 = table.Column<string>(nullable: false),
                    NatAsignatura2 = table.Column<string>(nullable: false),
                    programaId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Asignaturas", x => x.AsignaturaId);
                    table.ForeignKey(
                        name: "FK_Asignaturas_Programas_programaId",
                        column: x => x.programaId,
                        principalTable: "Programas",
                        principalColumn: "programaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Docentes",
                columns: table => new
                {
                    Identificacion = table.Column<string>(nullable: false),
                    TipoId = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: false),
                    Correo = table.Column<string>(nullable: false),
                    Telefono = table.Column<string>(nullable: false),
                    Password = table.Column<string>(nullable: true),
                    Rol = table.Column<string>(nullable: true),
                    programaId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Docentes", x => x.Identificacion);
                    table.ForeignKey(
                        name: "FK_Docentes_Programas_programaId",
                        column: x => x.programaId,
                        principalTable: "Programas",
                        principalColumn: "programaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "EjeTematicos",
                columns: table => new
                {
                    EjeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    AsignaturaId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EjeTematicos", x => x.EjeId);
                    table.ForeignKey(
                        name: "FK_EjeTematicos_Asignaturas_AsignaturaId",
                        column: x => x.AsignaturaId,
                        principalTable: "Asignaturas",
                        principalColumn: "AsignaturaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Grupos",
                columns: table => new
                {
                    GrupoId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    numero = table.Column<int>(nullable: false),
                    AsignaturaId = table.Column<string>(nullable: true),
                    DocenteId = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grupos", x => x.GrupoId);
                    table.ForeignKey(
                        name: "FK_Grupos_Asignaturas_AsignaturaId",
                        column: x => x.AsignaturaId,
                        principalTable: "Asignaturas",
                        principalColumn: "AsignaturaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Grupos_Docentes_DocenteId",
                        column: x => x.DocenteId,
                        principalTable: "Docentes",
                        principalColumn: "Identificacion",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Temas",
                columns: table => new
                {
                    TemaId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    EjeTematicoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Temas", x => x.TemaId);
                    table.ForeignKey(
                        name: "FK_Temas_EjeTematicos_EjeTematicoId",
                        column: x => x.EjeTematicoId,
                        principalTable: "EjeTematicos",
                        principalColumn: "EjeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Estudiantes",
                columns: table => new
                {
                    EstudianteId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Identificacion = table.Column<string>(nullable: false),
                    PrimerNombre = table.Column<string>(nullable: false),
                    SegundoNombre = table.Column<string>(nullable: true),
                    PrimerApellido = table.Column<string>(nullable: false),
                    SegundoApellido = table.Column<string>(nullable: true),
                    Correo = table.Column<string>(nullable: true),
                    GrupoId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Estudiantes", x => x.EstudianteId);
                    table.ForeignKey(
                        name: "FK_Estudiantes_Grupos_GrupoId",
                        column: x => x.GrupoId,
                        principalTable: "Grupos",
                        principalColumn: "GrupoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ItemPlanesDesarrollo",
                columns: table => new
                {
                    IdPlan = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EjeTematicoId = table.Column<int>(nullable: false),
                    GrupoId = table.Column<int>(nullable: false),
                    FechaInicio = table.Column<string>(nullable: true),
                    FechaFin = table.Column<string>(nullable: true),
                    Periodo = table.Column<string>(nullable: true),
                    Ano = table.Column<string>(nullable: true),
                    TrabajoIndependiente = table.Column<string>(nullable: true),
                    Estrategias = table.Column<string>(nullable: true),
                    Competencias = table.Column<string>(nullable: true),
                    Referencias = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ItemPlanesDesarrollo", x => x.IdPlan);
                    table.ForeignKey(
                        name: "FK_ItemPlanesDesarrollo_EjeTematicos_EjeTematicoId",
                        column: x => x.EjeTematicoId,
                        principalTable: "EjeTematicos",
                        principalColumn: "EjeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ItemPlanesDesarrollo_Grupos_GrupoId",
                        column: x => x.GrupoId,
                        principalTable: "Grupos",
                        principalColumn: "GrupoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TemasIP",
                columns: table => new
                {
                    TemaIPId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nombre = table.Column<string>(nullable: false),
                    ItemPlanDesarrolloIdPlan = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TemasIP", x => x.TemaIPId);
                    table.ForeignKey(
                        name: "FK_TemasIP_ItemPlanesDesarrollo_ItemPlanDesarrolloIdPlan",
                        column: x => x.ItemPlanDesarrolloIdPlan,
                        principalTable: "ItemPlanesDesarrollo",
                        principalColumn: "IdPlan",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Asignaturas_programaId",
                table: "Asignaturas",
                column: "programaId");

            migrationBuilder.CreateIndex(
                name: "IX_Docentes_programaId",
                table: "Docentes",
                column: "programaId");

            migrationBuilder.CreateIndex(
                name: "IX_EjeTematicos_AsignaturaId",
                table: "EjeTematicos",
                column: "AsignaturaId");

            migrationBuilder.CreateIndex(
                name: "IX_Estudiantes_GrupoId",
                table: "Estudiantes",
                column: "GrupoId");

            migrationBuilder.CreateIndex(
                name: "IX_Grupos_AsignaturaId",
                table: "Grupos",
                column: "AsignaturaId");

            migrationBuilder.CreateIndex(
                name: "IX_Grupos_DocenteId",
                table: "Grupos",
                column: "DocenteId");

            migrationBuilder.CreateIndex(
                name: "IX_ItemPlanesDesarrollo_EjeTematicoId",
                table: "ItemPlanesDesarrollo",
                column: "EjeTematicoId");

            migrationBuilder.CreateIndex(
                name: "IX_ItemPlanesDesarrollo_GrupoId",
                table: "ItemPlanesDesarrollo",
                column: "GrupoId");

            migrationBuilder.CreateIndex(
                name: "IX_Programas_FacultadId",
                table: "Programas",
                column: "FacultadId");

            migrationBuilder.CreateIndex(
                name: "IX_Temas_EjeTematicoId",
                table: "Temas",
                column: "EjeTematicoId");

            migrationBuilder.CreateIndex(
                name: "IX_TemasIP_ItemPlanDesarrolloIdPlan",
                table: "TemasIP",
                column: "ItemPlanDesarrolloIdPlan");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Administradores");

            migrationBuilder.DropTable(
                name: "CargaAcademicas");

            migrationBuilder.DropTable(
                name: "Estudiantes");

            migrationBuilder.DropTable(
                name: "Temas");

            migrationBuilder.DropTable(
                name: "TemasIP");

            migrationBuilder.DropTable(
                name: "ItemPlanesDesarrollo");

            migrationBuilder.DropTable(
                name: "EjeTematicos");

            migrationBuilder.DropTable(
                name: "Grupos");

            migrationBuilder.DropTable(
                name: "Asignaturas");

            migrationBuilder.DropTable(
                name: "Docentes");

            migrationBuilder.DropTable(
                name: "Programas");

            migrationBuilder.DropTable(
                name: "Facultades");
        }
    }
}
