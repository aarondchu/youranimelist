//using DbConnector.Tools;
//using System;
//using System.Collections.Generic;
//using System.Data.SqlClient;
//using System.Linq;
//using System.Web;

//namespace ProjectCRUD.Services
//{
//    public class TestService : BaseService
//    {
//        public IEnumerable<AppLog> ReadAll()
//        {
//            return Adapter.LoadObject<AppLog>("dbo.AppLog_SelectAll");
//        }
//        public AppLog ReadById(int id)
//        {
//            return Adapter.LoadObject<AppLog>(
//                "dbo.AppLog_SelectById",
//                new SqlParameter[](
//                    new SqlParameter("@Id", id))
//                    ).FirstOrDefault();
//        }
//        public int Insert(AppLog model)
//        {
//            int id = 0;
//            SqlParameter outParam = new SqlParameter("@Id", 0);
//            outParam.Direction = System.Data.ParameterDirection.Output;
//            Adapter.ExecuteNonQuery("dbo.AppLog_Insert",
//               new[]{
//                   new SqlParameter("@Title", model.Title),
//                   new SqlParameter("@Message", model.Message),
//                   outParam
//            },
//               (parameters) =>
//               {
//                   id = parameters.GetParamValue<int>("@ID");
//               });
//            return id;
//        }
//    }
//}