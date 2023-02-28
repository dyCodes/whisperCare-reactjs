import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Card, CircularProgress, Container, Dialog, Link, Typography } from "@mui/material";
import Layout from "../components/Layout";
import RecentQRScans from "../components/RecentQRScans";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QRcode from "../assets/img/qrcode.svg";
import Html5QrcodePlugin from "../components/Html5QrcodePlugin";

const Home = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<Layout page="Home">
			<Container maxWidth="sm" className="container">
				<div className="header_card">
					<Button className="scan_qrcode" onClick={() => setOpenModal(true)}>
						<Card className="card">
							<img src={QRcode} style={{ display: "block" }} alt="Scan QRcode" />
							<Typography component="p" align="center" sx={{ fontWeight: 500 }}>
								Scan QR code to get more information
							</Typography>
						</Card>
					</Button>
				</div>

				{openModal && <ScanQRcode setOpenModal={setOpenModal} openModal={openModal} />}

				<Card className="start_review_card">
					<Typography variant="h6" mb={2.5} className="heading">
						Record an audio review of purchased products.
					</Typography>

					<Link component={RouterLink} to="/review" underline="hover" className="review_button">
						Start now
						<ArrowForwardIcon className="icon" />
					</Link>
				</Card>

				<Typography variant="h6" component="h2" mb={2.5} sx={{ fontWeight: "bold" }}>
					Recent QR code scans
				</Typography>

				<RecentQRScans />
			</Container>
		</Layout>
	);
};

const ScanQRcode = ({ setOpenModal, openModal }) => {
	const handleClose = () => {
		setOpenModal(false);
	};

	const onNewScanResult = (decodedText, decodedResult) => {
		console.log("decodedText", decodedText);
		console.log("decodedResult", decodedResult);
		setOpenModal(false);
	};

	return (
		<Dialog fullWidth onClose={handleClose} open={openModal}>
			<div style={{ padding: "26px 12px" }}>
				<Html5QrcodePlugin
					fps={10}
					qrbox={{ width: 250, height: 480 }}
					disableFlip={false}
					qrCodeSuccessCallback={onNewScanResult}
				/>

				<Box sx={{ display: "flex", justifyContent: "center", mt: "20px", mb: "10px" }}>
					<CircularProgress />
				</Box>
				<Typography component="h6" align="center" sx={{ fontWeight: 500 }}>
					Scanning...
				</Typography>
			</div>
		</Dialog>
	);
};

export default Home;
