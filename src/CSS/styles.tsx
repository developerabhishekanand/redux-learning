import styled from 'styled-components';
import myImage from '../Images/computer.jpg';

export const HeaderStyleContainer = styled.div`
	.home-container {
		h1 {
			font-size: 4.2rem;
			color: red;
		}
		.image-wrapper {
			img {
				width: 100%;
				height: 300px;
			}
		}
		.img-styled {
			width: auto;
			height: auto;

			&:hover{
				transform: scale(1.1);
			}
		}
		.card-wrapper {
			
		}
		.text-wrapper,.price-wrapper {
			border: 1px solid black;

			&:hover{
				background-color: lightskyblue;
			}
		}
		.button-wrapper {
			button {
				min-width: 170px;
			}
		}
	}
`
export const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${myImage});
  width: auto;
  height: auto;
	margin: auto;
`;