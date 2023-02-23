import React from "react";
import { Container } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Logo from "../assets/logo.svg";

const Layout = ({ page, children }) => {
	return (
		<div className={page}>
			<header>
				<Container maxWidth="lg" className="container">
					<img className="logo" src={Logo} alt="Whisper Care" />
					<ManageAccountsIcon className="icon" sx={{ color: "#272027", fontSize: 32 }} />
				</Container>
			</header>

			<main>{children}</main>

			<div className="action_menu"></div>
		</div>
	);
};

export default Layout;
