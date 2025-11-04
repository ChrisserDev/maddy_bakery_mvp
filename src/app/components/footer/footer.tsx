import Link from "next/link";
import Image from "next/image";
import "./footer.scss";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="site-footer">
			<div className="footer-container">
				<div className="footer-brand">
					<Link href="/" className="footer-logo" aria-label="Maddy's Bakery home">
						<Image src="/images/maddys_logo.png" alt="Maddy's Bakery" width={120} height={120} />
					</Link>
					<p className="footer-tagline">Baked with <span className="accent-desc">love</span>, shared with <span className="accent-desc">joy</span>.</p>
				</div>

				<div className="footer-links">
					<div className="footer-column">
						<h4 className="footer-heading">Quick Links</h4>
						<ul className="footer-list">
							<li><Link href="/about">About Us</Link></li>
							<li><Link href="/products">Products</Link></li>
							<li><Link href="/order-online">Order Online</Link></li>
							<li><Link href="/visit-us">Visit Us</Link></li>
						</ul>
					</div>

					<div className="footer-column">
						<h4 className="footer-heading">Stay Connected</h4>
						<ul className="footer-list social-list">
							<li>
								<a href="https://www.facebook.com/madys.bakery" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
									Facebook
								</a>
							</li>
							<li>
								<a href="https://www.instagram.com/maddysbakery2025/" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile">
									Instagram
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<p className="footer-note">Handcrafted in Stevenage, Hertfordshire 🍞</p>
				<p className="footer-copy">© {currentYear} Maddy&apos;s Bakery. All rights reserved.</p>
			</div>
		</footer>
	);
}
