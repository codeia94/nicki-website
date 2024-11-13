


export default function Gallery () {
	return(
		<section className='flex justify-center' >
			<div className='mx-8 max-w-5xl'>
				<div className="carousel carousel-center rounded-box justify-center">
					<div className="carousel-item">
						<img 
							src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" 
							alt="Pizza" />
					</div>
					<div className="carousel-item">
						<img
							src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
							alt="Pizza" />
					</div>
				</div>
			</div>
		</section>
	);
}