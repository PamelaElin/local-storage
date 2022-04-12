import { useEffect, useState } from "react"

const Profile = () => {
	const [name, setName] = useState('');

	const getData = () => {
		return localStorage.getItem('name');
	};

	useEffect(() => {
		setName(getData());
	}, []);

	return (
		<div >
			<h2>Hola {name}</h2>
		</div>
	);
};
export default Profile