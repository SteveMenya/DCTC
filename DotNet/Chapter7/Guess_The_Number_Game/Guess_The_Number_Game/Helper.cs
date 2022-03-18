using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Guess_The_Number_Game
{
    internal class Helper
    {
        public int inputVerification(int number)
        {

            while ((number <= 0) || number > 1000) {
                Console.WriteLine("Please enter a number within range of 1 to 1000");
                number = Convert.ToInt32(Console.ReadLine());
                //return number;
            }
            
            return number;
           
        }

        public double getAverage(int[] gameC, int guesses) 
        {
            // Find sum of array element
            int sum = 0;
            for (int i = 0; i < guesses; i++)
                sum += gameC[i];

            return (double)sum / guesses;
            //return guesses/ Convert.ToDouble(gameC);
        }

        public void inputRange(int usNumber, int coNumber)
        {
            int guessCounter = 1;
            int gameCounter = 1;


            while (usNumber != coNumber)
            {
                while (usNumber < coNumber)
                {
                    guessCounter = guessCounter + 1;
                    Console.WriteLine("Too Low. Try Again");
                    Console.WriteLine("Please a different Number");
                    usNumber = Convert.ToInt32(Console.ReadLine());
                }
                while (usNumber > coNumber)
                {
                    guessCounter = guessCounter + 1;
                    Console.WriteLine("Too High. Try Again");
                    Console.WriteLine("Please enter a different Number");
                    usNumber = Convert.ToInt32(Console.ReadLine());

                }

            }
            if (usNumber == coNumber)
            {
                
                Console.WriteLine("Congratulation.You guessed the Number!");
                gameCounter = gameCounter + 1;
                Console.WriteLine("would you like to play again? Press Y to play again");
                char uInput = Convert.ToChar(Console.ReadLine());

                while (uInput == 'y' || uInput == 'Y')
                {
                    Console.WriteLine("Please enter a number between 1 to 1000");
                    int new_comp_number = new Random().Next(1, 1000);
                    int userNum = Convert.ToInt32(Console.ReadLine());
                    inputRange(usNumber, new_comp_number);
                    //av
                    Console.ReadLine();
                }

                Console.WriteLine("Sad to see you leave. Hope to see you soon!");
                
            }

             Console.WriteLine($"It took you {guessCounter} guesse(s) ");
            Console.ReadLine();
        }

    }
}
