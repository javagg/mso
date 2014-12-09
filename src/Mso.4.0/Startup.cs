using System;
using System.IO;
using System.Reflection;
using Microsoft.AspNet.SignalR;
using Microsoft.Owin;
using Microsoft.Owin.Cors;
using Microsoft.Owin.StaticFiles;
using Owin;
using Microsoft.Owin.FileSystems;

[assembly: OwinStartup(typeof(Mso.Startup))]

namespace Mso
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var options = new StaticFileOptions { FileSystem = new PhysicalFileSystem("../../wwwroot") };
            app.UseStaticFiles(options);
            app.UseWelcomePage();
            app.Map("/signalr", map =>
            {
                map.UseCors(CorsOptions.AllowAll);
                var hubConfiguration = new HubConfiguration
                {
                    EnableJSONP = true
                };
                map.RunSignalR(hubConfiguration);
            });
        }
    }
}