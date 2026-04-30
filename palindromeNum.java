import java.util.Scanner;

public class palindromeNum {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		int original = num; 
		int newValue=0;
		while(num!=0) {
			int digit = num % 10;
			newValue = newValue * 10 + digit;
			num = num/10;
		}
		if(original == newValue) {
			System.out.print("it is palindrome Number");
		}else {
			System.out.print("it is Not palindrome Number");
		}
    
	}	
}



