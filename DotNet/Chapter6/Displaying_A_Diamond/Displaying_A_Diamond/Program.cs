using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Displaying_A_Diamond
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //JJ Menya
            //Exercise 6.24.


            Console.WriteLine("Pick a character you would like to see displayed btw a,b,c,d");
            char asterisk = Convert.ToChar(Console.ReadLine());
            asterisk.ToString().ToLower();

            while (asterisk != 'a' && asterisk != 'b' && asterisk != 'c' && asterisk != 'd')
            {
                Console.WriteLine("PICK A CHARACTER FROM ONE OF THESE CHOICES: a,b,c,d");
                asterisk = Convert.ToChar(Console.ReadLine());
            }
            String space = " ";
            //String asterisk = "*";

            //create numbers object
            Numbers numbers = new Numbers();
           

            Console.WriteLine("What range number would you like to try?");
            int highestNumber = Convert.ToInt32(Console.ReadLine());
            //numbers.RangeNumber = highestNumber;

            bool checker = numbers.numberRangeVerification(highestNumber);
            while (checker == false)
            {
                highestNumber = Convert.ToInt32(Console.ReadLine());
                checker = numbers.numberRangeVerification(highestNumber);
            }


            int numberOfSpaces = 0;
            int row = 0;
            int column = 0;

            //step 1: Top triangle
            while (row <= highestNumber)
            {
                //printing spaces
                for (column = 0; column < ((highestNumber) /2 - numberOfSpaces); column++)
                { 
                    Console.Write(space);

                }

                //printing asterisk
                for(column = 0; column <= row; column++)
                {
                    Console.Write(asterisk);
                }

                row += 2;
                numberOfSpaces++;
                Console.WriteLine();
            }
            // step 2: Bottom triangle
            row -= 2;

            numberOfSpaces--;

            while (row >= 0)
            {
                for(column = 0; column < highestNumber / 2 -numberOfSpaces + 1; column++)
                {
                    Console.Write(space);
                }
                
                for(column=0; column < row -1; column++)
                {
                    Console.Write(asterisk);
                }

                row -= 2;
                numberOfSpaces--;
                Console.WriteLine();
            }

            Console.ReadLine();

        }
         
    }
}
