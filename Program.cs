using Microsoft.Framework.ConfigurationModel;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.DependencyInjection.Fallback;
using Microsoft.AspNet.Hosting;
using System;
using System.Threading.Tasks;

namespace Mso
{
    public class Program
    {
        private readonly IServiceProvider hostServiceProvider;

        public Program(IServiceProvider hostServiceProvider)
        {
            this.hostServiceProvider = hostServiceProvider;
        }

        public Task<int> Main(string[] args)
        {
            var config = new Configuration();
            config.AddCommandLine(args);

            var serviceCollection = new ServiceCollection();
            serviceCollection.Add(HostingServices.GetDefaultServices(config));
            serviceCollection.AddInstance<IHostingEnvironment>(new HostingEnvironment() { WebRoot = "wwwroot" });
            var services = serviceCollection.BuildServiceProvider(hostServiceProvider);

            var context = new HostingContext()
            {
                Services = services,
                Configuration = config,
                ServerName = "Kestrel",
                ApplicationName = "Mso"
            };

            var engine = services.GetService<IHostingEngine>();
            if (engine == null)
                throw new Exception("TODO: IHostingEngine service not available exception");

            using (engine.Start(context))
            {
                Console.WriteLine("Started the server..");
                Console.WriteLine("Press any key to stop the server");
                Console.ReadLine();
            }
            return Task.FromResult(0);
        }
    }
}