import "./main.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Review from "./pages/Review";
import Settings from "./pages/Settings";

function App() {
	const theme = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "#9747ff",
			},
			secondary: {
				main: "#c46fc6",
			},
		},
		typography: {
			fontFamily: "Poppins, sans-serif",
		},
		components: {
			MuiCssBaseline: {
				styleOverrides: `
					@font-face {
						font-family: 'Poppins, sans-serif';
						font-style: normal;
						font-display: swap;
						font-weight: 400;
					}
				`,
			},
		},
	});

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			errorElement: <ErrorPage />,
		},
		{
			path: "review",
			element: <Review />,
		},
		{
			path: "settings",
			element: <Settings />,
		},
	]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
