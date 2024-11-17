import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import Image from 'next/image';
import { UserRound, Phone, CalendarHeart } from "lucide-react";


export default function Contact () {
	return (
		<div id="contact" className='max-w-6xl self-center flex mx-auto '>
			<Card className='flex flex-col xl:flex-row xl:gap-4 w-full'>
				<div className="xl:w-1/2 flex flex-col justify-center p-6">
					<CardHeader>
						<h1 className="text-6xl text-center mb-8 font-quintessential font-semibold tracking-wider ">Ready to order?</h1>
						<CardDescription className='flex flex-row gap-6'>
							<Image 
								src='/image/nicki-cheang.jpg'
								width={200}
								height={200}
								alt='nicki'
								className='rounded-xl shadow-xl'
							/>
							<div className='text-2xl space-y-6'>
								<div className='flex'>
									<UserRound/><span className='ml-4'>Nicki Cheang</span>
								</div>
								<div className='flex'>
									<Phone /><span className='ml-4'>6047359893</span>
								</div>
								<div className='flex'>
									<CalendarHeart /><span className='ml-4'>Pick up days: Thursday & Friday</span>
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