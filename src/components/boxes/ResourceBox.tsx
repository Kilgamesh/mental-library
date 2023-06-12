import { IResource } from "@/utils/types";
import Box from "../ui/Box";

const ResourceBox = ({ 
	resource, type, isFree, details, link, username, userUrl 
}: IResource, key: number ) => {
	return (
		<Box key={key}>
			<p className="flex content-between text-sm font-medium">
				{isFree && <span className="font-medium text_green">Free</span>}
				<span className="ml-auto capitalize">{type}</span>
			</p>
			
			<div className="my-2">
				<h2 className="font-semibold text-center mb-2 text-lg">{resource}</h2>
				<p className="text-sm">{details}</p>
			</div>

			<div className="flex justify-between text-sm">
				{link 
				&& <a className="link underline italic" href={link} aria-label={`link to ${resource}`} target="_blank" rel="noopener noreferrer">
						Learn More
					</a>
				}
				<p className="text-end ml-auto link">
					-
					<a className={`italic`} href={userUrl} target="_blank" rel="noopener noreferrer">
						{username}
					</a>
				</p>
			</div>
		</Box>
	)
};
export default ResourceBox;