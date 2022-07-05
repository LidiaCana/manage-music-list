import './_Login.style.scss';
import Cover from '../../assets/images/cover1.png';
import LinkButton from '../../components/buttons/LinkButton';

const Login: React.FC = () => {
	const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

	return (
		<div className="login-screen">
			<section className="login-container">
				<div className="col-left">
					<div className="welcome-message">
						<h3>Welcome</h3>
						<span>Login with spotify account</span>
						<LinkButton url={AUTH_URL}>Login</LinkButton>
					</div>
				</div>
			</section>
			<div className="login-image">
				<img src={Cover} alt="logo" />
			</div>
		</div>
	);
};
export default Login;
