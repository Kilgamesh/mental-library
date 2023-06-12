import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <header className='flex flex-col gap-y-12'>
				<div className='grid md:grid-cols-2 gap-y-8 items-center'>
					<Image 
						className='shadow-md md:order-2 min-h-72 h-full dark:hidden object-center rounded-sm'
						src={'/imgs/layout/breathe.jpg'}
						width={3000}
						height={2000}
						alt='neon sign that reads breathe'
					/>
					<Image 
						className='shadow-md md:order-2 min-h-72 h-full hidden dark:inline object-cover object-center rounded-sm'
						src={'/imgs/layout/and-breathe.jpg'}
						width={3000}
						height={2000}
						alt='neon sign that reads and breathe'
					/>

					<div className='grid gap-y-4'>
						<h1 className='text-center mx-auto leading-snug text-5xl max-w-[15ch]'>
							Your <span className='bg-pistachio'>Best Self</span> 
							{''} starts with your <span className='bg-sky'>Mental Health!</span>
						</h1>
						<p className='text-center px-6'>
							Ensuring the accessibility and inclusively of mental health support 
							is of utmost importance. To this end, we are diligently establishing 
							an environment characterized by friendliness and community involvement. 
						</p>

						<p className='mt-4 px-6 text-center italics'>
							Mental health is not a destination, but a process.
						</p>
					</div>
				</div>
			</header>
			
			<section className='grid my-12 gap-4'>
				<div 
					className={`
						h-fit w-full text-center 
						bg-black dark:bg-white mx-auto py-7 px-6 rounded-md 
						flex flex-col gap-y-4 items-center shadow-md
					`}
				>
					<h2 className='text-xl font-semibold max-w-[25ch] text-white dark:text-black'>
						There is hope, even when your brain tells you there isn’t.
					</h2>
				
					<p>
						<Link 
							className='shadow-sm inline-block w-fit py-3 px-5 bg-white dark:bg-black hover:opacity-80 text-black dark:text-white rounded-sm'
							href={'/resources'}
						>
							Get Started Today
						</Link>
					</p>
				</div>

				<div className='grid grid-cols-2 gap-4 grayscale'>
					<Image 
						className='shadow-md object-cover object-center rounded-sm'
						src={'/imgs/layout/worthy.jpg'}
						width={4800}
						height={3200}
						alt='you are worth of love'
					/>
					<Image 
						className='shadow-md object-cover object-center rounded-sm'
						src={'/imgs/layout/mindfulness.jpg'}
						width={4800}
						height={3200}
						alt='mindfulness sign'
					/>
				</div>
			</section>

			<section className='text-center grid md:items-center md:grid-cols-2'>
				<div className='rounded-sm mt-auto flex flex-col justify-center md:bg-black dark:md:bg-white md:text-white dark:md:text-black md:h-[25rem]'>
					<h3 className='text-sky text-xl lg:text-2xl font-semibold'>Your Mental Health Gym</h3>

					<p className='mt-4 md:px-6'>
						While here individuals can readily share valuable insights, 
						discover valuable resources, and foster meaningful connections, with the 
						ultimate aim of facilitating personal growth and well-being.
					</p>
				</div>

				<ul id='slideshow' className='mt-8 h-[20rem] md:h-[25rem]'>
					<li>
						<Image 
							className='shadow-md object-cover object-center rounded-sm'
							src={'/imgs/layout/gym-1.jpg'}
							fill={true}
							priority={false}
							alt='smiley face art on wall'
						/>
					</li>

					<li>
						<Image 
							className='shadow-md object-cover object-center rounded-sm'
							src={'/imgs/layout/gym-3.jpg'}
							fill={true}
							priority={false}
							alt='autumn goodman unsplash'
						/>	
					</li>
				
					<li>
						<Image 
							className='shadow-md object-cover object-center rounded-sm'
							src={'/imgs/layout/gym-2.jpg'}
							fill={true}
							priority={false}
							alt='ahmed zayan unsplash smiley face in water'
						/>
					</li>
				</ul>
			</section>
    </main>
  )
}
