import { InferType } from "yup";
import { authSchema } from "../schemas/auth.schema";

export type IAuthFormData = InferType<typeof authSchema>;
