import { IExercise } from "@/utils/types";
import Box from "../ui/Box";

const ExerciseBox = ({
	exercise, note, link,
	frequency, duration_minutes,
	instant_relief, imgUrl,
	username, userUrl
}: IExercise, key: number) => {
	return (
		<Box key={key} imgUrl={imgUrl}>
			<p className="grid font-slim grid-cols-3 font-medium text-sm">
				<span className="col-start-1">{frequency}</span>
				{instant_relief 
				&& <span className="text_green text-center col-start-2">
						Instant Relief
					</span>
				}
				<span className="capitalize col-start-3 text-end">~{duration_minutes} minutes</span>
			</p>

			<h2 className="font-semibold text-2xl">
				{exercise}
			</h2>

			<p>{note}</p>
			
			<div className="flex justify-between mt-2">
				{link 
				&& <a className="link underline italic text-sm" href={link} aria-label={`link to ${exercise}`} target="_blank" rel="noopener noreferrer">
						Learn More
					</a>
				}
				<p className="text-sm text-end ml-auto link">
					-
					<a className={`italic`} href={userUrl} target="_blank" rel="noopener noreferrer">
						{username}
					</a>
				</p>
			</div>
		</Box>
	);
};
export default ExerciseBox;