import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import Image from 'next/image';
import { FaInstagram } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { MdOutlineDateRange } from "react-icons/md";

export default function Contact () {
	return (
		<div id="contact" className='max-w-6xl self-center flex mx-auto '>
			<Card className='flex flex-col xl:flex-row xl:gap-4 w-full bg-[url("/image/gallery/packed1.jpg")] bg-cover bg-center'>
				<div className="xl:w-1/2 flex flex-col justify-center p-6 items-center">
					<CardHeader className="items-center">
						<h1 className="text-6xl text-center mb-8 font-quintessential font-semibold tracking-wider ">Ready to order?</h1>
						<CardDescription className=' flex flex-row gap-6 bg-white/30 backdrop-blur-lg rounded-xl items-center'>
							<div className='text-lg space-y-6 m-6'>
								<div className='flex align-middle items-center gap-4'>
									<IoPersonOutline/><span className=''>Nicki Cheang</span>
								</div>
								<div className='flex align-middle items-center gap-4'>
									<LuPhone /><span className=''>+1-604-7359893</span>
								</div>
								<div className='flex align-middle items-center gap-4'>
									<MdOutlineDateRange /><span className=' text-wrap'>Pick up days: Wednesday, Saturday & Sunday</span>
								</div>
								<div className='flex align-middle items-center gap-4'>
									<FaInstagram />
									<a 
										href='https://www.instagram.com/nick.kee.chicken.rice/' 
										className=' text-wrap text-nk-blue hover:underline hover:underline-offset-4'
										target='_blank'
									>
										Follow us on instagram
									</a>
								</div>
							</div>
						</CardDescription>
					</CardHeader>
				</div>
				<div className="xl:w-1/2">
					<Image 
						src='/image/surrey-map.png'
						width={400}
						height={200} 
						className='object-cover shadow-xl'
						style={{ width: '100%', height: 'auto' }}
						alt='map of surrey'				
					/>
				</div>
			</Card>
		</div>

	);
}