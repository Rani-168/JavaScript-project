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

import java.util.*;

public class SortRisk{
	public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] a = new int[n];
        
        for(int i= 0; i<n; i++) {
        	a[i] = sc.nextInt();
        	
        }
        
        int low =0, mid=0, high = n-1;
        while(mid <= high) {
        	if(a[mid] ==0) {
        		int tem = a[low];
        		a[low] = a[mid];
        		a[mid]= tem;
        		mid++;
        		low++;
        	}
        	else if(a[mid] ==1) {
        		mid++;
        		
        	}else {
        		int tem = a[mid];
        		a[mid]= a[high];
        		a[high] = tem;
        		high --;
        	}
        }
        
        for(int i=0 ; i<n; i++) {
        	System.out.print(a[i]+ " ");
        }
        
	}    
	
}
