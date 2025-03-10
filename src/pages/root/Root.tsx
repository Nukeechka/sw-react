import { Navbar, Alignment, Button, H5 } from "@blueprintjs/core";
import styles from "./Root.module.css";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks/hooks";
import { authActions } from "../../app/store/store";

const Root = () => {
	const dispatchAction = useAppDispatch();
	const navigate = useNavigate();

	const logoutHandler = () => {
		dispatchAction(authActions.logout());
		navigate("/login");
	};

	return (
		<div className={styles.layout}>
			<header>
				<Navbar>
					<div className={styles.container}>
						<Navbar.Group align={Alignment.LEFT}>
							<Navbar.Heading>React Star</Navbar.Heading>
							<Navbar.Divider />
							<Navbar.Heading>SWAPI</Navbar.Heading>
						</Navbar.Group>
						<Navbar.Group align={Alignment.RIGHT}>
							<NavLink to={"/"}>
								<Button minimal text="Home" />
							</NavLink>
							<Button
								onClick={logoutHandler}
								minimal
								text="Logout"
							/>
						</Navbar.Group>
					</div>
				</Navbar>
			</header>
			<main className={styles["container-outlet"]}>
				<Outlet />
			</main>
			<footer>
				<H5 className={styles.title}>React Star</H5>
			</footer>
		</div>
	);
};

export default Root;
