package finals_package;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Collections;
import java.util.InputMismatchException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Random;
import java.util.Scanner;
import java.io.FileWriter;

public class Helper_Functions {
	
	
	//1.Ask the user for how many random numbers they would like (10 – 100).
public int getUserNumber( Scanner sc) {
		
		System.out.println("How many random numbers would you like?");
		 int value = 0;
		 boolean repeat = true;
		 while( repeat) {		
				try {
				    value = sc.nextInt();
				    /*step 2:	If the user enters a number outside of the range of 10 - 100, 
				     * have them re-enter the value (use a validation loop).
				     */
					while(value < 10 || value > 100) {
						System.out.println("Invalid, Enter number between 10 and 100");
						value = sc.nextInt();	
					}
					//number entered is correct
					repeat = false;
				}
				catch (InputMismatchException im) {
					System.out.println("Please enter an integer number");
					sc.next();
					//im.printStackTrace();
				}
				catch (NoSuchElementException  ne) {
					System.out.println("Try again");
					sc.next();
					
				}
				catch(IllegalStateException ise) {
					System.out.println("Shop is closed. Try again tomorrow");
					
				}
			
			}
		
		return value;
		
	}

public  List<Integer> getRandomData(int userResponse, Random rn) {
	List<Integer> theRandomData = new ArrayList<Integer>();
	
	for(int loop = 0; loop < userResponse; loop ++) {
		int randomNumber = rn.nextInt(100 - 10) + 10;
		theRandomData.add(randomNumber);
		
	}
	
	return theRandomData;
}

public  int addAllEven(List<Integer> workingData) {
	//List<Integer> theRandomData = new ArrayList<Integer>();
	
	int sumofEven =  0;
	for (int number: workingData) {
	    if (number % 2 == 0) {
		      sumofEven += number; 
        }
	   
	}
	    
	return sumofEven;
}

public  int addAllOdd(List<Integer> workingData) {
	//List<Integer> theRandomData = new ArrayList<Integer>();
	
	int sumofOdd =  0;
	for (int number: workingData) {
	    if (number % 2 != 0) {
		      sumofOdd += number; 
        }
	     
	}
	    
	return sumofOdd;
}

public void displayRandomDatainOrder(List<Integer> workingRandomData) {
	 Collections.sort(workingRandomData);
	 for(int num: workingRandomData)  
	 { 
		 //keep this print statement for finals
		 System.out.print(num + " "); 
	 }  
	 System.out.println("");
}

public void outputResults(int even, int odd) throws IOException {

	System.out.printf("The even Total is:%d", even);
	System.out.println();
	System.out.printf("The odd Total is:%d", odd);
	
	Writer wr = new FileWriter("Totals.txt", false);
	if(even > odd) {
		wr.write( String.valueOf(even) );
		wr.write( String.valueOf(odd) );
	}
	else if(odd > even) {
		wr.write( String.valueOf(odd) +"\n" );
		wr.write( String.valueOf(even) + "n" );
	}
	wr.close();
;
	
}
	

}
