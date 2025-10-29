module.exports = (req, res) => {
	res.send(`<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Amazon | About</title>
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
		.section-card h2 { margin: 0; font-size: 1.75rem; }
		.section-card p { margin: 0; line-height: 1.65; color: #526273; font-size: 1.03rem; }
		.values { display: grid; gap: 18px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
		.value-pill { background: #f7f9fa; padding: 20px; border-radius: 12px; border: 1px solid rgba(19, 25, 33, 0.08); font-weight: 600; color: #131921; }
		.metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 18px; }
		.metric-card { background: #232f3e; color: #fff; border-radius: 12px; padding: 24px; display: grid; gap: 8px; }
		.metric-card strong { font-size: 1.6rem; }
		.team-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
		.team-card { border-radius: 12px; background: #fffdf7; padding: 24px; border: 1px solid rgba(255, 153, 0, 0.2); display: grid; gap: 14px; }
		.team-card h3 { margin: 0; font-size: 1.2rem; }
		.team-card span { color: #526273; font-size: 0.95rem; }
		.timeline { display: grid; gap: 20px; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
		.timeline-card { border-radius: 14px; background: #f7f9fa; padding: 24px; border: 1px solid rgba(19, 25, 33, 0.08); position: relative; }
		.timeline-card strong { display: block; font-size: 1.1rem; margin-block-end: 8px; color: #131921; }
		.innovation-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 12px; }
		.innovation-list li { padding: 16px; border-radius: 12px; background: rgba(35, 47, 62, 0.08); border: 1px solid rgba(19, 25, 33, 0.05); }
		.innovation-list strong { display: block; margin-block-end: 6px; color: #131921; }
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
		<h1>About Amazon</h1>
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/contact">Contact</a>
		</nav>
	</header>
	<main>
		<section class="section-card">
			<h2>Earth's most customer-centric company</h2>
			<p>Since 1994, Amazon has focused on long-term thinking, operational excellence, and customer obsession. Every product, program, and service we launch begins with what customers need—and works backward to deliver it faster, smarter, and more sustainably.</p>
			<div class="values">
				<div class="value-pill">Customer obsession over competitor focus</div>
				<div class="value-pill">Commitment to operational excellence</div>
				<div class="value-pill">Passion for invention and experimentation</div>
				<div class="value-pill">Long-term thinking across every business</div>
			</div>
		</section>
		<section class="section-card">
			<h2>Global scale, local impact</h2>
			<p>Amazon serves hundreds of millions of customers around the world through dedicated retail sites, physical stores, and service teams embedded within local communities.</p>
			<div class="metrics">
				<div class="metric-card">
					<strong>30+</strong>
					<span>marketplaces tailored to local customers and sellers.</span>
				</div>
				<div class="metric-card">
					<strong>1.6M+</strong>
					<span>employees powering retail, Prime, AWS, and entertainment.</span>
				</div>
				<div class="metric-card">
					<strong>100%</strong>
					<span>renewable energy powering Amazon operations by 2025.</span>
				</div>
			</div>
		</section>
		<section class="section-card">
			<h2>Leadership principles in action</h2>
			<p>Amazon's Leadership Principles are more than inspirational wall art—they guide our decisions, hiring, and product development every day.</p>
			<div class="team-grid">
				<div class="team-card">
					<h3>Invent and Simplify</h3>
					<span>We expect and require innovation from our teams and always find ways to simplify processes for customers.</span>
				</div>
				<div class="team-card">
					<h3>Dive Deep</h3>
					<span>Leaders operate at all levels, stay connected to the details, and audit frequently to ensure world-class execution.</span>
				</div>
				<div class="team-card">
					<h3>Earn Trust</h3>
					<span>We listen attentively, speak candidly, and treat others respectfully—inside Amazon and across the communities we serve.</span>
				</div>
				<div class="team-card">
					<h3>Deliver Results</h3>
					<span>By focusing on key inputs and driving them with quality and urgency, we consistently exceed expectations.</span>
				</div>
			</div>
		</section>
		<section class="section-card">
			<h2>Amazon innovations through the years</h2>
			<div class="timeline">
				<div class="timeline-card">
					<strong>1995</strong>
					<p>Amazon.com launches as an online bookstore, setting the stage for a reimagined retail experience.</p>
				</div>
				<div class="timeline-card">
					<strong>2005</strong>
					<p>Amazon Prime debuts, redefining customer expectations for fast and free shipping.</p>
				</div>
				<div class="timeline-card">
					<strong>2014</strong>
					<p>Alexa and Echo bring voice-powered assistance into the home, creating new ambient experiences.</p>
				</div>
				<div class="timeline-card">
					<strong>2023</strong>
					<p>Amazon invests billions in climate-tech innovation, accelerating its commitment to The Climate Pledge.</p>
				</div>
			</div>
		</section>
		<section class="section-card">
			<h2>Innovation that scales</h2>
			<p>Amazon builds technology platforms that empower organizations of every size—from two-person startups to global enterprises—to experiment rapidly and launch with confidence.</p>
			<ul class="innovation-list">
				<li>
					<strong>Amazon Web Services</strong>
					<span>The world's most comprehensive cloud platform, offering over 200 fully featured services.</span>
				</li>
				<li>
					<strong>Amazon Logistics</strong>
					<span>Robotics-driven fulfillment, last-mile delivery, and global supply chain optimization.</span>
				</li>
				<li>
					<strong>Amazon Devices &amp; Services</strong>
					<span>Hardware, software, and AI that deliver personalized, ambient experiences in homes and businesses.</span>
				</li>
			</ul>
		</section>
	</main>
	<footer>
		<span>&copy; ${new Date().getFullYear()} Amazon.com, Inc. or its affiliates</span>
		<a href="/contact">Join our team</a>
	</footer>
</body>
</html>`);
};
