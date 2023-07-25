import React from "react";
import MainSlider from "../components/MainSlider";
import Counter from "../components/Counter";
import Adoption from "../components/Adoption";
import BreedServices from "../components/BreedServices";
import Testimonial from "../components/Testimonial";
// import Faq from "../components/Faq";
// import Brand from "../components/Brand";
// import AdoptionShop from "../components/AdoptionShop";
// import Newsletter from "../components/NewsLetter";
// import BlogsHome from "../components/BlogsHome";

function Home() {
	return (
		<main>
			<MainSlider />
			<Counter />
			<Adoption />
			<BreedServices />
			<Testimonial />
			{/* <Faq afterElment="faq-area" /> */}
			{/* <Brand /> */}
			{/* <AdoptionShop /> */}
			{/* <BlogsHome /> */}
			{/* <Newsletter /> */}
		</main>
	);
}

export default Home;
