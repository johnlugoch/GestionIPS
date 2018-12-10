using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using GestionIPS.Backend.Models;
using System.Globalization;

namespace GestionIPS.Backend.Services
{
    public class Servicio
    {

        public List<vw_EventosProgramados_Buscar> ListarEventoPorFecha(string fechaini, string fechafin)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            SqlConnection con = Conexion.obtenerConexion();
            //string fecha1 = "01/11/2018";
            //string fecha2 = "05/11/2018";
            string codmedico = "32666054";
            string query = "SELECT * FROM Zero.dbo.vw_EventosProgramados_Buscar where codmedico = @param3 and fecha between @param1 and @param2";
            using (SqlCommand cmd = new SqlCommand(query))
            {
                cmd.Parameters.AddWithValue("@param1", fechaini);
                cmd.Parameters.AddWithValue("@param2", fechafin);
                cmd.Parameters.AddWithValue("@param3", codmedico);
                cmd.Connection = con;               
                
                using (SqlDataReader sdr = cmd.ExecuteReader())
                {
                    while (sdr.Read())
                    {
                        lista.Add(new vw_EventosProgramados_Buscar
                        {
                            //IdEventoGroup = Convert.ToInt32(sdr["IdEventoGroup"]),
                            HistClinica = sdr["HistClinica"].ToString(),
                            Paciente = sdr["Paciente"].ToString(),
                            NomEvento = sdr["NomEvento"].ToString(),
                            NomServicio = sdr["NomServicio"].ToString(),
                            /*Fecha = DateTime.ParseExact(sdr["Fecha"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            HoraIni = DateTime.ParseExact(sdr["HoraIni"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            HoraFin = DateTime.ParseExact(sdr["HoraFin"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            CodMedico = Convert.ToInt32(sdr["CodMedico"]),
                            EventoAdmision = Convert.ToInt32(sdr["EventoAdmision"]),
                            Cirugias_Ad = sdr["Cirugias_Ad"].ToString(),
                            Anastesiologo = Convert.ToInt32(sdr["Anastesiologo"]),
                            Comentarios = sdr["Comentarios"].ToString(),
                            NoContrato = sdr["NoContrato"].ToString(),
                            IdInfra = Convert.ToInt32(sdr["IdInfra"]),
                            CodSeccion = sdr["CodSeccion"].ToString(),
                            Edad = Convert.ToInt32(sdr["Edad"]),
                            Cancelada = Convert.ToInt32(sdr["Cancelada"]),
                            Telefonos = sdr["Telefonos"].ToString(),
                            TipoAfiliacion = sdr["TipoAfiliacion"].ToString(),
                            NoAfiliacion = sdr["NoAfiliacion"].ToString(),
                            CodServicio = sdr["CodServicio"].ToString(),
                            Especialidad = sdr["Especialidad"].ToString(),
                            Asist = sdr["Asist"].ToString(),
                            NombreMedico = sdr["NombreMedico"].ToString(),*/
                            CODIPS = sdr["CODIPS"].ToString(),
                            //FechaAdmision = DateTime.ParseExact(sdr["FechaAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            //HoraAdmision = DateTime.ParseExact(sdr["HoraAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),*/
                        });
                    }
                }
                con.Close();
            }
            return lista;
        }

        /*public List<Eventos_Programacion> ObtenerPaciente(string identificacion)
        {
            string id = "32873963";
            List<Eventos_Programacion> lista = new List<Eventos_Programacion>();
            SqlConnection con = Conexion.obtenerConexion();
            string query = "SELECT * FROM vw_EventosProgramados_Buscar where HistClinica = " + id;
            using (SqlCommand cmd = new SqlCommand(query))
            {
                cmd.Connection = con;
                //con.Open();
                using (SqlDataReader sdr = cmd.ExecuteReader())
                {
                    while (sdr.Read())
                    {
                        lista.Add(new Eventos_Programacion
                        {
                            IdEventoGroup = Convert.ToInt32(sdr["IdEventoGroup"].ToString()),
                            HistClinica = sdr["HistClinica"].ToString(),
                            Paciente = sdr["Paciente"].ToString(),
                            NomEvento = sdr["NomEvento"].ToString(),
                            NomServicio = sdr["NomServicio"].ToString(),
                            Fecha = DateTime.ParseExact(sdr["Fecha"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),                                                        
                            HoraIni = DateTime.ParseExact(sdr["HoraIni"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            HoraFin = DateTime.ParseExact(sdr["HoraFin"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            CodMedico = Convert.ToInt32(sdr["CodMedico"]),
                            EventoAdmision = Convert.ToInt32(sdr["EventoAdmision"]),                            
                            Cirugias_Ad = sdr["Cirugias_Ad"].ToString(),
                            Anastesiologo = Convert.ToInt32(sdr["Anastesiologo"]),
                            Comentarios = sdr["Comentarios"].ToString(),
                            NoContrato = sdr["NoContrato"].ToString(),
                            IdInfra = Convert.ToInt32(sdr["IdInfra"]),
                            CodSeccion = sdr["CodSeccion"].ToString(),
                            Edad = Convert.ToInt32(sdr["Edad"]),
                            Cancelada = Convert.ToInt32(sdr["Cancelada"]),
                            Telefonos = sdr["Telefonos"].ToString(),
                            TipoAfiliacion = sdr["TipoAfiliacion"].ToString(),
                            NoAfiliacion = sdr["NoAfiliacion"].ToString(),
                            CodServicio = sdr["CodServicio"].ToString(),
                            Especialidad = sdr["Especialidad"].ToString(),
                            Asist = sdr["Asist"].ToString(),
                            NombreMedico = sdr["NombreMedico"].ToString(),
                            CODIPS = sdr["CODIPS"].ToString(),
                            FechaAdmision = DateTime.ParseExact(sdr["FechaAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            HoraAdmision = DateTime.ParseExact(sdr["HoraAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                        });
                    }
                }
                con.Close();
            }
            return lista;
        }*/


        //Obtiene la lista de paciente
        /*public List<Paciente> GetListaPaciente()
        {
            List<Paciente> lista = new List<Paciente>();
            MySqlConnection con = Conexion.obtenerConexion();
            string query = "SELECT * FROM paciente";
            using (MySqlCommand cmd = new MySqlCommand(query))
            {
                cmd.Connection = con;
                //con.Open();
                using (MySqlDataReader sdr = cmd.ExecuteReader())
                {
                    while (sdr.Read())
                    {
                        Paciente p = new Paciente();
                        p.id = Convert.ToInt32(sdr["identificacion"]);
                        p.tipodoc = sdr["tipodoc"].ToString();
                        p.papellido = sdr["papellido"].ToString();
                        p.sapellido = sdr["sapellido"].ToString();
                        p.pnombre = sdr["pnombre"].ToString();
                        p.snombre = sdr["snombre"].ToString();
                            //fechanac = Convert.ToDateTime(sdr["fechanac"].ToString()),
                        p.fechanac = (sdr["fechanac"].ToString());
                        p.sexo = sdr["sexo"].ToString();
                        p.direccion = sdr["direccion"].ToString();
                        p.telefono = sdr["telefono"].ToString();
                        p.municipio = sdr["municipio"].ToString();
                        p.barrio = sdr["barrio"].ToString();
                        p.zona = sdr["zona"].ToString();
                        p.niveleducativo = Convert.ToInt32(sdr["niveleducativo"]);
                        p.ocupacion = Convert.ToInt32(sdr["ocupacion"]);
                        p.email = sdr["email"].ToString();
                        lista.Add(p);                        
                    }
                }
                con.Close();
            }
            return lista;
        }

        public List<Paciente> GetPaciente(string id)
        {
            List<Paciente> lista = new List<Paciente>();
            MySqlConnection con = Conexion.obtenerConexion();
            string query = "SELECT * FROM paciente where identificacion=";
            using (MySqlCommand cmd = new MySqlCommand(query))
            {
                cmd.Connection = con;
                //con.Open();
                using (MySqlDataReader sdr = cmd.ExecuteReader())
                {
                    while (sdr.Read())
                    {
                        Paciente p = new Paciente();
                        p.id = Convert.ToInt32(sdr["identificacion"]);
                        p.tipodoc = sdr["tipodoc"].ToString();
                        p.papellido = sdr["papellido"].ToString();
                        p.sapellido = sdr["sapellido"].ToString();
                        p.pnombre = sdr["pnombre"].ToString();
                        p.snombre = sdr["snombre"].ToString();
                        //fechanac = Convert.ToDateTime(sdr["fechanac"].ToString()),
                        p.fechanac = (sdr["fechanac"].ToString());
                        p.sexo = sdr["sexo"].ToString();
                        p.direccion = sdr["direccion"].ToString();
                        p.telefono = sdr["telefono"].ToString();
                        p.municipio = sdr["municipio"].ToString();
                        p.barrio = sdr["barrio"].ToString();
                        p.zona = sdr["zona"].ToString();
                        p.niveleducativo = Convert.ToInt32(sdr["niveleducativo"]);
                        p.ocupacion = Convert.ToInt32(sdr["ocupacion"]);
                        p.email = sdr["email"].ToString();
                        lista.Add(p);
                    }
                }
                con.Close();
            }
            return lista;
        }

        public int Edad(DateTime fechaNacimiento)
        {
            //Obtengo la diferencia en años.
            int edad = DateTime.Now.Year - fechaNacimiento.Year;

            //Obtengo la fecha de cumpleaños de este año.
            DateTime nacimientoAhora = fechaNacimiento.AddYears(edad);
            //Le resto un año si la fecha actual es anterior 
            //al día de nacimiento.
            if (DateTime.Now.CompareTo(nacimientoAhora) > 0)
            {
                edad--;
            }

            return edad;
        } */
    }
}