import { useLoaderData } from "react-router-dom";
import { PeopleResult } from "../../shared/interfaces/people.interface";
import { Card, H3 } from "@blueprintjs/core";

export const Person = () => {
	const data = useLoaderData() as PeopleResult;
	return (
		<Card>
			<H3>{data.name}</H3>
			<p>Eye color: {data.eye_color}</p>
			<p>Gender: {data.gender}</p>
			<p>Height: {data.height}</p>
			<p>Mass: {data.mass}</p>
			<p>Hair color: {data.hair_color}</p>
		</Card>
	);
};
