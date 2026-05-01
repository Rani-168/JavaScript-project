// import java.util.Scanner;

// public class PrintSeriesAdd2 {
// 	public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
      
//         for(int i=1; i<=n; i++) {
//         	  System.out.print((i * i) + " ");
        	 
//         }
        
        
// 	}
// }

// import java.util.*;

// public class SortRisk{
// 	public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int[] a = new int[n];
        
//         for(int i= 0; i<n; i++) {
//         	a[i] = sc.nextInt();
        	
//         }
        
//         int low =0, mid=0, high = n-1;
//         while(mid <= high) {
//         	if(a[mid] ==0) {
//         		int tem = a[low];
//         		a[low] = a[mid];
//         		a[mid]= tem;
//         		mid++;
//         		low++;
//         	}
//         	else if(a[mid] ==1) {
//         		mid++;
        		
//         	}else {
//         		int tem = a[mid];
//         		a[mid]= a[high];
//         		a[high] = tem;
//         		high --;
//         	}
//         }
        
//         for(int i=0 ; i<n; i++) {
//         	System.out.print(a[i]+ " ");
//         }
        
// 	}    
	
// }




package patterncode;

public class SecondLargestnum{
    public static void main(String[] args) {
        int a[] = {2, 4, 7, 9, 14};

        int largest = a[0];

        for (int i = 1; i < a.length; i++) {
            if (a[i] > largest) {
                largest = a[i];
                
            }
        }
        int secondLargest = a[0];
        for (int i = 0; i < a.length; i++) {
            if (a[i] != largest && a[i] > secondLargest) {
                secondLargest = a[i];
            }
        }

        System.out.println("Second Largest: " + secondLargest);
    }
}

