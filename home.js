module.exports = (req, res) => {
	res.send(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Amazon | Home</title>
	<style>
		:root {
			color-scheme: light;
			font-family: "Segoe UI", Arial, sans-serif;
		}
		* { box-sizing: border-box; }
		body { margin: 0; background: #f1f2f6; color: #232f3e; }
		header { background: linear-gradient(135deg, #131921 0%, #1f2837 60%, #232f3e 100%); color: #fff; padding-block: 20px; padding-inline: min(5vw, 64px); }
		header .brand { display: flex; align-items: center; gap: 12px; }
		header .brand span { font-size: 1.4rem; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
		nav { margin-block-start: 16px; display: flex; flex-wrap: wrap; gap: 12px; }
		nav a { color: #ff9900; margin-inline-end: 12px; text-decoration: none; font-weight: 600; padding-block: 6px; padding-inline: 10px; border-radius: 999px; background: rgba(255, 153, 0, 0.12); transition: background 0.3s ease, color 0.3s ease; }
		nav a:hover { background: rgba(255, 153, 0, 0.24); color: #ffd814; }
		main { padding-block: 48px; padding-inline: min(6vw, 80px); display: grid; gap: 48px; }
		.hero { background: #fff; border-radius: 16px; padding: 40px; display: grid; gap: 24px; align-items: center; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12); }
		.hero__content h2 { font-size: clamp(2.25rem, 2.6vw, 2.8rem); margin-block: 0 16px; }
		.hero__content p { margin-block: 0 24px; font-size: 1.05rem; line-height: 1.6; }
		.hero__cta { display: flex; gap: 16px; flex-wrap: wrap; }
		.hero__cta a { background: #ff9900; color: #131921; text-decoration: none; padding-block: 14px; padding-inline: 28px; border-radius: 999px; font-weight: 700; transition: transform 0.2s ease, box-shadow 0.2s ease; }
		.hero__cta a:hover { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(255, 153, 0, 0.35); }
		.hero__image { justify-self: center; max-inline-size: 380px; background: radial-gradient(circle at top, #ffd814 0%, #ff9900 45%, rgba(255, 153, 0, 0) 70%); border-radius: 50%; padding: 32px; }
		.hero__image img { inline-size: 100%; block-size: auto; display: block; }
		.section-card { background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 8px 24px rgba(19, 25, 33, 0.08); }
		.section-card h3 { margin-block: 0 20px; font-size: 1.6rem; }
		.product-grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
		.product-card { background: #f7f9fa; border-radius: 12px; padding: 20px; display: grid; gap: 14px; border: 1px solid rgba(19, 25, 33, 0.08); transition: transform 0.2s ease, box-shadow 0.2s ease; }
		.product-card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(19, 25, 33, 0.12); }
		.product-card h4 { margin: 0; font-size: 1.1rem; }
		.product-card p { margin: 0; color: #526273; line-height: 1.5; }
		.product-card a { color: #ff9900; font-weight: 600; text-decoration: none; }
		.trust-grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin-block-start: 24px; }
		.trust-card { padding: 20px; border-radius: 12px; background: #232f3e; color: #fff; display: grid; gap: 10px; }
		.trust-card strong { font-size: 1.1rem; }
		.newsletter { display: grid; gap: 16px; margin-block-start: 24px; }
		.newsletter form { display: flex; flex-wrap: wrap; gap: 12px; }
		.newsletter input { flex: 1 1 240px; padding-block: 14px; padding-inline: 18px; border-radius: 999px; border: 1px solid rgba(19, 25, 33, 0.18); font-size: 1rem; min-inline-size: 200px; }
		.newsletter button { flex: 0 0 auto; background: #ffd814; color: #131921; border: none; border-radius: 999px; font-weight: 700; font-size: 1rem; padding-block: 14px; padding-inline: 28px; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease; }
		.newsletter button:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(255, 216, 20, 0.4); }
		footer { background: #131921; color: #fff; padding-block: 28px; padding-inline: min(6vw, 80px); display: flex; flex-wrap: wrap; gap: 24px; justify-content: space-between; align-items: center; }
		footer a { color: #ff9900; text-decoration: none; }
		@supports (padding: max(0px)) {
			header { padding-inline: clamp(24px, 6vw, 64px); }
			main { padding-inline: clamp(24px, 8vw, 80px); }
		}
	</style>
</head>
<body>
	<header>
		<div class="brand">
			<img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" width="110" height="33">
			<span>Amazon Retail</span>
		</div>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
	</header>
	<main>
		<section class="hero">
			<div class="hero__content">
				<h2>The Everything Store, Tailored to You</h2>
				<p>Discover curated selections across electronics, fashion, home essentials, and groceries—all delivered with Amazon's legendary speed and reliability.</p>
				<div class="hero__cta">
					<a href="/about">Why Customers Choose Amazon</a>
					<a href="/contact">Talk to a Specialist</a>
				</div>
			</div>
			<div class="hero__image">
				<img src="https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=720&q=80" alt="Amazon parcels">
			</div>
		</section>
		<section class="section-card" aria-labelledby="trending-heading">
			<h3 id="trending-heading">Trending on Amazon</h3>
			<div class="product-grid">
				<article class="product-card">
					<h4>Echo Family</h4>
					<p>Alexa-enabled smart speakers and displays that keep your home connected.</p>
					<a href="https://www.amazon.com/">Shop Echo devices</a>
				</article>
				<article class="product-card">
					<h4>Kindle Unlimited</h4>
					<p>Unlimited reading and listening on any device with instant access to bestsellers.</p>
					<a href="https://www.amazon.com/">Explore Kindle Unlimited</a>
				</article>
				<article class="product-card">
					<h4>Amazon Fresh</h4>
					<p>Same-day grocery delivery featuring local favorites and Amazon exclusives.</p>
					<a href="https://www.amazon.com/">See delivery options</a>
				</article>
				<article class="product-card">
					<h4>Prime Video</h4>
					<p>Award-winning originals, live sports, and blockbuster movies on any screen.</p>
					<a href="https://www.primevideo.com/">Stream with Prime</a>
				</article>
			</div>
		</section>
		<section class="section-card" aria-labelledby="trust-heading">
			<h3 id="trust-heading">Powered by Amazon Innovation</h3>
			<p>From fulfillment centers to customer service, Amazon invests billions in technology that removes friction from shopping.</p>
			<div class="trust-grid">
				<div class="trust-card">
					<strong>300M+</strong>
					<span>unique products available worldwide.</span>
				</div>
				<div class="trust-card">
					<strong>200+</strong>
					<span>cities with same-day or next-day delivery.</span>
				</div>
				<div class="trust-card">
					<strong>24/7</strong>
					<span>customer support dedicated to your satisfaction.</span>
				</div>
			</div>
			<div class="newsletter">
				<h4>Stay in the loop</h4>
				<p>Sign up to receive tailored recommendations, exclusive deals, and the latest Amazon innovations.</p>
				<form action="#" method="post">
					<label class="sr-only" for="newsletter-email">Email address</label>
					<input id="newsletter-email" name="email" type="email" placeholder="you@example.com" required>
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</section>
	</main>
	<footer>
		<span>&copy; ${new Date().getFullYear()} Amazon.com, Inc. or its affiliates</span>
		<a href="/contact">Customer Support</a>
	</footer>
	<!-- Screen-reader only utility -->
	<style>
		.sr-only {
			position: absolute;
			inline-size: 1px;
			block-size: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border: 0;
		}
	</style>
</body>
</html>`);
};
