using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GestionIPS.Backend.Startup))]
namespace GestionIPS.Backend
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
