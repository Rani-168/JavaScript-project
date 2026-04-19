// public class SeriesProblems {
//     public static void main(String[] args) {

//         int n1 = 5;
//         System.out.println("Next term (Squares): " + (n1 * n1)); // 25

        
//         int term = 17;
//         int next = term * 2 - 1;
//         System.out.println("Next term: " + next); // 33


//         int a = 2, d = 3, n = 15;
//         int ap15 = a + (n - 1) * d;               
//         System.out.println("15th term of AP: " + ap15);


//         a = 7; d = 3; n = 20;
//         int ap20 = a + (n - 1) * d;
//         System.out.println("20th term of AP: " + ap20);


       
//         a = 1; d = 3; n = 25;
//         int sum25 = n * (2 * a + (n - 1) * d) / 2;
//         System.out.println("Sum of 25 terms: " + sum25);


        
//         a = 6; d = 3; n = 30;
//         int sum30 = n * (2 * a + (n - 1) * d) / 2;
//         System.out.println("Sum of 30 terms: " + sum30);


        
//         System.out.print("AP Series: ");
//         for (int i = 0; i < 10; i++) {
//             System.out.print((a + i * d) + " ");
//         }
//         System.out.println();


       
//         int a_gp = 3, r = 2, n_gp = 12;
//         int gp12 = (int)(a_gp * Math.pow(r, n_gp - 1));
//         System.out.println("12th term of GP: " + gp12);


        
//         int first = 5, second = 15;
//         int ratio = second / first;
//         System.out.println("Common ratio: " + ratio);


       
//         a_gp = 2; r = 5; n_gp = 8;
//         int gp8 = (int)(a_gp * Math.pow(r, n_gp - 1));
//         System.out.println("8th term of GP: " + gp8);
//     }
// }



// public class Reverse{
//     public static void main(String[] args) {
//         int a[]= {1, 33, 15, 6, 7, 9, 23};
//          for(int i = 0; i < a.length; i++){
//             a[i] = a[i] * 10;
//             System.out.println(a[i]);
//          }
    
//     }
// }


// public class Student{
//     int sid;
//     String sname;
//     String scours;
//     String s_uni_name;
//     double scgpa;
//     public Student(){

//     }

//     public Student( int sid, String sname, String scours, String s_uni_name, double scgpa){
//     super();
//     this.sid= sid;
//     this.sname =sname;
//     this.scours = scours;
//     this.s_uni_name = s_uni_name;
//     this.scgpa = scgpa;  
//     }   

//     @Override
//     public String toString() {
//         return "Student [sid=" + sid + ", sname=" + sname + ", scours=" + scours + ", s_uni_name=" + s_uni_name
//                 + ", scgpa=" + scgpa + "]";
//     }

// }


// public class Reverse {
//     public static void main(String[] args) {

//         int a[] = {67, 25, 89, 12, 98, 12, 35, 61};
//         int n = a.length;

//         for(int i = 0; i < n / 2; i++) {
//             int temp = a[i];
//             a[i] = a[n - 1 - i];
//             a[n - 1 - i] = temp;
//         }

//         System.out.println("Reversed Array:");
//         for(int i = 0; i < n; i++) {
//             System.out.print(a[i] + " ");
//         }
//     }
// }







// public class Pattern {
//     public static void main(String[] args) {

//         int n = 5;

//         for (int i = 1; i <= n; i++) {

//             for (int j = 1; j <= n; j++) {
//                 if (j == i) {
//                     System.out.print("#");
//                 } else {
//                     System.out.print("*");
//                 }
//             }

//             for (int j = 1; j <= n; j++) {
//                 System.out.print(j);
//             }


//             for (int j = 1; j <= i; j++) {
//                 System.out.print("Hello");
//             }

//             System.out.println();
//         }
//     }
// }



// import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int a = sc.nextInt();
//         if(a%2 ==0){
//             System.out.println("even"); 
//         }else{
//             System.out.println("odd");
//         }
//     }
// }



// import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int a = sc.nextInt();
//         int rev = 0;
//        while (a > 0) {
//         int digit = a%10;
//         rev = rev * 10 + digit;
//         a = a/10;
        
//        }
//       System.out.println(rev);
//     }
// }

// import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int a = 0;
//         int b = 1;
        
//    for(int i = 1; i<=n; i++){
//     System.out.println(a); 
//     int sum = a + b;
//     a= b;
//     b=sum;

//    }
     
//     }
// }



// import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int sum = 0;
       
//    for(int i = 1; i>0; i++){

    
//      sum += n % 10;
//             n = n / 10;
   

//    }
//       System.out.println(sum); 
//     }
// }




//  import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int tem = n;
//         int rev = 0;
        
       
//    while (n>0){

    
//     int digit =  n % 10;
//     rev = rev * 10 + digit;
//     n = n/10;
   

//    }
//       if(rev == tem)
//         System.out.println("Palindrome"); 
//      else
//         System.out.println(" not Palindrome");  
//     }
// }





//  import java.util.Scanner;
// public class Main {
//     public static void main(String[] args) {
//         Scanner sc = new Scanner(System.in);
//         int n = sc.nextInt();
//         int rev = 0;
        
       
//    while (n>0){

//     n = n/10;
//     rev++;
   

//    }
//        System.out.println(rev);  
//     }
// }



// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {

//         Scanner sc = new Scanner(System.in);

//         int a = sc.nextInt();
//         int b = sc.nextInt();

//         int temp = a;
//         a = b;
//         b = temp;

//         System.out.println(a + " " + b);
//     }
// }



// import java.util.Scanner;

// public class Main {
//     public static void main(String[] args) {

//         Scanner sc = new Scanner(System.in);

//         int a = sc.nextInt();
//         int b = sc.nextInt();
//         while(b!=0){
//         int temp = b;
//         b = a%b;
//         a = temp;
//         }
//         System.out.println(a);
//     }
// }



// public class Main {
//     public static void main(String[] args) {
// int arr[] = {1,2,2,3,4,4,5};

// for(int i = 0; i < arr.length; i++){
//     for(int j = i+1; j < arr.length; j++){
//         if(arr[i] == arr[j]){
//             arr[j] = -1;
//         }
//     }
// }

// for(int i = 0; i < arr.length; i++){
//     if(arr[i] != -1)
//         System.out.print(arr[i] + " ");
// }
//     }
// }

// public class Main {

//     public static void main(String[] args) {
//         int arr[] = {1, 2, 3, 4, 4, 3, 6, 7, 2};
//         for(int i=0; i<arr.length; i++){
//             for(int j=1+i; j<arr.length; j++){
//                 if(arr[i] == arr[j]){
//                     arr[j] = -1;
//                 }
//             }
//         }

//         for(int i = 0; i < arr.length; i++){
//             if(arr[i] != -1) 
//                  System.out.print(arr[i] + " ");            
//         }
//     }
// }





// public class Main {
//     public static void main(String[] args) {
// int arr[] = {1,2,2,3,4,9,5};

//  int sum =arr[0];
// for(int i=0; i<arr.length; i++){
    
//         if(arr[i] > sum) {
//               sum = arr[i];
//         }
          
    
// }
// System.err.println(sum);
//     }
// }

// public class Student {

//     // Method to check palindrome
//     public static boolean isPalindrome(int num) {
//         int original = num, rev = 0;
//         while (num > 0) {
//             int digit = num % 10;
//             rev = rev * 10 + digit;
//             num /= 10;
//         }
//         return original == rev;
//     }

//     // Method to check prime
//     public static boolean isPrime(int num) {
//         if (num <= 1) return false;
//         for (int i = 2; i <= num / 2; i++) {
//             if (num % i == 0) return false;
//         }
//         return true;
//     }

//     public static void main(String[] args) {

//         int a[] = {45, 254, 1, 131, 13, 25, 6};

//         int sum = 0;
//         int evenSum = 0;
//         int div5Sum = 0;
//         int primeCount = 0;
//         boolean palindromeFound = false;

//         for (int num : a) {

//             // a) total sum
//             sum += num;

//             // b) even sum
//             if (num % 2 == 0) {
//                 evenSum += num;
//             }

//             // c) divisible by 5
//             if (num % 5 == 0) {
//                 div5Sum += num;
//             }

//             // d) palindrome check
//             if (isPalindrome(num)) {
//                 palindromeFound = true;
//             }

//             // e) prime count
//             if (isPrime(num)) {
//                 primeCount++;
//             }
//         }

//         System.out.println("Total Sum = " + sum);
//         System.out.println("Even Sum = " + evenSum);
//         System.out.println("Sum Divisible by 5 = " + div5Sum);
//         System.out.println("Palindrome Present = " + palindromeFound);
//         System.out.println("Prime Count = " + primeCount);
//     }




// public class MoveZeros {
//     public static void main(String[] args) {
//         int arr[] = {4,5,0,1,9,0,5,0};
//         int n = arr.length;

//         int index = 0;

//         // Step 1: Move non-zero elements forward
//         for(int i = 0; i < n; i++) {
//             if(arr[i] != 0) {
//                 arr[index] = arr[i];
//                 index++;
//             }
//         }

//         // Step 2: Fill remaining with zeros
//         while(index < n) {
//             arr[index] = 0;
//             index++;
//         }

//         // Print result
//         for(int num : arr) {
//             System.out.print(num + " ");
//         }
//     }
// }



 // import java.util.*;

// public class MoveZerosSwap {
//     public static void main(String[] args) {

//         int arr[] = {4, 5, 0, 1, 9, 0, 5, 0};
//         int n = arr.length;

//         int j = 0; // pointer for placing non-zero elements

//         for(int i = 0; i < n; i++) {

//             if(arr[i] != 0) {
//                 // swap arr[i] with arr[j]
//                 int temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;

//                 j++; // move j forward
//             }
//         }

//         // print result
//         for(int num : arr) {
//             System.out.print(num + " ");
//         }
//     }
// }

// public class MoveZero{
//     public static void main(String[] args) {
//         int arr[]= {1, 4, 6,0,5,8,0,2};
//         int n = arr.length;
//         int j= 0;
//         for(int i= 0; i<n; i++){
//             if(arr[i]!=0){
//                int temp = arr[i];
//                arr[i] = arr[j];
//                arr[j]= temp;

//                j++;



//             }
//         }
    

//         for(int num : arr){
//             System.out.print(num + " ");
//         }
//     }
// }




// public class ToggleBits {
//     public static void main(String[] args) {
//         int n = 10;
//         int bit = (int)(Math.log(n) / Math.log(2)) +1;
//         int mask = (1 << bit) -1;
//         int result = n^mask;
//         System.out.println(result);
//     }

// }




public class Swap{

    public static void main(String[] args) {
        int arr[]= {12, 34, 67, 19, 54};
        int n = arr.length;
        for(int i =0; i<n/2; i++){
            int temp = arr[i];
            arr[i] = arr[n-1-i];
            arr[n-1-i]=temp;
        }
         for(int i = 0; i < n; i++){
            System.out.print(arr[i] + " ");
        }
    }
}






