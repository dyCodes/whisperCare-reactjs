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
			code: "1111222201",
			brand: "MARY KAY",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
		},
		{
			id: 4,
			brand: "ESTEE LAUDER",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
			code: "1111222235",
		},
		{
			id: 5,
			brand: "ESTEE LAUDER",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/estee_lauder.png",
			code: "1111222236",
		},
		{
			id: 6,
			brand: "MARY KAY",
			name: "Sunscreen broad SPF 15",
			img: process.env.PUBLIC_URL + "/assets/mary_kay.png",
			code: "1111222237",
		},
	]);

	return <AppContext.Provider value={{ recentScans, setRecentScans }}>{children}</AppContext.Provider>;
};
