import React from "react";
import { Button, Container, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Logo from "../assets/img/logo.svg";

const Layout = ({ page, children }) => {
	return (
		<div className={page}>
			<header>
				<Container maxWidth="sm" className="container">
					<Link href="/" underline="none">
						<img className="logo" src={Logo} alt="Whisper Care" />
					</Link>
					<Link href="/" underline="none">
						<AccountCircleIcon className="icon" sx={{ color: "#111", fontSize: 34 }} />
					</Link>
				</Container>
			</header>

			<main>{children}</main>

			<div className="action_menu">
				<Container maxWidth="sm" className="container">
					<Link component={RouterLink} to="/" underline="none">
						<HomeIcon sx={{ color: "#888", fontSize: "40px" }} />
					</Link>
					<Button>
						<PlayCircleIcon sx={{ color: "#9747FF", fontSize: "50px" }} />
					</Button>
					<Link component={RouterLink} to="/settings" underline="none">
						<SettingsIcon sx={{ color: "#888", fontSize: "40px" }} />
					</Link>
				</Container>
			</div>
		</div>
	);
};

export default Layout;
