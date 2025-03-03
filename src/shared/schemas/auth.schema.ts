import { object, string } from "yup";

export const authSchema = object({
	name: string().required(),
	password: string().required(),
});
