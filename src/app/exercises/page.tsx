import { ExerciseBox } from "@/components";
import ExerciseData from "@/data/exercises.json";

export default function Exercises() {
	return <main className="w-full">
		<header className='grid gap-y-3 mb-8'>
			<h1 className="text-2xl font-bold">Exercises</h1>
			<p className="italic">
				Forget inspiration. Habit is more dependable. 
				Habit will sustain you whether you’re inspired or not.
				And if you want something you&lsquo;ve never had, you must be willing to do something you&lsquo;ve never done.
				Here you can find a exercises that will assist you to be the best you possible.
			</p>
		</header>

		<section className="mx-auto" id="exercises">
			{ExerciseData.map(({exercise, note, link,
			frequency, duration_minutes,
			instant_relief, imgUrl,
			username, userUrl}, index) => {
				return (
				<ExerciseBox 
					exercise={exercise} note={note} link={link}
					frequency={frequency} duration_minutes={duration_minutes}
					instant_relief={instant_relief} imgUrl={imgUrl}
					username={username} userUrl={userUrl} key={index}
				/>) 
			})}
		</section>
	</main>;
}