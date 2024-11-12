import { Image } from "@nextui-org/image";
import BoxReveal from "@/components/ui/box-reveal";

export default function About() {
  return (
    <section id="about" className="py-6 px-4 flex justify-center md:mx-10 ">
			<div className="max-w-5xl px-4">
				{/* <h2 className="text-3xl font-bold mb-8 text-center">About NK Chicken Rice</h2> */}
				<div className="flex flex-col md:text-lg lg:flex-row lg:space-x-10">
					<div className="mb-8 flex lg:w-1/2 ">
						<Image
							src="/image/nicki-cheang.jpg"
							alt="About Us"
							// className='container'
						/>
					</div>
					<div className='max-w-[768px] lg:w-1/2'>
						<BoxReveal boxColor={"#5046e6"} duration={0.5}>
							<p className='text-4xl lg:text-5xl font-serif mb-4 text-nk-blue '>We make people fall in love with our culture</p>
						</BoxReveal>
						<BoxReveal boxColor={"#5046e6"} duration={0.5}>
							<p className="mb-4 text-justify w-max-[800px]">
								At NK Chicken Rice, we believe in the power of home-cooked meals to bring joy and comfort to people's
								lives. Our passion for cooking and using fresh, locally-sourced ingredients sets us apart.
								Founded in 2022 by Nicki Cheang, his small business has grown into a beloved part of the community, serving
								delicious, homemade food that reminds you of family dinners and cherished memories.
								We take pride in our traditional recipes, passed down through generations, and our commitment to quality in
								every dish we prepare.
							</p>
						</BoxReveal>
					</div>
				</div>
			</div>
		</section>
  );
}