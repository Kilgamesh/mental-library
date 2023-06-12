import TipsData from '@/data/tips.json';
import TipBox from "@/components/boxes/TipBox";

export default function Tips() {
	return (
	<main className={``}>
		<header className='grid gap-y-3 mb-8'>
			<h1 className="text-2xl font-bold">Tips</h1>
			<p className="italic">If you have knowledge, let others light their candles in it.</p>
		</header>

		<div id="tips">
			<>
			{TipsData.map((Tip, index) => {
				return (
					<TipBox 
						title={Tip.title} tip={Tip.tip} 
						username={Tip.username} userUrl={Tip.userUrl} 
						key={index} 
					/>
				)
			})}
			</>
		</div>
	</main>
	)
}