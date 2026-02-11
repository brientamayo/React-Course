import {useState} from 'react'

const Profile = () => {
	const [profile, setProfile] = useState({
		name: '',
		age: ''
	});
	
	const handleChange = (e) => {
		setProfile({
			...profile, [e.target.name]: e.target.value
		});
	}

	return (
		<div>
			<h1>My Profile</h1>
			<p>Name: {profile.name}</p>
			<p>Age: {profile.age}</p>
			<input
				className='border rounded-md p-2'
				type='text'
				placeholder='Enter your name'
				name='name'
				value={profile.name}
				onChange={handleChange}
			/>
			<input
				className='border rounded-md p-2'
				type='number'
				placeholder='Enter your age'
				name='age'
				value={profile.age}
				onChange={handleChange}
			/>
			
		</div>
	)
}

export default Profile;