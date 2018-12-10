using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Configuration;

namespace GestionIPS.Backend.Models
{
    public class Conexion
    {
        public static SqlConnection obtenerConexion()
        {
            string constr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            SqlConnection con = new SqlConnection(constr);
            con.Open();
            return con;
        }

        public static void cerrarConexion()
        {
            string constr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            SqlConnection con = new SqlConnection(constr);
            con.Close();
        }
    }
}