using System;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.SignalR;
using Microsoft.Framework.DependencyInjection;
using Microsoft.AspNet.Diagnostics;
using Microsoft.Framework.ConfigurationModel;

namespace Mso
{
	public class Startup
	{
        public IConfiguration Configuration { get; private set; }

        public Startup()
        {
            Configuration = new Configuration().AddJsonFile("config.json").AddEnvironmentVariables();
        }

        public void ConfigureServices(IServiceCollection services)
        {
            var runningOnMono = Type.GetType("Mono.Runtime") != null;
            Console.WriteLine("Running on Mono.");
        }

        public void ConfigureDevelopment(IApplicationBuilder app)
        {
            app.UseErrorPage(ErrorPageOptions.ShowAll);
            app.UseRuntimeInfoPage();
            Configure(app);
        }

        public void Configure(IApplicationBuilder app)
		{
			app.UseServices(services => {
				services.AddSignalR(options => {
					options.Hubs.EnableDetailedErrors = true;
				});
			});
			app.UseFileServer();
			app.UseSignalR();
		}
	}
}
