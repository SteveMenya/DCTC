using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Invoice_Objects
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //JJ Menya
            //Chapter 9 Exercise

            Invoice[] invoices = {
                new Invoice(83, "Electric sander", 7, 57.98M),
                new Invoice(24, "Power saw", 18, 99.99M),
                new Invoice(7, "Sledge hammer", 11, 21.50M),
                new Invoice(77, "Hammer", 76, 11.99M),
                new Invoice(39, "Lawn mower", 3, 79.50M),
                new Invoice(68, "Screwdriver", 106, 6.99M),
                new Invoice(56, "Jig saw", 21, 11.00M),
                new Invoice(3, "Wrench", 34, 7.50M),};


            //a)  Sort the invoice by part description
            var partDesc = 
                from i in invoices
                orderby i.PartDescription
                select i;

            //display sort
            Console.WriteLine("Sort by Part Description");
            foreach(var item in partDesc)
            {
                Console.WriteLine(item);
            }

            //b) Sort the invoice Objects by Price

            var priceSort = 
                from i in invoices
                orderby i.Price
                select i;
            Console.WriteLine("\n\nSort by Price");
            foreach(var p in priceSort)
            {
                Console.WriteLine(p);
            }

            //c) select the partDescription and Quantity and sort the results by Quantity
            var partDescriptionQ =
                from i in invoices
                orderby i.Quantity
                select new { i.PartDescription, i.Quantity };

            //display results
            Console.WriteLine("\n\nPartDescription an Quantity sorted by Quantity");
           foreach(var item in partDescriptionQ)
            {
                Console.WriteLine(item);
            }

            //d) select partDescription and valueOfInvoice. Calculated Value = InvoiceTotal. orderBy InvoiceValue. hint use let

            var results =
                 from i in invoices
                 let value = i.Quantity * i.Price
                 orderby value
                 select new { i.PartDescription, InvoiceTotal = value };

            //display each results
            Console.WriteLine("\n\nPart Description and Value of Invoice sorted by Invoice Value");
            foreach(var result in results)
            {
                Console.WriteLine(result);
            }


            //e) using results in part d... select the InvoiceTotal in the range of $200 to $500

            var range =
                from i in results
                where i.InvoiceTotal > 199 && i.InvoiceTotal < 501
                select i;

            //display results
            Console.WriteLine("\n\nResults betweem 200 and 500");
            foreach(var s in range)
            {
                Console.WriteLine(s);
            }

            //f) Use LINQ to select the PartNumbers of those prices more than $50
            var greaterThanFifty =
                from i in invoices
                where i.Price > 50
                select i;

            Console.WriteLine("\n\nPrices greater than Fifty");
            foreach(var great in greaterThanFifty)
            {
                Console.WriteLine(great);
            }



            //g) Use LINQ to display the description for the most expensive part 

            var list = (from i in invoices
                        orderby i.Price descending
                        select i).Take(1);

            //display results
            Console.WriteLine("\n\nMost expensive part"); 
                foreach(var exp in list)
            {
                Console.WriteLine(exp);
            }



            Console.ReadLine();

        }
    }
}
