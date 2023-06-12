

const Footer = () => {
	return (
	<footer className="w-full mt-auto py-6 px-8 bg-black dark:bg-white">
		<div className="max-w-2xl mx-auto">
			<h4 className="text-center mb-4 text-white dark:text-black font-bold text-lg">Proudly Open Sourced</h4>
			<ul className="grid grid-cols-3 text-sm font-medium">
				<li>
					<a
						className={`text-white dark:text-black link`} 
						href="http://github.com/kilgamesh/mental-library" target="_blank" rel="noopener noreferrer"
					>
						Contribute
					</a>
				</li>

				<li className="text-center">
					<a 
						className={`text-white dark:text-black link`}
						href="tel:+8006624357"
					>
						Crisis Hotline
					</a>
				</li>

				<li className="text-end">
					<a
						className={`text-white dark:text-black link`}
						href="http://github.com/kilgamesh/mental-library/issues" target="_blank" rel="noopener noreferrer"
					>
						Report an Issue
					</a>
				</li>
			</ul>
		</div>
	</footer>);
};
export default Footer;