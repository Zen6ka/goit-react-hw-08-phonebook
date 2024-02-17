import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme';

import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
				<ThemeProvider theme={theme}>
					<App />
						</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
