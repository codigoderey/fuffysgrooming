import React from "react";

function Counter() {
	return (
		<section
			className="counter-area counter-bg"
			style={{ backgroundImage: "url('img/bg/counter_bg.jpg')" }}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-6 col-lg-8">
						<div className="counter-title text-center mb-65">
							<h6 className="sub-title">¿Por qué Fuffy's Grooming?</h6>
							<h2 className="title">
								El mejor servicio para el cuidado estético de tu perro
							</h2>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="counter-item">
							<h2 className="count">
								<span className="odometer">100</span>%
							</h2>
							<p>Orientamos</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="counter-item">
							<h2 className="count">
								<span className="odometer">100</span>%
							</h2>
							<p>Precios accesibles</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="counter-item">
							<h2 className="count">
								<span className="odometer">100</span>%
							</h2>
							<p>Amor a los animales</p>
						</div>
					</div>
					<div className="col-lg-3 col-md-4 col-sm-6">
						<div className="counter-item">
							<h2 className="count">
								<span className="odometer">100</span>%
							</h2>
							<p>Vasta experiencia</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Counter;
