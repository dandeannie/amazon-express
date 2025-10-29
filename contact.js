module.exports = (req, res) => {
	res.send(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Amazon | Contact</title>
	<style>
		:root {
			color-scheme: light;
			font-family: "Segoe UI", Arial, sans-serif;
		}
		* { box-sizing: border-box; }
		body { margin: 0; background: #f1f2f6; color: #232f3e; }
		header { background: linear-gradient(135deg, #131921 0%, #1f2837 60%, #232f3e 100%); color: #fff; padding-block: 24px; padding-inline: min(6vw, 80px); display: grid; gap: 16px; }
		header h1 { margin: 0; font-size: clamp(2rem, 2.4vw, 2.6rem); }
		nav { display: flex; flex-wrap: wrap; gap: 12px; }
		nav a { color: #ff9900; margin-inline-end: 12px; text-decoration: none; font-weight: 600; padding-block: 6px; padding-inline: 12px; border-radius: 999px; background: rgba(255, 153, 0, 0.12); transition: background 0.3s ease, color 0.3s ease; }
		nav a:hover { background: rgba(255, 153, 0, 0.24); color: #ffd814; }
		main { padding-block: 48px; padding-inline: min(6vw, 80px); display: grid; gap: 32px; }
		.section-card { background: #fff; border-radius: 16px; padding: 32px; box-shadow: 0 12px 28px rgba(19, 25, 33, 0.1); display: grid; gap: 24px; }
		.section-card h2 { margin: 0; font-size: 1.7rem; }
		.section-card p { margin: 0; line-height: 1.65; color: #526273; font-size: 1.03rem; }
		.contact-grid { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
		.contact-card { background: #f7f9fa; border-radius: 12px; border: 1px solid rgba(19, 25, 33, 0.08); padding: 24px; display: grid; gap: 12px; }
		.contact-card strong { font-size: 1.1rem; color: #131921; }
		.contact-card a { color: #ff9900; text-decoration: none; font-weight: 600; }
		.contact-card ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 8px; color: #526273; }
		.support-form form { display: grid; gap: 20px; }
		.form-field { display: grid; gap: 8px; }
		.form-field label { font-weight: 600; color: #131921; }
		.form-field input,
		.form-field textarea,
		.form-field select { padding-block: 14px; padding-inline: 16px; border-radius: 12px; border: 1px solid rgba(19, 25, 33, 0.2); font-size: 1rem; background: #fff; color: inherit; }
		.form-field textarea { min-block-size: 140px; resize: vertical; }
		.form-actions { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; }
		.form-actions button { background: #ff9900; color: #131921; border: none; border-radius: 999px; padding-block: 14px; padding-inline: 32px; font-weight: 700; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease; }
		.form-actions button:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(255, 153, 0, 0.35); }
		.form-actions span { font-size: 0.95rem; color: #526273; }
		.faq-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 16px; }
		.faq-list li { padding: 18px; border-radius: 12px; background: rgba(35, 47, 62, 0.08); border: 1px solid rgba(19, 25, 33, 0.05); }
		.faq-list strong { display: block; margin-block-end: 6px; color: #131921; }
		footer { background: #131921; color: #fff; padding-block: 28px; padding-inline: min(6vw, 80px); display: flex; flex-wrap: wrap; gap: 20px; justify-content: space-between; align-items: center; }
		footer a { color: #ff9900; text-decoration: none; }
		@supports (padding: max(0px)) {
			header { padding-inline: clamp(24px, 6vw, 80px); }
			main { padding-inline: clamp(24px, 8vw, 80px); }
		}
	</style>
</head>
<body>
	<header>
		<h1>Contact Amazon</h1>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
	</header>
	<main>
		<section class="section-card">
			<h2>We are here to help</h2>
			<p>Whether you need help with an order, want to explore partnership opportunities, or have feedback to share, Amazon specialists are available around the clock.</p>
			<div class="contact-grid">
				<div class="contact-card">
					<strong>Customer Service</strong>
					<ul>
						<li>Order tracking &amp; returns</li>
						<li>Prime membership questions</li>
						<li>Digital services and subscriptions</li>
					</ul>
					<a href="https://www.amazon.com/gp/help/customer/display.html">Go to customer support</a>
				</div>
				<div class="contact-card">
					<strong>Business &amp; Sellers</strong>
					<ul>
						<li>Sell on Amazon marketplace</li>
						<li>Advertising solutions</li>
						<li>Amazon Business procurement</li>
					</ul>
					<a href="https://sell.amazon.com/">Speak with sales</a>
				</div>
				<div class="contact-card">
					<strong>Media &amp; Press</strong>
					<ul>
						<li>Corporate communications</li>
						<li>Press inquiries</li>
						<li>Brand resources</li>
					</ul>
					<a href="https://press.aboutamazon.com/">Visit our press center</a>
				</div>
			</div>
		</section>
		<section class="section-card support-form">
			<h2>Send a message</h2>
			<p>Share details about how we can assist you and a member of our support team will respond quickly.</p>
			<form action="#" method="post">
				<div class="form-field">
					<label for="topic">Topic</label>
					<select id="topic" name="topic" required>
						<option value="">Select a topic</option>
						<option value="order">Order question</option>
						<option value="business">Business inquiry</option>
						<option value="press">Press &amp; media</option>
						<option value="feedback">General feedback</option>
					</select>
				</div>
				<div class="form-field">
					<label for="name">Full name</label>
					<input id="name" name="name" type="text" placeholder="Jane Doe" required>
				</div>
				<div class="form-field">
					<label for="email">Email address</label>
					<input id="email" name="email" type="email" placeholder="jane@example.com" required>
				</div>
				<div class="form-field">
					<label for="message">How can we help?</label>
					<textarea id="message" name="message" placeholder="Share the details of your request" required></textarea>
				</div>
				<div class="form-actions">
					<button type="submit">Send message</button>
					<span>Need immediate assistance? Call Prime Support at <strong>1-888-280-4331</strong>.</span>
				</div>
			</form>
		</section>
		<section class="section-card">
			<h2>Frequently asked questions</h2>
			<ul class="faq-list">
				<li>
					<strong>Where can I track my order?</strong>
					<span>Visit <a href="https://www.amazon.com/your-orders" rel="noopener">Your Orders</a> to see the latest shipping updates and delivery estimates.</span>
				</li>
				<li>
					<strong>How do I start selling on Amazon?</strong>
					<span>Start your seller journey at <a href="https://sell.amazon.com/" rel="noopener">Sell on Amazon</a> to access onboarding resources and best practices.</span>
				</li>
				<li>
					<strong>What is Amazon's return policy?</strong>
					<span>Most items are eligible for return within 30 days. Learn more in our <a href="https://www.amazon.com/returns" rel="noopener">Returns Center</a>.</span>
				</li>
			</ul>
		</section>
	</main>
	<footer>
		<span>&copy; ${new Date().getFullYear()} Amazon.com, Inc. or its affiliates</span>
		<a href="/about">Investor relations</a>
	</footer>
</body>
</html>`);
};
