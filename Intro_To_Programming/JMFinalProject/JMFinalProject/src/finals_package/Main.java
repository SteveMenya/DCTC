package finals_package;

import java.io.IOException;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) throws IOException {
		//JJ Menya
		//Finals
		
		
		//Declaring Objects needed
		try {
			
			Helper_Functions hf = new Helper_Functions();
			Scanner sc = new Scanner(System.in);
			Random rn = new Random();
			
			
			//Main Method requirements
			//Step1: 1.	Ask the user for how many random numbers they would like (10 – 100).
			int response = hf.getUserNumber(sc);
			
			
			/*step3: Loop for the user specified number of times, getting a random number between 1 and 100 in each iteration.
			 */
			
			List<Integer> theRandomData = hf.getRandomData(response, rn);
			
			
			//If the random number is even, add it to an even accumulator,
			int even = hf.addAllEven(theRandomData);
			
			
			// and if it is odd, add it to an odd accumulator
			int odd = hf.addAllOdd(theRandomData);
			
			/*
			 * 4.	Display the random numbers in numerical order. How you chose to do this is up to you 
			 * (hint: store the numbers in an array and use a method in the Arrays class to aid in sorting only those elements     
			 * that have the random numbers). Note that skipping this step is not detrimental to completing the remaining 
			 * requirements (but it is worth 5 points).
			 */
			System.out.println("An ordered list of all the random data");
			hf.displayRandomDatainOrder(theRandomData);
			
			
			//output results method
			hf.outputResults(even, odd);
			
		}
		catch (Exception e) {
			System.out.println("Something went wrong somewhere" + e.getMessage());
		}
		
		
		

	}
	

}
