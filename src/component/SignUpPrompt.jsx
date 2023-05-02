import { useState } from 'react';

export const SignUpPrompt = ({ title, placeholder, getter }) => {
	const [userInput, setInput] = useState('');
	getter(userInput);
	return (
		<section>
			<h2 className='text-selasar-black text-tiny'>{title}</h2>
			<input
				className='outline-none transition-colors border-b-2 py-4 text-sm focus:border-selasar-primary w-[100%] placeholder-selasar-content/30 focus:placeholder-transparent'
				placeholder={placeholder}
				onChange={(e) => setInput(e.target.value)}
				value={userInput}
				required></input>
		</section>
	);
};
