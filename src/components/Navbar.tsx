'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();

	return <nav className="flex justify-between items-center w-full pt-6 px-8">
		<Link className={'link'} href={'/'}>
			<svg className="w-8 h-8 md:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
				<path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
			</svg>

			<span className="hidden md:inline font-bold font-mono text-xl">Mental Library</span>
		</Link>

		<ul className="flex gap-x-4">
			<li className="link--text">
				<Link className={`${pathname?.startsWith('/tips') && 'underline text-sky' } link`} href={'/tips'}>
					Tips
				</Link>
			</li>

			<li className="link--text">
				<Link className={`${pathname?.startsWith('/exercises') && 'underline text-sky'} link`} href={'/exercises'}>
					Exercises
				</Link>
			</li>

			<li className="link--text">
				<Link className={`${pathname?.startsWith('/resources') && 'underline text-sky' } link`} href={'/resources'}>Resources</Link>
			</li>

			<li>
				<a className={'link'} href={'https://github.com/kilgamesh/mental-library'}>
				<svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
				</a>
			</li>
		</ul>
	</nav>;
};
export default Navbar;