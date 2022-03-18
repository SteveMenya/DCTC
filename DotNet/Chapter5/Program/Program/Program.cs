// See https://aka.ms/new-console-template for more information

//student name : steve otieno
//Chapter 5

//program 19 on page 186.


//loop to get the item # and quantity
//compute the total for that item and add it to a grand total
//when done looping, calculate the earnings as: 200 + 9% of the grand total


//Beginning of app

//variables
int itemNumber;
int quatity;
decimal total;
decimal grandTotal=0;
const decimal ITEM1 = 239.99m;
const decimal ITEM2 = 129.75m;
const decimal ITEM3 = 99.95m;
const decimal ITEM4 = 350.89m;

//prime the sentinel control variable
Console.WriteLine("Enter the item number 1 - 4 or some other value to quit: ");
itemNumber = int.Parse(Console.ReadLine());

while (itemNumber >= 1 && itemNumber <= 4)
{
    Console.WriteLine("You are in the loop");

    Console.WriteLine($"Enter the quantity for the item{itemNumber} (1 or more)");
    quatity = int.Parse(Console.ReadLine());

     while(quatity < 1)
    {
        Console.WriteLine("Wrong, re-renter 1 or more");
        quatity = int.Parse(Console.ReadLine());
    }

    if (itemNumber == 1)
        total = quatity * ITEM1;
    else if(itemNumber == 2)
        total = quatity * ITEM2;
    else if(itemNumber == 3)
        total = quatity * ITEM3;
    else
        total = quatity * ITEM4;

    grandTotal += total;

    Console.WriteLine("Enter the next item number 1 - 4 or some other value");
    itemNumber = int.Parse(Console.ReadLine());

    Console.WriteLine($"The earnings are {200 + .09m * grandTotal}");
    Console.ReadLine();


}



