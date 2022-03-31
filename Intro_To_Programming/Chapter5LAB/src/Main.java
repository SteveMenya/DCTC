import java.util.Scanner;

public class Main {

	   public static void main(String[] args) {
		      Scanner scnr = new Scanner(System.in);
		      /* Type your code here. */
		      //variables needed 
		      final int Num_Added = 5;
		      int[] jerseyNumber = new int[Num_Added];
		      int[] playersRatings = new int[Num_Added];
		      
		      
		      //prompt user to enter data
		      int counter = 0;
		      int i = 0;
		      int pr = 1;
		      do {
		    	  System.out.printf("Enter player %s's jersey number:\n", pr);
		    	  jerseyNumber[i] = scnr.nextInt();
		    	  System.out.printf("Enter player %s's rating:\n", pr);
		    	  playersRatings[i] = scnr.nextInt();
		    	   System.out.println("");
		    	  counter = counter + 1;
		    	  i++;
		    	  pr++;
		      }
		      while(counter < Num_Added);
		      
		      
		      int t = 0;
		      displayRoster(jerseyNumber, playersRatings, Num_Added);
		      
		      
		      //Display MENU Options
		      displayMenu();
		      
		      System.out.println("Choose an option:");
		      char userChoiceLoop = scnr.next().charAt(0);
		      
		      while(userChoiceLoop != 'q') {
		    	  
		    	  switch(userChoiceLoop) {
		    	  	case 'u':
		    	  	case 'U':
		    	  		System.out.println("Enter Jersery Number integer values...");
		    	  		int inputJN = scnr.nextInt();
		    	  		int myNum = -1;
		    	  		
		    	  		for( int elementI : jerseyNumber) {
		    	  			myNum = myNum +1;
		    	  			if(elementI == inputJN) {
		    	  				
		    	  				//update Ratings
		    	  				System.out.println("Enter a new Rating for player:");
		    	  				int newRatingInput = scnr.nextInt();
		    	  				//update ratings for elementI
		    	  				for( int elementR = 0; elementR < playersRatings.length; elementR++) {
		    	  					
		    	  					playersRatings[myNum] = newRatingInput;
		    	  				}
		    	  			}
		    	  					    	  			
		    	  		}

		    	  	  //Display MENU Options
		  		      displayMenu();

		  		      System.out.println("Choose an option:");
		  		      userChoiceLoop = scnr.next().charAt(0);
		  		      break;
		    	  	case 'a':
		    	  	case 'A':
		    	  	System.out.println("Enter a rating:");
		    	  	int rr = scnr.nextInt();
		    	  	outputPlayersAboveRating(rr, jerseyNumber, playersRatings, Num_Added);
		    	  	//Display MENU Options
		  		      displayMenu();

		  		      System.out.println("Choose an option:");
		  		      userChoiceLoop = scnr.next().charAt(0);
		  		      break;
		  		      
		    	  	case 'r':
		    	  	case 'R':
		    	  	//replace player
		    	  	//get jersey number
		    			   
		    	     System.out.println("Enter a jersey number:");
		    		 int jersyIn = scnr.nextInt();
		    	  	
		    		 replacePlayer(jersyIn, jerseyNumber, playersRatings, Num_Added);
		    	  	//Display MENU Options
		  		      displayMenu();

		  		      System.out.println("Choose an option:");
		  		      userChoiceLoop = scnr.next().charAt(0);
		  		      break;
		  		      
		    	  	case 'o':
		    	  	case 'O':
		    	  	//Display MENU Options
		    	  		
		    	  	  displayRoster(jerseyNumber, playersRatings, Num_Added );		    	  
		  		      displayMenu();
     
		  		      System.out.println("Choose an option:");
		  		      userChoiceLoop = scnr.next().charAt(0);
		  		      break;
		    	  	
		  		  
		    	  }
		      }
		      
		      
	 }
	   //helper functions
	   public static void displayMenu() {
		   System.out.println("");
 		   System.out.println("MENU");
	      System.out.println("u - Update player rating");
	      System.out.println("a - Output players above a rating");
	      System.out.println("r - Replace player");
	      System.out.println("o - Output roster");
	      System.out.println("q - Quit");
	      System.out.println("");
 	  }
	   
	   public static void displayRoster(int[] jn, int[] pr, int Num_Added) {
		   int playerNumber = 0;
		   int ro = 0;
		   System.out.println("ROSTER");
		   do {
		      
			   System.out.printf("Player %s -- Jersey number: %s, Rating: %s", ro + 1, jn[playerNumber],
					   pr[playerNumber]);
			   System.out.println();
			   ro++;
			   playerNumber++;
		   }while (ro  < Num_Added);
		   
	   }
	   
	   public static void replacePlayer(int inNum,int[] jn, int[] pr, int Num_Added) {
		   Scanner sc = new Scanner(System.in);
		   int count = 0;
		   for(var num : jn) {
			   if (inNum == num) {
				do {
					   System.out.println("Enter a new jersey number:");
					   int nn = sc.nextInt();
					   System.out.println("Enter a rating for the new player:");
					   
					   count = count + 1;
					   
					   num = nn;
				}while(count < Num_Added);
			   }
			   
		   }
		   
		   
	   }
	   
	   public static void outputPlayersAboveRating(int inp ,int[] jn, int[] pr, int Num_Added) {
		   
		   
		   int playerNumber = 0;
		   int ro = 0;
		   System.out.printf("Above", inp);
		   System.out.println("");
		   do {
		      
			   System.out.printf("Player %s -- Jersey number: %s, Rating: %s", ro + 1, jn[playerNumber],
					   pr[playerNumber]);
			   System.out.println();
			   ro++;
		   }while (ro  < Num_Added || pr[playerNumber] > inp );
	   }
	   
	   
}

