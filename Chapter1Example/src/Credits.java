import java.util.Scanner;

/*Get the number of credits a student is taking from the user.
		Compute and display the number of study hours that are suggested, assuming 2 hours per credit
		*/
public class Credits {

	public static void main(String[] args) {
	      Scanner scnr = new Scanner(System.in);
	      int num1;
	      int num2;
	      int num3;
	      int num4;
	      int product;
	      int sum;
	      int average;
	      double prod;
	      double avg;
	      
	      
	      /* Type your code here. */
	      num1 = scnr.nextInt();
	      num2 = scnr.nextInt();
	      num3 = scnr.nextInt();
	      num4 = scnr.nextInt();
	      
	      product = num1 * num2 * num3 * num4;		    
	      sum = num1 + num2 + num3 + num4;		      
	      average = sum / 4;
	      System.out.println(product + " " + average);
	      
	      prod = (double)num1 * num2 * num3 * num4; 
	      avg = (num1 * num2 * num3 * num4)/4.0;
	      
	      System.out.printf("%.3f %.3f\n", prod, avg);
	      
	   }
}
