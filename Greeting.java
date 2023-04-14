public class Greeting {
	public static void main(String[] args) {
		System.out.println("Welcome to Cogent University!");
		
		int length = args.length;
		if(length==0) {
			System.out.println("No arguments are provided.");
		} else {
			System.out.println("A list of arguments is provided:");
			
			for(int i=0; i<length; i++) {
				System.out.println(args[i]);
			}
		}
	}
}