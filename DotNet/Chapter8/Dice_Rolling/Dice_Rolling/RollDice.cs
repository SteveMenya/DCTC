using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dice_Rolling
{
    internal class RollDice
    {
        int dice1;
        int dice2;
        int dice3;
        int[, ,] diceValues = new int[7, 7, 7];
        int sum = 0;
        int[] total = new int[19];
        Random random = new Random();
        int[] frequency = new int[7];

        public RollDice()
        {

        }

        public RollDice(int dice1, int dice2, int[, , ] diceValues, int sum, int[] total, Random random, int[] frequency)
        {
            this.dice1 = dice1;
            this.dice2 = dice2;
            this.diceValues = diceValues;
            this.sum = sum;
            this.total = total;
            this.random = random;
            this.frequency = frequency;
        }

        public int Dice1 { get; set; }

        public int Dice2 { get; set; }

        public int Sum { get; set; }

        public int Random { get; set; }

        public int Total { get; set; }

        public int Frequency { get; set; }

        public int generateRandomNumber()
        {   
            return random.Next(1, 7);
        }

        public int sumOfDice(int d1, int d2, int d3)
        {
            return d1 + d2 + d3;
        }


        public void rollDice(int n)
        {
            //roll dice n times
            for(int i = 0; i < n; i++)
            {
                dice1 = generateRandomNumber();
                dice2 = generateRandomNumber();
                dice3 = generateRandomNumber();
                sum = sumOfDice(dice1, dice2 , dice3);
                diceValues[dice1, dice2, dice3] += 1;
                total[sum] += 1;

            }

            Console.WriteLine("          1        2       3      4        5       6");
            Console.WriteLine("________________________________________________________");
            for (int j = 1; j <= 6; j++)
            {
                for( int z = 1; z <=6; z++)
                {
                    Console.Write(" {0:N0} |", j);
                    for (int c = 1; c <= 6; c++)
                    {
                        Console.Write("   {0:D4} ", diceValues[j,z, c]);
                        if (c == 6)
                            Console.WriteLine();
                    }
                }
            }

            Console.WriteLine("      2      3     4     5     6     7     8     9     10    11    12");
            Console.WriteLine("___________________________________________________________________________");

            Console.WriteLine("Total");
            for (int k = 2; k < 13; k++)
            {
                Console.Write("    {0:D4} ", total[k]);
            }

            Console.ReadLine();
        }

       

    }
}
