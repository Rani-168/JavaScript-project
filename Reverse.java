
public class Reverse {
    public static void main(String[] args) {

        int a[] = {67, 25, 89, 12, 98, 12, 35, 61};
        int n = a.length;

        for(int i = 0; i < n / 2; i++) {
            int temp = a[i];
            a[i] = a[n - 1 - i];
            a[n - 1 - i] = temp;
        }

        System.out.println("Reversed Array:");
        for(int i = 0; i < n; i++) {
            System.out.print(a[i] + " ");
        }
    }
}



















// public class Reverse {
//     public static void main(String[] args) {
//         int arr[] = {67, 25, 89, 12, 98, 12, 35, 61};
//         int start = 0;
//         int end = arr.length - 1;

//         System.out.println("Steps:");

//         while (start < end) {
//             int temp = arr[start];
//             arr[start] = arr[end];
//             arr[end] = temp;
//             for (int num : arr) {
//                 System.out.print(num + " ");
//             }
//             System.out.println();

//             start++;
//             end--;
//         }

//         System.out.println("\nFinal Reversed Array:");
//         for (int num : arr) {
//             System.out.print(num + " ");
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








