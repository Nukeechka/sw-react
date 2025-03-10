import axios from "axios";
import { API_ROUTES } from "./swapi.constants";

export const getPeople = async () => {
	const { data } = await axios.get(API_ROUTES.people);
	return data;
};

export const getPerson = async (id: string) => {
	const { data } = await axios.get(API_ROUTES.people + "/" + id);
	return data;
};
