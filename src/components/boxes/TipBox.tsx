import { ITips } from "@/utils/types";
import Box from "../ui/Box";

const TipBox = ({ title, tip, userUrl, username }: ITips, key: number ) => {
	return (
		<Box key={key}>
			{title && <h2 className="font-semibold text-center">{title}</h2>}
			
			<p className="my-2">
				{tip}
			</p>

			<p className="text-sm text-end link">
				-
				<a className={`italic`} href={userUrl} target="_blank" rel="noopener noreferrer">
					{username}
				</a>
			</p>
		</Box>
	)
};
export default TipBox;