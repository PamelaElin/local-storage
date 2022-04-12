import React from 'react'
import './Home.css';
import { useState } from 'react';
import Profile from '../Profile/Profile';

const Home = () => {
  const [inputText, setInputText] = useState('');
	const [savedData, setSavedData] = useState(false);

	const handleInputChange = (e) => {
		const text = e.target.value;
		setInputText(text);

		if (text === '') {
			setSavedData(false);
		}
	};

	const saveData = () => {
		localStorage.setItem('name', inputText);
		setSavedData(true);
	};

	return (
		<div className='container '>
			<div className='title'>
				<label >Local Storage</label>
			</div>
			<div className='  divInput'>
				<input
					className='input '
					onChange={handleInputChange}
					placeholder='Ingresa tu nombre'
				/>
				<button className='button ' onClick={saveData}>
					Guardar
				</button>
			</div>

			{!!savedData && <Profile />}
		</div>
	);
};

export default Home 