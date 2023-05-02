import { useState } from 'react';
import { SignUpPrompt } from '../../../component/SignUpPrompt';

function SignUp() {
	const [username, setUsername] = useState('');
	const [namaLengkap, setNamaLengkap] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [userPassword, setPassword] = useState('');
	const [userConfirmPassword, setConfirmPassword] = useState('');
	const data = {
		UName: username,
		NamaLengkap: namaLengkap,
		Email: userEmail,
		Password: userPassword,
	};
	return (
		<>
			<section className='p-4'>
				<h1 className='text-lg font-semibold'>Buat Akun</h1>
				<section className='flex flex-col gap-10 mt-8'>
					<SignUpPrompt
						title={'Username'}
						placeholder={'Buat username'}
						getter={setUsername}
					/>
					<SignUpPrompt
						title={'Nama Lengkap'}
						placeholder={'Nama sesuai yang tercantum di KTP'}
						getter={setNamaLengkap}
					/>
					<SignUpPrompt
						title={'Email'}
						placeholder={'Masukkan alamat email'}
						getter={setUserEmail}
					/>
					<SignUpPrompt
						title={'Kata Sandi'}
						placeholder={'Buat kata sandi'}
						getter={setPassword}
					/>
					<SignUpPrompt
						title={'Konfirmasi Kata Sandi'}
						placeholder={'Tulis ulang kata sandi'}
						getter={setConfirmPassword}
					/>
				</section>
				<h3 className='mt-6 text-sm text-selasar-content'>
					Dengan mendaftar, saya menyetujui{' '}
					<span className='text-selasar-primary font-semibold'>
						<a href='#'>Syarat & Ketentuan</a>
					</span>{' '}
					dan{' '}
					<span className='text-selasar-primary font-semibold'>
						<a href='#'>Kebijakan Privasi Selasar.io</a>
					</span>
				</h3>
				<section className='flex flex-col mt-12 gap-2 mb-24'>
					<button
						type='submit'
						className='bg-selasar-primary text-md font-semibold text-white py-2 rounded-lg active:bg-primary/60'
						onClick={() => {
							console.log(data);
							setUsername('');
							setUserEmail('');
							setNamaLengkap('');
							setPassword('');
						}}>
						Buat Akun
					</button>
					<button className='bg-transparent text-md font-semibold text-selasar-primary py-2 rounded-lg active:bg-selasar-content/10'>
						Kembali
					</button>
				</section>
			</section>
		</>
	);
}

export default SignUp;
