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
        

        public List<Int32> ListarInasistenteFecha()
        {
            List<Int32> lista = new List<Int32>();            

            return lista;
        }

        public List<Int32> ChartAgenda()
        {
            List<Int32> lista = new List<Int32>();

            return lista;
        }

        public List<Int32> ChartAgendaEPS()
        {
            List<Int32> lista = new List<Int32>();

            return lista;
        }

        public List<Int32> CuantosEventosFecha(DateTime fechaini, DateTime fechafin)
        {
            List<Int32> lista = new List<Int32>();
            SqlConnection con = Conexion.obtenerConexion();

            string query = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Consultas Medicas' and fecha between @param1 and @param2";
            SqlCommand cmd = new SqlCommand(query);
            cmd.Parameters.AddWithValue("@param1", fechaini);
            cmd.Parameters.AddWithValue("@param2", fechafin);
            cmd.Connection = con;            
            Int32 count = (Int32)cmd.ExecuteScalar();
            lista.Add(count);

            string query1 = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Salud Oral' and fecha between @param1 and @param2";
            SqlCommand cmd1 = new SqlCommand(query1);
            cmd1.Parameters.AddWithValue("@param1", fechaini);
            cmd1.Parameters.AddWithValue("@param2", fechafin);
            cmd1.Connection = con;
            Int32 count1 = (Int32)cmd1.ExecuteScalar();
            lista.Add(count1);

            string query2 = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Odontologia General' and fecha between @param1 and @param2";
            SqlCommand cmd2 = new SqlCommand(query2);
            cmd2.Parameters.AddWithValue("@param1", fechaini);
            cmd2.Parameters.AddWithValue("@param2", fechafin);
            cmd2.Connection = con;
            Int32 count2 = (Int32)cmd2.ExecuteScalar();
            lista.Add(count2);

            string query3 = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Crecimiento y Desarrollo' and fecha between @param1 and @param2";
            SqlCommand cmd3 = new SqlCommand(query3);
            cmd3.Parameters.AddWithValue("@param1", fechaini);
            cmd3.Parameters.AddWithValue("@param2", fechafin);
            cmd3.Connection = con;
            Int32 count3 = (Int32)cmd3.ExecuteScalar();
            lista.Add(count3);

            string query4 = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Planificacion Familiar' and fecha between @param1 and @param2";
            SqlCommand cmd4 = new SqlCommand(query4);
            cmd4.Parameters.AddWithValue("@param1", fechaini);
            cmd4.Parameters.AddWithValue("@param2", fechafin);
            cmd4.Connection = con;
            Int32 count4 = (Int32)cmd4.ExecuteScalar();
            lista.Add(count4);

            string query5 = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Adulto Joven' and fecha between @param1 and @param2";
            SqlCommand cmd5 = new SqlCommand(query5);
            cmd5.Parameters.AddWithValue("@param1", fechaini);
            cmd5.Parameters.AddWithValue("@param2", fechafin);
            cmd5.Connection = con;
            Int32 count5 = (Int32)cmd5.ExecuteScalar();
            lista.Add(count5);

            string query6 = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Agudeza Visual' and fecha between @param1 and @param2";
            SqlCommand cmd6 = new SqlCommand(query6);
            cmd6.Parameters.AddWithValue("@param1", fechaini);
            cmd6.Parameters.AddWithValue("@param2", fechafin);
            cmd6.Connection = con;
            Int32 count6 = (Int32)cmd6.ExecuteScalar();
            lista.Add(count6);

            string query7 = "SELECT count(*) FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.nomEvento = 'Agudeza Visual' and fecha between @param1 and @param2";
            SqlCommand cmd7 = new SqlCommand(query7);
            cmd7.Parameters.AddWithValue("@param1", fechaini);
            cmd7.Parameters.AddWithValue("@param2", fechafin);
            cmd7.Connection = con;
            Int32 count7 = (Int32)cmd7.ExecuteScalar();
            lista.Add(count7);



            return lista;
        }

        public List<vw_EventosProgramados_Buscar> ListarInasistenteUltimaFecha(DateTime fechaini, DateTime fechafin)        
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            SqlConnection con = Conexion.obtenerConexion();
            //string codmedico = "32666054";
            string query = "SELECT * FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas  as est where est.Asist = '(X)' and fecha between @param1 and @param2";
            using (SqlCommand cmd = new SqlCommand(query))
            {
                cmd.Parameters.AddWithValue("@param1", fechaini);
                cmd.Parameters.AddWithValue("@param2", fechafin);                
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
                            NomEvento = sdr["nomEvento"].ToString(),
                            NomServicio = sdr["NomServicio"].ToString(),
                            //Fecha = DateTime.ParseExact(sdr["Fecha"].ToString(), "dd/MM/yyyy", CultureInfo.InvariantCulture),
                            Fecha = sdr["Fecha"].ToString(),
                            /*HoraIni = DateTime.ParseExact(sdr["HoraIni"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
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
                            Cancelada = Convert.ToInt32(sdr["Cancelada"]),*/
                            Telefonos = sdr["Telefonos"].ToString(),
                            /*TipoAfiliacion = sdr["TipoAfiliacion"].ToString(),
                            NoAfiliacion = sdr["NoAfiliacion"].ToString(),
                            CodServicio = sdr["CodServicio"].ToString(),
                            Especialidad = sdr["Especialidad"].ToString(),*/
                            Asist = sdr["Asist"].ToString(),
                            /*NombreMedico = sdr["NombreMedico"].ToString(),*/
                            CODIPS = sdr["CODIPS"].ToString(),
                            //FechaAdmision = DateTime.ParseExact(sdr["FechaAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            //HoraAdmision = DateTime.ParseExact(sdr["HoraAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),*/
                            SystemUser = sdr["SystemUser"].ToString(),
                        });
                    }
                }
                con.Close();
            }
            return lista;
        }


        public List<vw_EventosProgramados_Buscar> ListarEventoAgenteFecha(DateTime fechaini, DateTime fechafin, string codigoagente)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            SqlConnection con = Conexion.obtenerConexion();
            //string fecha1 = fechaini.ToString("dd/MM/yyyy");//"01/11/2018";
            //string fecha2 = fechafin.ToString("dd/MM/yyyy");//"01/11/2018";
            //string codmedico = "32666054";
            string query = "SELECT * FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas where SystemUser = @param3 and fecha between @param1 and @param2";
            using (SqlCommand cmd = new SqlCommand(query))
            {
                cmd.Parameters.AddWithValue("@param1", fechaini);
                cmd.Parameters.AddWithValue("@param2", fechafin);
                cmd.Parameters.AddWithValue("@param3", codigoagente);
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
                            NomEvento = sdr["nomEvento"].ToString(),
                            NomServicio = sdr["NomServicio"].ToString(),
                            //Fecha = DateTime.ParseExact(sdr["Fecha"].ToString(), "dd/MM/yyyy", CultureInfo.InvariantCulture),
                            Fecha = sdr["Fecha"].ToString(),
                            /*HoraIni = DateTime.ParseExact(sdr["HoraIni"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
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
                            Cancelada = Convert.ToInt32(sdr["Cancelada"]),*/
                            Telefonos = sdr["Telefonos"].ToString(),
                            /*TipoAfiliacion = sdr["TipoAfiliacion"].ToString(),
                            NoAfiliacion = sdr["NoAfiliacion"].ToString(),
                            CodServicio = sdr["CodServicio"].ToString(),
                            Especialidad = sdr["Especialidad"].ToString(),*/
                            Asist = sdr["Asist"].ToString(),
                            /*NombreMedico = sdr["NombreMedico"].ToString(),*/
                            CODIPS = sdr["CODIPS"].ToString(),
                            //FechaAdmision = DateTime.ParseExact(sdr["FechaAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            //HoraAdmision = DateTime.ParseExact(sdr["HoraAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),*/
                            SystemUser = sdr["SystemUser"].ToString(),
                        });
                    }
                }
                con.Close();
            }
            return lista;
        }

        public List<vw_EventosProgramados_Buscar> ListarEventoMedicoPorFecha(DateTime fechaini, DateTime fechafin, string codigomedico)
        {
            List<vw_EventosProgramados_Buscar> lista = new List<vw_EventosProgramados_Buscar>();
            SqlConnection con = Conexion.obtenerConexion();
            //string fecha1 = fechaini.ToString("dd/MM/yyyy");//"01/11/2018";
            //string fecha2 = fechafin.ToString("dd/MM/yyyy");//"01/11/2018";
            //string codmedico = "32666054";
            string query = "SELECT * FROM IPSoft100_ST.dbo.vw_EventosProgramados_Estadisticas where codmedico = @param3 and fecha between @param1 and @param2";
            using (SqlCommand cmd = new SqlCommand(query))
            {
                cmd.Parameters.AddWithValue("@param1", fechaini);
                cmd.Parameters.AddWithValue("@param2", fechafin);
                cmd.Parameters.AddWithValue("@param3", codigomedico);
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
                            NomEvento = sdr["nomEvento"].ToString(),
                            NomServicio = sdr["NomServicio"].ToString(),
                            //Fecha = DateTime.ParseExact(sdr["Fecha"].ToString(), "dd/MM/yyyy", CultureInfo.InvariantCulture),
                            Fecha = sdr["Fecha"].ToString(),
                            /*HoraIni = DateTime.ParseExact(sdr["HoraIni"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
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
                            Cancelada = Convert.ToInt32(sdr["Cancelada"]),*/
                            Telefonos = sdr["Telefonos"].ToString(),
                            /*TipoAfiliacion = sdr["TipoAfiliacion"].ToString(),
                            NoAfiliacion = sdr["NoAfiliacion"].ToString(),
                            CodServicio = sdr["CodServicio"].ToString(),
                            Especialidad = sdr["Especialidad"].ToString(),*/
                            Asist = sdr["Asist"].ToString(),
                            /*NombreMedico = sdr["NombreMedico"].ToString(),*/
                            CODIPS = sdr["CODIPS"].ToString(),
                            //FechaAdmision = DateTime.ParseExact(sdr["FechaAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),
                            //HoraAdmision = DateTime.ParseExact(sdr["HoraAdmision"].ToString(), "ddMMyy", CultureInfo.InvariantCulture),*/
                            SystemUser = sdr["SystemUser"].ToString(),
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