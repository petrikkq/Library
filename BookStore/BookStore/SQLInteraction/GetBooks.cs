using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace BookStore.SqlInteraction
{
    public static partial class DataProvider
    {
        public static JsonResult GetBooks(IConfiguration configuration)
        {
            string query = @"
                            select * from
                            dbo.Books
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = configuration.GetConnectionString("con");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }
    }
}
