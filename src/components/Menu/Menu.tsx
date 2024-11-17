import { Card, CardFooter, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Separator } from "../ui/separator"
import { CircleHelp } from 'lucide-react'
import {Tooltip} from "@nextui-org/tooltip";

type MenuItem = {
	alt: string
  name: string;
  description: string;
  image: string;
  options: { name: string; price: string }[];
};

export default function Menu() {
const [menu, setMenu] = useState<MenuItem[]>([]); 

useEffect(() => {
	const fetchMenu = async () => {
		try {
			const response = await fetch ('/menu.json');
			if (!response.ok) throw new Error("Failed to fetch menu");
			const data = await response.json();
			console.log(data.menuItem);
			setMenu(data.menuItem);
		} catch (error) {
			console.error("Error fetching menu:", error);
      setMenu([]);
		}
	};
	fetchMenu();
}, []);

  return (
    <section id="menu" className="container  mx-auto px-4 py-12 flex flex-col items-center">
      <h2 className="text-6xl text-center mb-8 font-quintessential font-semibold tracking-wider">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
			{menu.map((item, index) => (
				<Card key={index} className='flex flex-col'>
					<Image 
						alt={item.alt}
						src={item.image}
						className='object-cover rounded-t-xl'
						width={800}
						height={100}
					/>
					<CardHeader>
						<CardTitle className='text-2xl'>{item.name}</CardTitle>
						<CardDescription>{item.description}</CardDescription>
					</CardHeader>
					<Separator  />
					<CardContent className='flex flex-row justify-around'>
						<div className='flex flex-col items-center w-1/2 py-1'>
							<p>Per portion</p>
							<p>$10</p>
						</div>
						<Separator orientation="vertical"/>
						<div className='flex flex-col items-center w-1/2 py-1'>
							<p className='flex flex-row'>
								Whole Chicken
								<Tooltip 
									showArrow={true} 
									content='Serves 6 portions'
									className='text-sm bg-white px-1 rounded-lg shadow-lg'>
								<span><CircleHelp className='w-3 ml-2'/></span>
								</Tooltip>
							</p>
							<p>$60</p>
						</div>
					</CardContent>
					<Separator className='mb-2' />
					<CardFooter className='self-center flex flex-col'>
						<small>All orders come with soup, chilli sauce & cucumber</small>
					</CardFooter>
				</Card>
			))}
      </div>
    </section>
  );
}