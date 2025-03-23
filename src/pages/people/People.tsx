import { ButtonGroup, CardList } from "@blueprintjs/core";
import { Link, useLoaderData } from "react-router-dom";
import { PeopleResponse } from "../../shared/interfaces/people.interface";

import styles from "./People.module.css";
import { CustomCard } from "../../shared/ui/CustomCard";
import { useEffect, useState } from "react";
import { getPeople } from "../../shared/utils/api/swapi";

const People = () => {
	const [data, setData] = useState(useLoaderData() as PeopleResponse);
	const [page, setPage] = useState(1);

	useEffect(() => {
		const getData = async () => {
			const response = await getPeople(page.toString());
			setData(response);
		};
		if (page !== 1) {
			getData();
		}
	}, [page]);

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
			<ButtonGroup>
				<Link
					onClick={() => setPage((value) => value + 1)}
					to={`/?page=${page + 1}`}
				>
					Next
				</Link>
			</ButtonGroup>
		</>
	);
};

export default People;
