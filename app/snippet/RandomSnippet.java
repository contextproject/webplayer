package snippet;

import java.util.Random;

public class RandomSnippet {

	private double songStart;
	private Random random;

	public RandomSnippet() {
		random = new Random();
		this.generate();
	}

	public void generate() {
		songStart = random.nextDouble() * 100000;
	}

	public double getStart() {
		return songStart;
	}
}
