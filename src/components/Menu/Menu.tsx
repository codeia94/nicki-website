import { Card, CardFooter, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useState, useEffect, AwaitedReactNode, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from "react"
import Image from "next/image"
import { Separator } from "../ui/separator"

type MenuItem = {
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
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
							<p>Whole Chicken</p>
							<p>$60</p>
						</div>
					</CardContent>
					<Separator className='mb-2' />
					<CardFooter className='self-center flex flex-col'>
						<small>All orders come with soup, chilli sauce & cucumber</small>
						<small className='text-xs'>Whole chicken comes with 6 portions</small>
					</CardFooter>
				</Card>
			))};
      </div>
    </section>
  );
}