import Image from "next/image";
import "./about.scss";

const teamMembers = [
	{
		name: "Madalina Popescu",
		role: "Founder & Head Baker",
	},
	{
		name: "Alex Ionescu",
		role: "Pastry Artist",
	},
	{
		name: "Lena Dumitru",
		role: "Bread Lead",
	},
	{
		name: "Chris Nguyen",
		role: "Guest Experience",
	},
	{
		name: "Future Teammate",
		role: "Your Seat at the Table",
	},
];

export default function AboutPage() {
	return (
		<div className="about-page">
			<section className="about-hero container">
				<div className="about-hero-grid">
					<div className="about-hero-copy">
						<span className="about-eyebrow">We love cakes and breads.</span>
						<h1 className="about-title">Back to Origins</h1>
						<div className="about-story">
							<p>
								Our Back to Origins story begins with a simple idea: to return to a time when life was shaped by genuine
								connections and honest work. A time when people valued what was made by hand, with care and intention.
							</p>
							<p>
								Back then, baking at home was more than just preparing food—it was a way to bring people together. The smell
								of fresh bread or a cake in the oven meant warmth, sharing, and comfort.
							</p>
							<p>
								We want to bring that feeling back. Our products are made with the same attention and passion that once
								filled every kitchen. Each loaf and cake is crafted to remind you of the simple joy that comes from quality
								ingredients, time, and care.
							</p>
							<p>
								With every bite, we hope to reconnect you to that timeless sense of home, comfort, and authenticity.
							</p>
						</div>
					</div>
					<figure className="about-hero-media">
						<div className="about-hero-image" aria-hidden="true">
							<Image src="/images/about_us_team.jpg" alt="Our dedicated team at Maddy's Bakery" width={820} height={620} priority />
						</div>
						<figcaption className="about-hero-caption">Our dedicated team at Maddy&apos;s Bakery.</figcaption>
					</figure>
				</div>
			</section>

			<section className="about-team container" aria-labelledby="about-team-title">
				<div className="about-team-header">
					<h2 id="about-team-title" className="about-section-title">Meet the Team</h2>
					<p className="about-section-intro">
						The people behind the counter who keep dough proofing, stories flowing, and guests smiling.
					</p>
				</div>
				<div className="team-grid">
					{teamMembers.map((member) => (
						<article key={member.name} className="team-card">
							<div className="team-photo" aria-hidden="true">
								<span>Photo coming soon</span>
							</div>
							<div className="team-copy">
								<h3 className="team-name">{member.name}</h3>
								<p className="team-role">{member.role}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}
