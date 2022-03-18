using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dice_Rolling
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //JJ Menya
            //Chapter 8 hw

            //introduce helper class
            RollDice rl = new RollDice();

            //roll dice 36000 times
            rl.rollDice(36000);
        }
    }
}
