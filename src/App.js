import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import "./main.css";
import Home from "./pages/Home";

function App() {
	const theme = createTheme({
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

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />

			<Home />
		</ThemeProvider>
	);
}

export default App;
