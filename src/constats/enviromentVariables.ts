const EnvironmentVariables = {
	REACT_APP_CLIENT_ID:
		process.env.REACT_APP_CLIENT_ID || '7cd5c77ea08b4785aedcec2fc23fa4bb',
	REACT_APP_REDIRECT_URI:
		process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000/home',
	API_URL: process.env.API_URL || 'http://localhost:3001',
};

export default EnvironmentVariables;
