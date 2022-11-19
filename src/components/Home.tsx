import React from 'react'
import {HeaderStyleContainer} from "../CSS/styles"
import myImage from '../Images/laptop.jpg';
import mac from '../Images/computer.jpg';
import Container from 'react-bootstrap/Container';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
		<HeaderStyleContainer className='home-page-style-container'>
			<div className='home-container container'>
				<div className='card-wrapper row mt-6'>
					<div className='image-wrapper item col-md-4'>
					<img src={myImage} className="col-4" />
					</div>
					<div className='image-wrapper item col-md-4'>
						<div className="img-styled">
							<img src={mac} />
						</div>
						<div className='text-wrapper item '>
								<span>Mac 14.6</span>
						</div>
						<div className='price-wrapper item '>
								<span>Price: $1100.00</span>
						</div>
						<div className=' button-wrapper mt-2 mb-2 d-flex justify-content-between'>
							<button className='btn btn-l btn-success mx-auto fl'>Add to Cart</button>
							<button className='btn btn-l btn-success'>Buy Now</button>
						</div>
					</div>
					<div className='image-wrapper item col-md-4'>
					<img src={myImage} />
					</div>
				</div>
			</div>
		</HeaderStyleContainer>
  )
}

export default Home