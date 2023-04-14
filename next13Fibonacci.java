public class next13Fibonacci {

	public static void main(String[] args) {
		int first = Integer.parseInt(args[0]);
		int second = Integer.parseInt(args[1]);
		System.out.printf("%d %d ", first, second);
		
		for(int i=0; i<13; i++) {
			second += first;
			first = second - first;
			System.out.print(second + " ");
		}
	}

}