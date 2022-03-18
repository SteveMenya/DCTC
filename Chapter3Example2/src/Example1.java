import java.util.Random;
import java.util.Scanner;

public class Example1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int number;
		
		Random random = new Random();
		int number1;
		
		//rand starts with 0 
		number1 = random.nextInt(50); //0 - 49
		System.out.println(number1);
		
		
		int number2;
		number2 = random.nextInt(100) + 1; //add plus 1 if you want to include the number you select
		System.out.println(number2);
		

		System.out.println("---------------------------------------------");
		
		
		for(int x = 1; x <= 100; x++) {
			number = random.nextInt(10);
			System.out.println(number + " ");
			if(x % 10 == 0)
				System.out.println();
		}
		
		
		//Characters
		//ask a user for their fname and lname and then display their initials
		
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter your first name: ");
		char fname = scanner.next().charAt(0);
		System.out.println("Enter your last name: ");
		char lname = scanner.next().charAt(0);
		
		System.out.println("Your initial is " + fname + "." + lname);
		
		//String example
		
		//Scanner sc = new Scanner(System.in);
		
		System.out.println("Enter your first name: ");
		String firstName = scanner.next();
		char fn = firstName.charAt(0);
		System.out.println("Enter your last name: ");
		String lastName = scanner.next();
		char ln = lastName.charAt(0);
		
		System.out.println("Your initial is " + fn + "." + ln);
		
		scanner.nextLine();  //clearing the stream
		String fullName;
		System.out.println("Enter your full name");
		fullName = scanner.nextLine();
		System.out.println("Hi " + fullName);
		
		
		
		//Calculate a car's mpg
		double miles;
		double gals;
		double mpg;
		String makeModel;
		
		System.out.println("Enter the miles driven ");
		miles = scanner.nextDouble();
		System.out.println("How many gallons were used?");
		scanner.nextLine();
		
		gals = scanner.nextDouble();
		System.out.println("What is the make and model of your car? ");
		makeModel = scanner.next();
		
		
		mpg = miles/gals;
		System.out.printf("The mpg for your %s is %.2f", makeModel, mpg);
		
	}

}
