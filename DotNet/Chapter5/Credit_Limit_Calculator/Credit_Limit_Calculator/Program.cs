using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Credit_Limit_Calculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //JJ Menya
            //Exercise 5.18


            //variables
            int accoutNu = 0;
            double monthBalance = 0;
            double itemT = 0;
            double totalC = 0;
            int allowedC = 0;
            double newBal;

            //step 1: Set up the sentinel_value
            Console.WriteLine("Enter account number or -1 to quit: ");
            accoutNu = Int32.Parse(Console.ReadLine());
            while (accoutNu != -1)
            {
                //Step 2: Prompt cutomer to insert account number
                Console.WriteLine("What is your balance at the beginning of the month?");
                monthBalance = double.Parse(Console.ReadLine());
                if(monthBalance < 0)
                {
                    Console.WriteLine("Monthly Balance must be 0 or greater\nWhat is your balance at the beginning of the month?");
                    monthBalance = Convert.ToDouble(Console.ReadLine());
                }

                //Step 3: Prompt cutomer to insert total of all items
                Console.WriteLine("What is the total of all items charged?");
                itemT = Convert.ToDouble(Console.ReadLine());
                if (itemT < 0)
                {
                    Console.WriteLine("Total of all items charged must be 0 or greater\nWhat is the total of all items charged?");
                    monthBalance = Convert.ToDouble(Console.ReadLine());
                }

                //Step 4: Prompt cutomer to insert total of all items
                Console.WriteLine("What is the total of all credits charged?");
                totalC = Convert.ToDouble(Console.ReadLine());
                if (totalC < 0)
                {
                    Console.WriteLine("Total of all credits charged must be 0 or greater\nWhat is the total of all credits charged?");
                    monthBalance = Convert.ToDouble(Console.ReadLine());
                }

                //Step 5: Prompt cutomer to insert total of all items
                Console.WriteLine("What is the allowed credit limit?");
                allowedC = Int32.Parse(Console.ReadLine());
                if (allowedC < 0)
                {
                    Console.WriteLine("Allowed Credit Limit must be 0 or greater\nWhat is the allowed credit limit?");
                    monthBalance = Convert.ToDouble(Console.ReadLine());
                }

                Console.WriteLine("Enter account number or -1 to quit: ");
                accoutNu = Int32.Parse(Console.ReadLine());

                if (accoutNu != 0)
                {
                    newBal = (monthBalance + itemT + totalC) - allowedC;
                    Console.WriteLine("The New Balance is " + newBal);
                    Console.ReadLine();

                    if (newBal > allowedC)
                    {
                        double diff = newBal - allowedC;
                        Console.WriteLine("Credit Limit Exceeded by: " + diff);
                        Console.ReadLine();
                    }
                }

                else
                {
                    Console.WriteLine("No data  were entered");
                    Console.ReadLine();
                }

            }
        }
    }
}
