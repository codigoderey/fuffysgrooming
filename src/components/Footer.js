import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer>
			<div className="footer-top-area footer-bg">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-3">
							<div className="footer-widget">
								<div className="f-logo">
									<Link to="/">
										<img src="img/logo/logo.png" alt="" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										El mejor servicio de hospedería y grooming en el área para
										tu mascota.
									</p>
								</div>
								<div className="footer-contact">
									<div className="icon">
										<i className="fas fa-headphones" />
									</div>
									<div className="content">
										<h4 className="title">
											<a href="tel:0987654321">787-394-9231</a>
										</h4>
										<span>Llama ahora</span>
									</div>
								</div>
								<div className="footer-social">
									<ul>
										<li>
											<a href="/#">
												<i className="fab fa-facebook-f" />
											</a>
										</li>
										<li>
											<a href="/#">
												<i className="fab fa-instagram" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
						{/* <div className="col-2">
							<div className="footer-widget">
								<h4 className="fw-title">Nuestras Políticas</h4>
								<div className="fw-link">
									<ul>
										<li>
											<Link to="/contacts">Privacidad</Link>
										</li>
										<li>
											<Link to="/contacts">Terminos y condiciones</Link>
										</li>
									</ul>
								</div>
							</div>
						</div> */}
					</div>
				</div>
				<div className="footer-shape">
					<img src="img/images/footer_shape01.png" alt="" />
				</div>
				<div className="footer-shape shape-two">
					<img src="img/images/footer_shape02.png" alt="" />
				</div>
			</div>
			<div className="copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<div className="copyright-text">
								<p>
									Copyright {new Date().getFullYear()} Fuffy's Grooming Spot.
									Todos los derechos reservados.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
