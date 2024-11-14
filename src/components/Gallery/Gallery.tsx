import { useEffect, useState } from "react";


export default function Gallery () {

	const [images, setImages] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch('/api/gallery');
				if (!response.ok) {
					throw new Error('error????')
				}
				const data = await response.json();
				setImages(data);
			} catch (error) {
				console.error('Error loading image', error);
			}
		};
		fetchImages();
	}, []);

	return(
		<section className='flex justify-center' >
			<div className='mx-8 max-w-5xl'>
				<div className="carousel carousel-center rounded-box justify-center">
					{images.map((image, index) => (
						<div key={index} className="carousel-item">
							<img 
								src={image} 
								alt="chicken rice" 
								className="w-full max-w-[300px] h-auto object-cover"
							/>							
						</div>
					))}
					
				</div>
			</div>
		</section>
	);
}