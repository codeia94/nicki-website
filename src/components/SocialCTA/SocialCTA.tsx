import Image from "next/image";

export default function SocialCTA () {
	return (
		<div className='shadow-lg'>
			<a 
				href='https://wa.me/16047359893' 
				target='_blank' 
				rel='noopener noreferrer'
				className='fixed bottom-10 right-10 z-50 drop-shadow-md hover:scale-125 transition duration-300'
			> 
				<Image 
					src='/icons/whatsapp.png'
					alt='whatsapp-icon'
					height={40}
					width={40}
				/>
			</a>
		</div>
	);
}