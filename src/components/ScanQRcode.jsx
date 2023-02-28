import React, { useEffect, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Box, Button, CircularProgress, Dialog, Typography } from "@mui/material";
import products from "../assets/products-demo.json";

const qrcodeRegionId = "html5qr-code-full-region";

const ScanQRcode = ({ setOpenModal, openModal }) => {
	const [scanner, setScanner] = useState(null);
	const [data, setData] = useState({ loading: true });

	const handleClose = () => {
		setOpenModal(false);
	};

	const onScanSuccess = (decodedText, decodedResult) => {
		console.log("decodedText", decodedText);
		console.log("decodedResult", decodedResult);
		setData({ decodedText: decodedText, decodedResult: decodedResult, loading: false });
	};

	const stopScanning = () => {
		if (scanner) {
			scanner
				.stop()
				.then((ignore) => {
					console.log("Stopped scanning");
				})
				.catch((err) => handleError(err));
		}
		setOpenModal(false);
	};

	const handleError = (err) => {
		console.log("Error: ", err);
	};

	useEffect(() => {
		// This method will trigger user permissions
		Html5Qrcode.getCameras()
			.then((devices) => {
				if (devices && devices.length) {
					// let cameraId = devices[0].id;
					setScanner(new Html5Qrcode(qrcodeRegionId));
				}
			})
			.catch((err) => {
				handleError(err);
				setData({ error: err, loading: false });
			});
	}, []);

	return (
		<Dialog fullWidth onClose={handleClose} open={openModal}>
			<div style={{ padding: "26px 12px" }}>
				<Html5QrcodePlugin scanner={scanner} onScanSuccess={onScanSuccess} handleError={handleError} />

				<div className="_grid">
					{data.error && (
						<Typography align="center" component="h6" color={"error"} sx={{ fontWeight: "bold" }}>
							Camera Permission Required
						</Typography>
					)}

					{data.loading && <LoadingState />}

					{data.decodedText && <ResultDisplay data={data} />}

					<Button variant="contained" sx={{ mt: "18px", mx: "auto" }} onClick={stopScanning}>
						Stop scanning
					</Button>
				</div>
			</div>
		</Dialog>
	);
};

const Html5QrcodePlugin = ({ scanner, onScanSuccess, handleError }) => {
	useEffect(() => {
		if (scanner) {
			// setTimeout(() => {
			const config = { fps: 10, qrbox: { width: 250, height: 480 }, disableFlip: false };
			scanner.start({ facingMode: "environment" }, config, onScanSuccess, handleError);
			// }, 1000);
		}
	}, [scanner, onScanSuccess, handleError]);

	return <div id={qrcodeRegionId} />;
};

const ResultDisplay = ({ data }) => {
	const product = products.find((product) => product.code === data.decodedText);

	if (product) {
		// Redirect to product page
		window.location.href = `/product/${product.code}`;
	}

	return (
		<div className="result _grid_center">
			<Typography align="center" variant="h6" mt={2.5} sx={{ fontWeight: "bold" }}>
				Code: {data.decodedText}
			</Typography>

			<p>{data.decodedResult}</p>

			<Typography align="center" variant="h6" my={1} color={"error"}>
				No product found with this code
			</Typography>
		</div>
	);
};

const LoadingState = () => {
	return (
		<div className="loading">
			<Box sx={{ display: "flex", justifyContent: "center", mt: "24px", mb: "10px" }}>
				<CircularProgress />
			</Box>
		</div>
	);
};

export default ScanQRcode;
