public class Length_and_Is_Palindrome {

	public static void main(String[] args) {
		if(args.length > 0) {
			int length = args[0].length();
			System.out.println("String length: " + length);
			System.out.println(args[0].toUpperCase());
			
			String firstHalf = args[0].substring(0, length/2);
			StringBuilder secondHalf;
			if(length%2==0) {
				secondHalf = new StringBuilder(args[0].substring(length/2, length));
			} else {
				secondHalf = new StringBuilder(args[0].substring((length/2)+1, length));
			}
			secondHalf.reverse();
			if(firstHalf.equals(secondHalf.toString())) {
				System.out.println("String argument is a palindrome.");
			} else {
				System.out.println("String argument is not a palindrome.");
			}
		} else {
			System.out.println("There are no arguments given.");
		}
	}

}