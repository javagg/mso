using System;
using System.Threading;
using Microsoft.Owin.Hosting;
using Owin;
using Mso.MonoDevelop;

namespace Mso
{
    public class Program
    {
        static void Main(string[] args)
        {
            Service.Initialize();
            string port = Environment.GetEnvironmentVariable("PORT");
            port = string.IsNullOrEmpty(port) ? "6118" : port;
            string url = string.Format("http://*:{0}", port);

            using (WebApp.Start<Startup>(url))
            {
                Console.WriteLine("The Server URL is: {0}", url);
                Console.ReadLine();
            }
        }
    }
}