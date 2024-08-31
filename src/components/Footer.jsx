function Footer() {
	return (
		<footer className="flex p-8 bg-black text-white">
			<section>
				<h3 className="uppercase">our restaurants in London</h3>
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
				<h3 className="uppercase">contact us</h3>
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
