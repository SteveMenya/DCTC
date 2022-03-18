using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter6TestingZone
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int value = 100;
            switch (value % 2 )
            {
                case 0:
                    Console.WriteLine("Even Integer");
                    break;
                case 1:
                    Console.WriteLine("Odd integer");
                    break ;    
            }
           
        }
    }
}
