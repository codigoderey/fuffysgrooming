import React from "react";

function Adoption() {
	return (
		<section className="adoption-area">
			<div className="container">
				<div className="row align-items-center align-items-xl-end justify-content-center">
					<div className="col-xl-7 col-lg-6 col-md-10 order-0 order-lg-2">
						<div className="adoption-img">
							<img src="img/images/adoption_img.jpg" alt="" />
						</div>
					</div>
					<div className="col-xl-5 col-lg-6">
						<div className="adoption-content">
							<h2 className="title">
								El lugar <span>perfecto</span> para la mascota perfecta
							</h2>
							<p>
								Las facilidades de Fuffy’s Grooming Spot se encuentran en la
								carretera 152 del Barrio Quebradillas de Barranquitas.
							</p>
							<p>
								Estamos accesible a todo público a la vez que nos permite
								mantener un ambiente relajado y de esparcimiento emocional tanto
								para el personal empleado como para nuestros amados caninos y
								visitantes.
							</p>
							<p>
								Nuestras facilidades cuentan con espacios para ejecutar tanto el
								cuidado físico como emocional de nuestros custodios.
							</p>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.google.com/maps/place/PR-152,+Barranquitas,+Puerto+Rico/@18.1882248,-66.3123338,15z/data=!3m1!4b1!4m6!3m5!1s0x8c03385150d6f23d:0xb7610eafa56a6e0c!8m2!3d18.188225!4d-66.303579!16s%2Fg%2F11h7krpnc1?entry=ttu"
								className="btn">
								Mapa <img src="img/icon/w_pawprint.png" alt="" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="adoption-shape">
				<img src="img/images/adoption_shape.png" alt="" />
			</div>
		</section>
	);
}

export default Adoption;
