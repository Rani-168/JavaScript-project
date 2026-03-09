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



import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();
        while(b!=0){
        int temp = b;
        b = a%b;
        a = temp;
        }
        System.out.println(a);
    }
}





