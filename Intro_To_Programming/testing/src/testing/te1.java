package testing;

import java.util.Scanner;

public class te1 {

	public static void main(String[] args) {
		      Scanner scnr = new Scanner(System.in);
		      double sphereVolume;
		      double sphereRadius;

		      sphereRadius = scnr.nextDouble();

		      /* Your solution goes here  */
		      sphereVolume =  (4.0 / 3.0) * Math.PI * sphereRadius * sphereRadius * sphereRadius;

		      System.out.printf("%.2f\n", sphereVolume);
		   }
}
