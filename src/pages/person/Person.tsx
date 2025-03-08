import { useParams } from "react-router-dom";

export const Person = () => {
	const personId = useParams();
	console.log(personId);
	return <div>Person</div>;
};
