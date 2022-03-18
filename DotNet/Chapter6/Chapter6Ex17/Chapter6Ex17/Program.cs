using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter6Ex17
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Steve Menya Otieno
            //commented code shows different ways I could have approached the equation.

            //Variables
            int productNum;
            int quantity;
            decimal total = 0;
            char repeat;

            do
            {
                //get the product number
                Console.WriteLine("Enter the product number (1 - 3)");
                productNum = int.Parse(Console.ReadLine());
                while (productNum < 1 || productNum > 3)
                {
                    Console.WriteLine("Invalid! - re-enter 1 - 3");
                    productNum = int.Parse(Console.ReadLine());
                }

                //get ther quantity
                Console.WriteLine("Enter the product quantity");
                quantity = int.Parse(Console.ReadLine());
                while (quantity < 0)
                {
                    Console.WriteLine("Invalid! - re-enter 0 or more");
                    quantity = int.Parse(Console.ReadLine());
                }

                switch (productNum)
                {
                    case 1:
                        total += quantity * 2.98m;
                        break;

                    case 2:
                        total += quantity * 4.5m;
                        break;

                    case 3:
                        total += quantity * 9.98m;
                        break;
                }

                Console.WriteLine("More to enter? If so, enter Y");
                //repeat = Console.ReadKey().KeyChar;
                repeat = Console.ReadLine().ToUpper()[0];

            } //while (repeat == 'Y' || repeat == 'y');
            while (repeat == 'Y');

            Console.WriteLine($"The total is {total:c}");

            Console.ReadKey();
        }
    }
}
