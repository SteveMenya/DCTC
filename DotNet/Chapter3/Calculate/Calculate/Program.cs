// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

int number1;
int number2;
int number3;
int sum;
int product;
float average;
int smallest;
int largest;


Console.WriteLine("Enter the first number");
number1 = int.Parse(Console.ReadLine());
//number1 = Convert.ToInt32(Console.ReadLine());
//int.TryParse(Console.ReadLine(), out number1);


Console.WriteLine("Enter the second number");
number2 = int.Parse(Console.ReadLine());

Console.WriteLine("Enter the third number");
number3 = int.Parse(Console.ReadLine());

sum = number1 + number2 + number3;
product = number1 * number2 * number3;

smallest = number1;
if (number2 < smallest) {
    smallest = number2;
}
if (number3 < smallest)
{
    smallest = number3;
    largest = number1;
}

largest = number1;
if (number2 > largest)
{
    largest = number2;
}
if (number3 > largest)
{
    largest = number3;
}



//Console.WriteLine("The total is " + sum);
//Console.WriteLine("The product is " + product);

//Console.WriteLine("The total is {0} and the product is {1}", sum, product);

//string entapulation
Console.WriteLine($"Total: {sum}\nProduct: {product}\nAverage: {sum/3.0:f2}");

Console.WriteLine("\n \n");
Console.WriteLine($"Largest: {largest} \nSmallest: {smallest}");

