import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
	const [recentScans, setRecentScans] = useState([
		{
			id: 1,
			code: "1111222201",
			brand: "MARY KAY",
			name: "Crystal Glide Lipstick",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
		},
		{
			id: 2,
			code: "1111222202",
			brand: "ESTEE LAUDER",
			name: "Bronze Liquid Eyeshadow",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
		},
		{
			id: 3,
			code: "1111222203",
			brand: "MARY KAY",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
		},
		{
			id: 4,
			code: "1111222204",
			brand: "ESTEE LAUDER",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
		},
		{
			id: 5,
			code: "1111222205",
			brand: "ESTEE LAUDER",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
		},
		{
			id: 6,
			code: "1111222206",
			brand: "MARY KAY",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
		},
	]);

	return <AppContext.Provider value={{ recentScans, setRecentScans }}>{children}</AppContext.Provider>;
};
