using GestionIPS.Backend.Models;
using GestionIPS.Backend;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GestionIPS.Backend.Services;

namespace GestionIPS.Backend.Controllers
{
    public class Eventos_ProgramacionController : Controller
    {
        // GET: Eventos_Programacion
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult ListaEventoPorFecha(string fechaini, string fechafin)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            Servicio s = new Servicio();
            lista = s.ListarEventoPorFecha(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        /*public JsonResult ListaPorPaciente(string identificacion)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            Servicio s = new Servicio();
            lista = s.ObtenerPaciente(identificacion);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        public JsonResult ObtenerPaciente(string identificacion)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            Servicio s = new Servicio();
            lista = s.ObtenerPaciente(identificacion);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }*/

    }
}