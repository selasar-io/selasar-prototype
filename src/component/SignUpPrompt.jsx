import { useState } from 'react';
import eyeOpen from '../asset/BsEye.svg';
import eyeClosed from '../asset/BsEyeSlash.svg';

export const SignUpPrompt = ({ title, placeholder, value, onChange }) => {
	return (
		<section>
			<h2 className='text-selasar-black text-tiny'>{title}</h2>
			<input
				className='outline-none transition-colors border-b-2 py-4 text-sm focus:border-selasar-primary w-[100%] placeholder-selasar-content/30 focus:placeholder-transparent'
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
				value={value}
				required
				type='text'></input>
		</section>
	);
};

export const PasswordPrompt = ({ title, placeholder, value, onChange }) => {
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

	return (
		<section>
			<h2 className='text-selasar-black text-tiny'>{title}</h2>
			<div className='flex flex-row'>
				<input
					className='outline-none transition-colors border-b-2 py-4 text-sm focus:border-selasar-primary w-[100%] placeholder-selasar-content/30 focus:placeholder-transparent'
					placeholder={placeholder}
					onChange={(e) => onChange(e.target.value)}
					value={value}
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
