import {
	Button,
	Card,
	Elevation,
	FormGroup,
	H4,
	InputGroup,
} from "@blueprintjs/core";
import { FC } from "react";

const SignIn: FC = () => {
	return (
		<Card elevation={Elevation.ONE}>
			<H4>Sign in</H4>
			<FormGroup labelFor="login">
				<InputGroup id="login" type="text" placeholder="Login" />
			</FormGroup>
			<FormGroup labelFor="password">
				<InputGroup
					id="password"
					type="password"
					placeholder="Password"
				/>
			</FormGroup>
			<Button intent="primary">Sign in</Button>
		</Card>
	);
};

export default SignIn;
