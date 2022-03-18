using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Exercise 5.31
//page 183
//determine if a 5 digit interger is a palidrome
//12321 32423

namespace Palidrome
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int number;
            int n1;
            int n2;
            int n3;
            int n4;
            int n5;

            Console.WriteLine("Enter a 5-digit integer");
            number = int.Parse(Console.ReadLine());

            while ( number < 10000 || number > 99999){
                Console.WriteLine("Sorry, re-enter 5 digits");
                number = int.Parse(Console.ReadLine());
            }

            n1 = number / 10000;                //43871  n1 = 4
            number = number % 10000;            //number = 3871

            n2 = number / 1000;                //n2 = 3
            number = number % 1000;            //number = 871

            n3 = number / 100;                  //n3 = 8
            number = number % 100;              //number = 71

            n4 = number / 10;                   //n4 = 7
            number = number % 10;               //number = 1

            n5 = number / 1;                    //n5 = 1
            number = number % 1;                //number =

            if (n1 == n5 && n2 == n4) {
                Console.WriteLine($"{n1}{n2}{n3}{n4}{n5} is a palidrom");
            }
            else
                Console.WriteLine($"{n1}{n2}{n3}{n4}{n5} is not a palidrom");

            Console.ReadLine();




        }
    }
}
