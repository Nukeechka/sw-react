import { Card, H3 } from "@blueprintjs/core";
import { PeopleResult } from "../interfaces/people.interface";
import { FC } from "react";
import { Link } from "react-router-dom";

type CustomCardProps = {
	item: PeopleResult;
	peopleId: number;
};

export const CustomCard: FC<CustomCardProps> = ({ item, peopleId }) => {
	return (
		<Link to={`/people/${peopleId}`}>
			<Card className="card" interactive={true}>
				<H3>{item.name}</H3>
				<p>Heigth: {item.height}</p>
				<p>Hair color: {item.hair_color}</p>
			</Card>
		</Link>
	);
};
