using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Guess_The_Number_Game
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //JJ Menya
            //Chapter 7 Assigment
            // Disclaimer: Had trouble figuring out the average bit


            //initialize helper class
            Helper h = new Helper();

            //generate computers random Number
            int computer_number = new Random().Next(1, 1000);


            //Step 1: Display Promt 
            Console.WriteLine("Guess a number between 1 and 1000");

            //Step 2: Get players in put
            int userNumber  = Convert.ToInt32(Console.ReadLine());

            //Step 3: Verify tha user input is within range
            int verifiedInput = h.inputVerification(userNumber);

            //check input range and displa messages
            h.inputRange(verifiedInput, computer_number);


            Console.ReadLine();
        }

        //helper functions
        //Get players input
       
    }
}
