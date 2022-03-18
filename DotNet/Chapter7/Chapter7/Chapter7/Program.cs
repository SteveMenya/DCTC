using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Chapter7
{
    internal class Program
    {
        static void Main(string[] args)
        {

            int original;
            int reversed = 0;
            Console.WriteLine("Enter an integer");
            original = int.Parse(Console.ReadLine());
            //reversed = ReverseNum(original); //version A
            //ReverseNum2(original, ref reversed); version B
            ReverseNum3(original, out reversed); //version C
            Console.WriteLine($"{original} backwards is {reversed}");

            Console.ReadLine();

        }
        //Version A
        //pass by value
        static int ReverseNum(int number)
        {
            int digit;
            int revNum = 0;


            while(number > 0) //1234
            {
                digit = number % 10;    //4             3       2       1
                number = number / 10;   //123           12      1       0  
                revNum = revNum * 10 + digit; //4       43      432     4321


            }
            
            return revNum;
        }

        //reference keyword ref(the invoker has the memory)
        static void ReverseNum2(int number,ref int revNum)
        {
            int digit;
            //int revNum = 0;


            while (number > 0) //1234
            {
                digit = number % 10;    //4             3       2       1
                number = number / 10;   //123           12      1       0  
                revNum = revNum * 10 + digit; //4       43      432     4321


            }
        }

        //Version C
        static void ReverseNum3(int number,out int revNum)
        {
            int digit;
            revNum = 0;


            while (number > 0) //1234
            {
                digit = number % 10;    //4             3       2       1
                number = number / 10;   //123           12      1       0  
                revNum = revNum * 10 + digit; //4       43      432     4321


            }
        }

    }
}
