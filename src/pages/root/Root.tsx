import { Navbar, Alignment, Button, H5 } from "@blueprintjs/core";
import styles from "./Root.module.css";
import { Outlet } from "react-router-dom";

const Root = () => {
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
							<Button minimal text="Home" />
							<Button minimal text="Logout" />
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
