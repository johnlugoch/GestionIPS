using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GestionIPS.Backend.Models
{
    public class vw_EventosProgramados_Buscar
    {
        //public int IdEventoGroup { get; set; }
        public string HistClinica { get; set; }
        public string Paciente { get; set; }
        public string NomEvento { get; set; }
        public string NomServicio { get; set; }
        public string Fecha { get; set; }
        public string HoraIni { get; set; }
        /*public DateTime HoraFin { get; set; }
        public int CodMedico { get; set; }            
        public int EventoAdmision { get; set; }
        public string Cirugias_Ad { get; set; }
        public int Anastesiologo { get; set; }
        public string Comentarios { get; set; }
        public string NoContrato { get; set; }
        public int IdInfra { get; set; }
        public string CodSeccion { get; set; }
        public int Edad { get; set; }
        public int Cancelada { get; set; }*/
        public string Telefonos { get; set; }
        /*public string TipoAfiliacion { get; set; }
        public string NoAfiliacion { get; set; }
        public string CodServicio { get; set; }
        public string Especialidad { get; set; }*/
        public string Asist { get; set; }
        public string NombreMedico { get; set; }
        public string Nombre { get; set; }
        //public DateTime FechaAdmision { get; set; }
        //public DateTime HoraAdmision { get; set; }*/
        public string SystemUser { get; set; }
        public string FechaSys { get; set; }
    }
}