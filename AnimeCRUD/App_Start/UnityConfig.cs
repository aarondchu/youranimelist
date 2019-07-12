using ProjectCRUD.Services;
using ProjectCRUD.Services.Common;
using ProjectCRUD.Services.Interfaces.Cryptography;
using System.Web.Http;
using Unity;
using Unity.Lifetime;
using Unity.WebApi;

namespace ProjectCRUD
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
            container.RegisterType<ICryptographyService, Base64StringCryptographyService>(new ContainerControlledLifetimeManager());
            container.RegisterType<IWebScraperService, WebScraperService>();
            container.RegisterType<IUserService, UserService>();
        }
    }
}