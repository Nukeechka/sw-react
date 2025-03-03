import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {
	return (
		<RouterProvider
			future={{
				v7_startTransition: true,
			}}
			router={router}
		/>
	);
}

export default App;
