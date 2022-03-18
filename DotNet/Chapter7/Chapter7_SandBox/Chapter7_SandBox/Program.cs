using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter7_SandBox
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Random randomNumbers = new Random();
            var values = new[] {6, 10 ,14, 18, 22};
            int result = values[randomNumbers.Next(values.Length)];

            Console.WriteLine(result);
            Console.ReadLine();

        }
    }
}
