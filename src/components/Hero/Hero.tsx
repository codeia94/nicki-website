import { ArrowDown } from "lucide-react";

export default function Hero () {
	return (
		
			<section id="home" className="relative min-h-screen flex items-center justify-center custom-bg">
				<div className="text-center">
					{/* <h2 className="text-4xl md:text-6xl font-bold mb-4">NK Chicken Rice</h2>
					<p className="text-xl mb-8">Savor the taste of home-cooked goodness</p> */}
				</div>
				<ArrowDown className='hover:cursor-pointer animate-bounce z-10 w-10 h-10 absolute bottom-16 text-blue-700'
					onClick={() => {
						document.getElementById('about')?.scrollIntoView({
							behavior: 'smooth',
						});
					}}
				/>
			</section>
	);
}