using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Displaying_A_Diamond
{
    internal class Numbers
    {
        int rangeNumber;

        public int RangeNumber { get; set; }


        //default contructor
        public Numbers()
        {

        }

        public Numbers(int rangeNumber)
        {
            this.rangeNumber = rangeNumber;
        }

       
        public bool numberRangeVerification(int number)
        {
            int div = number % 2;

            if((div != 0) && (number >= 1) && number <= 19)
            {
                return true;
            }
            else
            {
                Console.WriteLine("Please enter an odd number btw 1 & 19");
                return false;
            }

        }





    }
}
