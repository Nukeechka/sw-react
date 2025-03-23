import axios from "axios";
import { API_ROUTES } from "./swapi.constants";
import { PeopleResponse } from "../../interfaces/people.interface";

export const getPeople = async (
	page: string = "1"
): Promise<PeopleResponse> => {
	const { data } = await axios.get(API_ROUTES.people + "/?page=" + page);
	return data;
};

export const getPerson = async (id: string) => {
	const { data } = await axios.get(API_ROUTES.people + "/" + id);
	return data;
};
