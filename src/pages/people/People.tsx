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
				{data.results.map((item) => {
					return <CustomCard key={item.name} item={item} />;
				})}
			</CardList>
		</>
	);
};

export default People;
