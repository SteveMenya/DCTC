using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter6Example15D
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Steve Otieno Menya
           
            for (int row = 1; row <= 10; row++)
            {
                for( int col = 9; col >= row ; col-- )
                {
                    //space loop
                    Console.WriteLine(' ');
                }

                for(int col = 1; col <= row; col++) 
                {
                    //asterisks loop
                    Console.WriteLine('*');
                }
                Console.WriteLine();
            }
        }
    }
}
