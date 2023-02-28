import { Html5Qrcode } from "html5-qrcode";
import React, { useEffect } from "react";

const qrcodeRegionId = "html5qr-code-full-region";

const Html5QrcodePlugin = ({
	fps,
	qrbox,
	disableFlip,
	qrCodeSuccessCallback,
	qrCodeErrorCallback,
	aspectRatio,
}) => {
	useEffect(() => {
		// Creates the configuration object
		const config = { fps, qrbox, aspectRatio, disableFlip };

		const html5QrCode = new Html5Qrcode(qrcodeRegionId);
		// If you want to prefer back camera
		html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback, qrCodeErrorCallback);
	}, []);

	return <div id={qrcodeRegionId} />;
};

export default Html5QrcodePlugin;
