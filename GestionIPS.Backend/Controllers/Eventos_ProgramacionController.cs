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
        [Authorize]
        public ActionResult Principal()
        {
            return View();
        }
        [Authorize]
        public ActionResult ChartAgend()
        {
            return View();
        }
        [Authorize]
        public ActionResult ChartServicios()
        {
            return View();
        }
        [Authorize]
        //actions mostrar pagina analisis de admisiones
        public ActionResult ChartAdmision()
        {
            return View();
        }


        [Authorize]
        public JsonResult ChartAgendEPS()
        {
            List<Int32> lista = new List<Int32>();
            Servicio s = new Servicio();
            lista = s.ChartAgendaEPS();
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        
        public ActionResult ReportexAgente()
        {
            return View();
        }
        [Authorize]
        public ActionResult ReportexInasistente()
        {
            return View();
        }
        [Authorize]
        public JsonResult ChartAgenda()
        {
            List<Int32> lista = new List<Int32>();
            Servicio s = new Servicio();
            lista = s.ChartAgenda();
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult ListarInasistenteFecha()
        {
            List<Int32> lista = new List<Int32>();
            Servicio s = new Servicio();
            lista = s.ListarInasistenteFecha();
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult ListarInasistenteUltimaFecha(DateTime fechaini, DateTime fechafin)
        {            
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.ListarInasistenteUltimaFecha(fechaini,fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult ListarInasistenteTabla(DateTime fechaini, DateTime fechafin)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.ListarInasistenteTabla(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        //Agendamiento
        [Authorize]
        public JsonResult CuantosEventosFecha(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantosEventosFecha(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        [Authorize]
        public JsonResult CuantosEventosFechaCE(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantosEventosFechaCE(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult CuantosEventosFechaSO(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantosEventosFechaSO(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult CuantosEventosFechaCYD(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantosEventosFechaCYD(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult CuantosEventosFechaCP(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantosEventosFechaCP(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }

        //Admisiones
        [Authorize]
        public JsonResult CuantasAdmisionesFecha(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantasAdmisionesFecha(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult CuantasAdmisionesFechaCE(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantasAdmisionesFechaCE(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult CuantasAdmisionesFechaSO(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantasAdmisionesFechaSO(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult CuantasAdmisionesFechaCYD(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantasAdmisionesFechaCYD(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        [Authorize]
        public JsonResult CuantasAdmisionesFechaCP(DateTime fechaini, DateTime fechafin)
        {
            List<int> lista = new List<int>();
            Servicio s = new Servicio();
            //lista = s.ListarInasistenteUltimaFecha(fechaini, fechafin);
            lista = s.CuantasAdmisionesFechaCP(fechaini, fechafin);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }


        
        public JsonResult ListaEventoMedicoFecha(DateTime fechaini, DateTime fechafin, string codigomedico)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            Servicio s = new Servicio();
            lista = s.ListarEventoMedicoPorFecha(fechaini, fechafin, codigomedico);
            return Json(lista, JsonRequestBehavior.AllowGet);
        }
        
        public JsonResult ListaEventoAgenteFecha(DateTime fechaini, DateTime fechafin, string codigoagente)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            Servicio s = new Servicio();
            lista = s.ListarEventoAgenteFecha(fechaini, fechafin, codigoagente);
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