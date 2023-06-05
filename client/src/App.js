import React, { useMemo } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Routers";
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const router = createBrowserRouter([
  { path: "*", Component: Root },
]);

function App() {
  const tema = 'dark';

  const themeConfig = useMemo(() => createTheme({
		palette: {
			mode: tema,
			primary: {
				main: '#c6d8f7',
			},
			secondary: {
				main: '#3d507a',
			},
			background: {
				default: tema === 'light' ? '#efefef' : '#1e2842',
				paper: tema === 'light' ? '#fff' : '#15171c'
			}
		},
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          }
        }
      }
    }
	}), [tema]);

  return (
    <>
      <ThemeProvider theme={themeConfig}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
};

export default App;
