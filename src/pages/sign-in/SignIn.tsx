import {
	Button,
	Card,
	Elevation,
	FormGroup,
	H4,
	InputGroup,
} from "@blueprintjs/core";
import { FC, useEffect } from "react";
import styles from "./SignIn.module.css";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IAuthFormData } from "../../shared/types/auth.type";
import { authSchema } from "../../shared/schemas/auth.schema";
import { useAppDispatch, useAppSelector } from "../../app/hooks/hooks";
import { authActions } from "../../app/store/store";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

const SignIn: FC = () => {
	const dispatchAction = useAppDispatch();
	const navigate = useNavigate();
	const isUserLoggedIn = useAppSelector((state) => state.auth.isUserLoggedIn);

	useEffect(() => {
		if (isUserLoggedIn) {
			navigate("/people");
		}
	}, [isUserLoggedIn]);

	const loginHandler = (payload: { name: string; password: string }) => {
		dispatchAction(authActions.login(payload));
	};

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<IAuthFormData>({
		defaultValues: {
			name: "",
			password: "",
		},
		resolver: yupResolver(authSchema),
	});

	const onSubmit: SubmitHandler<IAuthFormData> = async (data) => {
		loginHandler(data);
	};

	return (
		<div className={styles.layout}>
			<div className={styles.container}>
				<Card elevation={Elevation.ONE}>
					<H4>Sign in</H4>
					<form onSubmit={handleSubmit(onSubmit)}>
						<FormGroup labelFor="login">
							<Controller
								control={control}
								render={({ field }) => {
									return (
										<InputGroup
											value={field.value}
											onChange={field.onChange}
											inputRef={field.ref}
											id="login"
											type="text"
											placeholder="Login"
										/>
									);
								}}
								name="name"
							/>
							{errors.name && (
								<p className={styles.invalid}>
									This is required.
								</p>
							)}
						</FormGroup>
						<FormGroup labelFor="password">
							<Controller
								control={control}
								render={({ field }) => {
									return (
										<InputGroup
											value={field.value}
											onChange={field.onChange}
											inputRef={field.ref}
											id="password"
											type="password"
											placeholder="Password"
										/>
									);
								}}
								name="password"
							/>
							{errors.password && (
								<p className={styles.invalid}>
									This is required.
								</p>
							)}
						</FormGroup>
						<Button type="submit" intent="primary">
							Sign in
						</Button>
					</form>
				</Card>
			</div>
		</div>
	);
};

export default SignIn;
