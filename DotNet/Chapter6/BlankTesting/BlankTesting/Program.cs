using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlankTesting
{
    internal class Program
    {
        static void Main(string[] args)
        {

            DateTime dat = DateTime.Now;

            //print current date and time and moves cursor to next line
            
            int x2 = 2;
            int y = 3;


            int x = (3 * 9 * (3 + (9 * 3 / (3))));

         

            Console.WriteLine($"x = {x}");
            Console.WriteLine($"Value of {x} + {x} is {x + x}");
            Console.WriteLine("x =");
            Console.WriteLine($"{x + y} = {y + x}");


            //prints text but keeps cursor in same line
            Console.Write("Press  to exit... ");
            while (Console.ReadKey().Key != ConsoleKey.Enter)
            {
                //run loop until Enter is press
            }
            

           
            
        }
    }
}
