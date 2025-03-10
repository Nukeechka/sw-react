import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { Spinner } from "@blueprintjs/core";

function App() {
	return (
		<RouterProvider
			future={{
				v7_startTransition: true,
			}}
			router={router}
			fallbackElement={<Spinner size={50} />}
		/>
	);
}

export default App;
