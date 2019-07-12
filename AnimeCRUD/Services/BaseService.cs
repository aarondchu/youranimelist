using DbConnector.Adapter;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace ProjectCRUD.Services
{
    public abstract class BaseService
    {
        public DbAdapter Adapter { get; private set; }

        public BaseService()
        {
            Adapter = new DbAdapter(new SqlCommand(),
                new SqlConnection("Server = localhost; Database = AnimeList; UID = aaron; PWD = password123"));
        }
    }
}