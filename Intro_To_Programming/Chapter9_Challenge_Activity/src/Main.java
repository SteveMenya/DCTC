import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Main {

	public static void main(String[] args) throws NumberFormatException, IOException {
		//JJ Menya
		
		
		
		//Step 1: get the file
		File file = new File("..\\Chapter9_Challenge_Activity\\src\\Amounts.txt");
		
		//Step 2: create buffered reader
		BufferedReader bfr = new BufferedReader(new FileReader(file));
		
		//Step 3: get all the data from file and add to list
		List<Double> myDataList = myTxtData(bfr);
		
	
		//Step 4: Display all the data with advanced for loop
		displayTxtData(myDataList);
		System.out.println("");
		
		
		//Step 5: Sum up all the items is the list
		double myTotal = getSum(myDataList);
		System.out.printf("The total is  %.2f: ", myTotal);
		System.out.println();
		
		//Step 6: Compute the average
		
		double average = getAverage(myDataList);
		System.out.printf("The average is %.2f:", average);


		
		
		
		
		
		
	}
	//helper functions
	public static double getAverage(List<Double> myDatas) {

			int counter = 0;
			double sum = 0;
			for (Double data: myDatas) {
			      sum += data; 
			      counter++;
			    }
			
			double average = (sum/counter);
			
			return average;
		}
	
	public static double getSum(List<Double> myDatas) {
		
		double sum =  0.0;
		for (Double data: myDatas) {
		      sum += data; 
		    }
		return sum;
	}
	public static List<Double> myTxtData(BufferedReader bfr) throws NumberFormatException, IOException {
		List<Double> myTempList = new ArrayList<Double>();
		String line;
		int counter = 0;
		double data = 0;
		
		while((line = bfr.readLine()) != null) 
	    {
	    data = Double.parseDouble(line);
	    myTempList.add(data);
	    }
		
		return myTempList;
	}
	
	public static void displayTxtData(List<Double> myData) {
		for (Double num : myData) { 		      
            System.out.printf("%.2f" , num); 
            System.out.println();
       }
		
	}
	
	public Double totalCurrency() {
		double total = 0;
		
		return total;
	}
}