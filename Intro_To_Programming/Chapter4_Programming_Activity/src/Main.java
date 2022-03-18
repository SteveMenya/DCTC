import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		//JJ Menya
		//Chapter 4 LAB
		
		//Variables
		final int ITEM_CATEGORY = 3;
		int[] cost = new int[ITEM_CATEGORY];
		
		//making my user input scanner object
		Scanner sc = new Scanner(System.in);
		
		//declaring and initializing variables i'll need
		int sum = 0;
		int item1Total = 0;
		int item2Total = 0;
		int item3Total = 0;
		int itemPrice;
		
		
		//Ask user to enter a series of item(s)
		System.out.print("Would you like item 1, 2, or 3?");
		int selectedItem = sc.nextInt(); 
		
		
		//sentinel-controlled loop
		while(selectedItem != 0) {
			
			if(selectedItem > 3) {
				System.out.println("Item not available");
				System.out.println("Please enter a valid item 1, 2 or 3");
				selectedItem = sc.nextInt(); 
			}
			else if(selectedItem < 0) {
				System.out.println("Item not available");
				System.out.println("Please enter a valid item 1, 2 or 3");
				selectedItem = sc.nextInt(); 
			}
			else if(selectedItem == 1) {
				System.out.printf("What is the price of the item:%d you selected?", new Object[] {selectedItem});
				itemPrice = sc.nextInt();
				if(itemPrice <= 0) {
					System.out.println("PRIZE CANT BE Less than 0");
					System.out.println("Please a valid price");
					itemPrice = sc.nextInt(); 
				} 
				
				item1Total = item1Total + itemPrice;
			}
			else if(selectedItem == 2) {
				System.out.printf("What is the price of the item:%d you selected?", new Object[] {selectedItem});
				itemPrice = sc.nextInt();
				if(itemPrice <= 0) {
					System.out.println("PRIZE CANT BE Less than 0");
					System.out.println("Please a valid price");
					itemPrice = sc.nextInt(); 
				} 
				
				item2Total = item2Total + itemPrice;
			}
			else if(selectedItem == 3) {
				System.out.printf("What is the price of the item:%d you selected?", new Object[] {selectedItem});
				itemPrice = sc.nextInt();
				if(itemPrice <= 0) {
					System.out.println("PRIZE CANT BE Less than 0");
					System.out.println("Please a valid price");
					itemPrice = sc.nextInt(); 
				} 
				
				item3Total = item3Total + itemPrice;
			}		
				
				System.out.println("Would you like to enter another item? Enter item 1, 2 or 3 or Press 0 to quit");
				selectedItem = sc.nextInt();
			}
		
		System.out.println("Total cost for item 1 item(s): " + item1Total);
		System.out.println("Total cost for item 2 item(s): " + item2Total);
		System.out.println("Total cost for item 3 item(s): " + item3Total);
		
		if(item1Total > item2Total && item1Total > item3Total) {
			System.out.println("Item 1 has the most expensive item(s)");
		}
		else if(item2Total > item1Total && item2Total > item3Total) {
			System.out.println("Item 2 has the most expensive item(s)");
		}
		else if(item3Total > item1Total && item3Total > item2Total) {
			System.out.print("Item 3 has the most expensive item(s)");
		}
	}
		
}
