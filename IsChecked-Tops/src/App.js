import './App.css';
import { useDispatch } from 'react-redux';
import { ageCheck, cityCheck } from './redux/actions/action';
import { useState } from 'react';

function App() {
	const dispatch = useDispatch();
	const [city,setcity]=useState(false)
	const [age,setage]=useState(false)

	const handleCityChange = (e) => {
		setcity(!city)
		dispatch(cityCheck(!city));
	};
	const handleAgeChange = (e) => {
		setage(!age)
		dispatch(ageCheck(!age));
	};
	

	return (
		<>
			<h1>Assessment of Tops Technology</h1>
			<div className="text-center d-flex justify-content-center">
				<form className="w-25 ">
					<label htmlFor="check">
						Are You a Citizen: {city === true ? 'Yes' : 'No'}
					</label>
					<br />
					<input
						type="checkbox"
						name="check"
						id="check"
						onClick={handleCityChange}
						checked={city}
					/>
					<br />
					<br />
					<br />
					<label htmlFor="age">
						Your Age Is 21: {age === true ? '21' : '20'}
					</label>
					<br />
					<input
						type="checkbox"
						name="age"
						id="age"
						onClick={handleAgeChange}
						checked={age}
					/>
				</form>
			</div>
		</>
	);
}

export default App;
