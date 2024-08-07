import photo from "/photo.png";
function About() {
	return (
		<>
			<div className="aboutPhoto">
				<img src={photo}></img>
			</div>
			<div className="aboutText">
				<h2>Frontend Developer</h2>
				<h3>Simona Trotti</h3>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam,
					excepturi iure dignissimos et natus dolor quas molestiae quis
					similique ipsa dolorem consequatur nihil voluptas culpa quibusdam
					voluptatum id distinctio repudiandae.
				</p>
			</div>
		</>
	);
}

export default About;
