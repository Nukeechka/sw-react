import { CardList } from "@blueprintjs/core";
import { useLoaderData } from "react-router-dom";
import { PeopleResponse } from "../../shared/interfaces/people.interface";

import styles from "./People.module.css";
import { CustomCard } from "../../shared/ui/CustomCard";

const People = () => {
	const data = useLoaderData() as PeopleResponse;

	return (
		<>
			<CardList className={styles.list} bordered={false}>
				{data.results.map((item, index) => {
					return (
						<CustomCard
							key={item.name}
							item={item}
							peopleId={index + 1}
						/>
					);
				})}
			</CardList>
		</>
	);
};

export default People;
