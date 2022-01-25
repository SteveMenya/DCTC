import java.util.Scanner;

/*Get the number of credits a student is taking from the user.
		Compute and display the number of study hours that are suggested, assuming 2 hours per credit
		*/
public class Credits {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//Initialize Scanner object
		Scanner sc = new Scanner(System.in);
		
		//Create variable to hold the integer response from student
		int credits;
		
		//ask student via prompt
		System.out.println("Enter the number of credits");
		credits = sc.nextInt();
		
		//Display students response
		System.out.println("If taking " + credits + ", " + credits * 2 + " study hours are suggested");

		
	}

}
