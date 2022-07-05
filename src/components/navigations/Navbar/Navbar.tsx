import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/appState';
import Path from '../../../routes/paths';
import { Logout } from '../../../store/actions/auth.actions';
import Avatar from '../../avatar/Avatar';
import Button from '../../buttons/Button';
import TextInput from '../../inputs/TextInput';
import './_Navbar.style.scss';

export interface Props {}
const Navbar = (): JSX.Element => {
	const user = useAppSelector((state) => state.auth.userToken?.user);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const handleOnLogout = () => {
		dispatch(Logout());
		navigate(Path.LOGIN);
	};
	return (
		<header data-testid="navbar" className="navbar">
			<div className="flex-1 profile">
				<Avatar alt={user?.name ? user?.name : ''} />
				<h3>{user?.name}</h3>
			</div>

			<nav className="flex-1 navigation-tabs">
				<a href="/">Dashboard</a>
				<a href="/">My Library</a>
			</nav>
			<div className="flex-1 actions-container">
				<TextInput
					value=""
					onChange={(e) => {
						console.log(e);
					}}
				/>
				<Button onClick={handleOnLogout}>Logout</Button>
			</div>
		</header>
	);
};

export default Navbar;
