import ResourceBox from "@/components/boxes/ResourceBox";
import ResourceData from "@/data/resources.json";
 
export default function Resources() {
	return <main>
		<header className='grid gap-y-3 mb-8'>
			<h1 className="text-2xl font-bold">Resources</h1>
			<p className="italic">When we rescue others, we rescue ourselves.</p>
		</header>

		<section id="resources">
			<>
			{ResourceData.map(({
				resource, type, isFree, details,
				link, username, userUrl
			}, index) => {
				return (
					<ResourceBox 
						resource={resource} type={type}
						isFree={isFree} details={details}
						username={username} userUrl={userUrl} 
						link={link} key={index} 
					/>
				)
			})}
			</>
		</section>
	</main>;
}