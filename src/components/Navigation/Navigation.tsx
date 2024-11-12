import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react'
import MySvgIcon from "../nkSvgIcon";


export default function Navigation (){

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');

	useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'gallery', 'testimonials', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

	return (
	<header className="fixed top-0 text-black w-screen">
		<nav className="flex px-8 justify-between w-screen">
			<MySvgIcon className='w-16 h-16' />
			<div className="hidden sm:flex space-x-4">
				{['About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
					<button
						key={item}
						onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
						className={`hover:text-blue-200 ${
							activeSection === item.toLowerCase().replace(' ', '-') ? 'border-b-2 border-white' : ''
						}`}
					>
						{item}
					</button>
				))}
			</div>
			<button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? <X size={18} /> : <Menu size={18} />}
			</button>
		</nav>
		{isMenuOpen && (
			<div className="sm:hidden bg-red-300 p-4">
				{['About', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
					<button
						key={item}
						onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
						className="block h-full w-full text-left py-2 hover:text-blue-200"
					>
						{item}
					</button>
				))}
			</div>
		)}
	</header>
	);
}
