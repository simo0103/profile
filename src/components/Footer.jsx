function Footer() {
	return (
		<footer className="flex gap-20 p-8 bg-zinc-900 text-white">
			<section>
				<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">our restaurants in London</h3>
				<ul>
					<li>
						<a>Islington</a>
					</li>
					<li>
						<a>Fulham</a>
					</li>
					<li>
						<a>Ealing</a>
					</li>
					<li>
						<a>Fitzrovia</a>
					</li>
				</ul>
			</section>
			<section>
				<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">contact us</h3>
				<ul>
					<li>
						<a>Facebook</a>
					</li>
					<li>
						<a>Instagram</a>
					</li>
					<li>
						<a>Tripadvisor</a>
					</li>
					<li>
						<a>info@mail.com</a>
					</li>
				</ul>
			</section>
		</footer>
	);
}

export default Footer;
