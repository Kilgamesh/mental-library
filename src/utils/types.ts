// Repo contributor types
export interface IUser {
	username: string;
	userUrl: string;
}
/**
 * Types necessary ro use data from json files
 * IExercise: types for exercise data
 * IResource: types for resource data
 * ITips: types for tips data
 */
export interface IExercise extends IUser {
	exercise: string;
	note: string;
	link: string | null;
	frequency: string;
	duration_minutes: number;
	instant_relief: boolean;
	imgUrl: string;
}
export interface IResource extends IUser {
	resource: string;
	type: string;
	isFree: boolean;
	details: string;
	link: string;
}
export interface ITips extends IUser {
	title?: string;
	tip: string;
}