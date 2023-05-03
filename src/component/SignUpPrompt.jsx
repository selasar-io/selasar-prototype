import { useState } from 'react';
import eyeOpen from '../asset/BsEye.svg';
import eyeClosed from '../asset/BsEyeSlash.svg';

export const SignUpPrompt = ({ title, placeholder, getter }) => {
	const [userInput, setInput] = useState('');
	getter(userInput);
	return (
		<section>
			<h2 className='text-selasar-black text-sm'>{title}</h2>
			<input
				className='outline-none transition-colors border-b-2 py-4 text-sm focus:border-selasar-primary w-[100%] placeholder-selasar-content/30 focus:placeholder-transparent'
				placeholder={placeholder}
				onChange={(e) => setInput(e.target.value)}
				value={userInput}
				required
				type='text'></input>
		</section>
	);
};

export const PasswordPrompt = ({ title, placeholder, getter }) => {
	const [userPassword, setUserPassword] = useState('');
	const [isHidden, setIsHidden] = useState(true);
	var source = '';
	var _type = '';

	if (isHidden) {
		source = eyeClosed;
		_type = 'password';
	} else {
		source = eyeOpen;
		_type = 'text';
	}

	getter(userPassword);
	return (
		<section>
			<h2 className='text-selasar-black text-sm'>{title}</h2>
			<div className='flex flex-row'>
				<input
					className='outline-none transition-colors border-b-2 py-4 text-sm focus:border-selasar-primary w-[100%] placeholder-selasar-content/30 focus:placeholder-transparent'
					placeholder={placeholder}
					onChange={(e) => setUserPassword(e.target.value)}
					value={userPassword}
					required
					type={_type}
				/>
				<button
					className='-ml-8'
					onClick={() => setIsHidden(!isHidden)}>
					<img src={source} />
				</button>
			</div>
		</section>
	);
};
