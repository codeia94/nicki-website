import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaRegUser, FaPhone, FaCalendar } from "react-icons/fa";

export default function Contact () {
	return (
		<div id="contact" className='max-w-6xl self-center flex mx-auto '>
			<Card className='flex flex-col xl:flex-row xl:gap-4 w-full bg-[url("/image/gallery/packed1.jpg")] bg-cover bg-center'>
				<div className="xl:w-1/2 flex flex-col justify-center p-6 items-center">
					<CardHeader className="items-center">
						<h1 className="text-6xl text-center mb-8 font-quintessential font-semibold tracking-wider ">Ready to order?</h1>
						<CardDescription className=' flex flex-row gap-6 bg-white/30 backdrop-blur-2xl rounded-xl items-center'>
							<div className='text-lg space-y-6 m-6'>
								<div className='flex align-middle items-center gap-4'>
									<FaRegUser/><span className=''>Nicki Cheang</span>
								</div>
								<div className='flex align-middle items-center gap-4'>
									<FaPhone /><span className=''>+1-604-7359893</span>
								</div>
								<div className='flex align-middle items-center gap-4'>
									<FaWhatsapp/><a href='https://wa.me/16047359893' className=' text-wrap text-nk-blue hover:underline hover:underline-offset-4'>Click to order here!</a>
								</div>
								<div className='flex align-middle items-center gap-4'>
									<FaCalendar /><span className=' text-wrap'>Pick up days: Wednesday, Saturday & Sunday</span>
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
							<div className='flex-grow'>
								<Image 
									src='/image/nkcr.jpeg'
									alt='whatsapp-nkcr'
									height={0}
									width={200}
									className='object-contain xl:w-full xl:h-full rounded-r-2xl'
								/>
							</div>
						</CardDescription>
					</CardHeader>
				</div>
				<div className="xl:w-1/2 self-center xl:mr-4">
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