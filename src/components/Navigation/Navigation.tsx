import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react'
import MySvgIcon from "../NkSvgIcon";
import Link from "next/link";

export default function Navigation (){

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	// useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ['about', 'gallery', 'testimonials', 'contact']
  //     const scrollPosition = window.scrollY

  //     for (const section of sections) {
  //       const element = document.getElementById(section)
  //       if (element) {
  //         const { offsetTop, offsetHeight } = element
  //         if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
  //           setActiveSection(section)
  //           break
  //         }
  //       }
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

	return (
	
		<header className={`fixed z-50 top-0 text-black flex justify-center w-screen font-oldStandardReg  `}>
			<nav className={`${isMenuOpen ? 'flex flex-col-reverse bg-sky-100' : 'px-6 py-2 flex justify-between w-screen max-w-5xl items-center bg-[#EDEDED]' }`}>
			{!isMenuOpen && (
				<Link href='/'>
					<MySvgIcon href="/" className='w-10 h-10' />
				</Link>
			)}
				<div className="hidden sm:flex space-x-4 font-medium">
					{['About', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
						<Link
							key={item}
							onClick={(e) => {
								e.preventDefault(); // Prevents default link behavior
								scrollToSection(item.toLowerCase().replace(' ', '-'));
							}}
							className={`hover:underline-offset-4 hover:underline`}
							href={`#${item.toLowerCase().replace(' ', '-')}`}
						>
							{item}
						</Link>
					))}
				</div>
				<div className={`sm:hidden ${isMenuOpen ? 'flex justify-center items-center basis-3/5 ' : ''}`}>
					<button 
						className="sm:hidden" 
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? <X size={50} className='hover:scale-150 duration-300 hover:text-blue-700' /> : <Menu size={20} />}
					</button>
				</div>
			{isMenuOpen && (
				//add w-screen and h-screen below
				<div className="sm:hidden py-12 w-screen h-screen text-4xl flex flex-col justify-around ">
					{['About', 'Pricing', 'Testimonials', 'Contact'].map((item) => (
						<div 
							key={item}
							className='flex justify-center hover:underline hover:underline-offset-4 hover:scale-110 duration-300 font-oldStandardReg'
						>
							<Link
								onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
								className="block text-center py-2 hover:text-blue-700 "
								href={`#${item.toLowerCase().replace(' ', '-')}`}
							>
								{item}
							</Link>
						</div>
					))}
				</div>
			)}
			</nav>
		</header>

	);
}

