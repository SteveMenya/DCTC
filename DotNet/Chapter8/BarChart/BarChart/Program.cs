using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BarChart
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] array = { 0, 2, 0, 0, 0, 0, 1, 2, 4, 2, 1 };
            Console.WriteLine("Grade Distribution");

            //for each array element, output a bar of the chart

            for(var counter = 0 ; counter < array.Length; counter++)
            {
                //output bar labels("00-09: "..."90-99: ", "100: ")
                if(counter == 10)
                {
                    Console.Write("100:");
                }
                else
                {
                    Console.Write($"{counter * 10:D2} - {counter * 10 + 9:D2}: ");

                }

                //display bar of asterisks
                for (var stars =0; stars < array[counter]; ++ stars)
                {
                    Console.Write("*");
                }

                Console.WriteLine();
                Console.ReadLine();
            }
        }
    }
}
