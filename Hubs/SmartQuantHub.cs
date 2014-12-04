using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Mso.Hubs
{
    [HubName("SmartQuant")]
    public class SmartQuantHub : Hub<ISmartQuant>
    {
        private static int _invokeCount = 0;
        public async Task Echo(string message)
        {
            await Clients.Caller.Echo(message, Interlocked.Increment(ref _invokeCount));
        }
    }
    public interface ISmartQuant
    {
        Task Echo(string message, int invokeCount);
        void MethodB(int arg1, int arg2);
    }
}
