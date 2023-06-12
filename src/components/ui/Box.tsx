import Image from "next/image";
import { ReactNode } from "react";
import Loader from "./Loader";

interface IChildren {
	children: ReactNode | ReactNode[];
	imgUrl?: string;
	key: number;
}
const Box = ({children, imgUrl, key}: IChildren) => {
	return (
		<div key={key} 
			className="box border-2 border-black dark:border-white overflow-hidden bg-black dark:bg-white text-white dark:text-neutral-950"
		>
			{imgUrl 
			&& <Image className="exercise_img" 
					src={imgUrl} width={250} height={500} 
					alt={`${imgUrl} Header Image`} 
					priority={false}
					blurDataURL={'https://i.pinimg.com/originals/e2/6d/87/e26d873ee68fbcd9dc1c40d8b0c6b3b4.gif'}
					placeholder="blur"
				 />
			}
			<div className={`${imgUrl ? 'pb-4' : 'py-4'} px-4 flex flex-col gap-2`}>
				{children}
			</div>
		</div>
	)
};
export default Box;