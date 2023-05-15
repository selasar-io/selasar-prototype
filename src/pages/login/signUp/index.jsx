import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { PasswordPrompt, SignUpPrompt } from 'src/component/SignUpPrompt';

function SignUp() {
	const history = useHistory()
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
		<div className='max-w-xl mx-auto my-3'>
			<section className='p-4'>
				<h1 className='text-xl font-medium'>Buat Akun</h1>
				<section className='flex flex-col space-y-8 mt-8'>
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
					<PasswordPrompt
						title={'Kata Sandi'}
						placeholder={'Buat kata sandi'}
						getter={setPassword}
					/>
					<PasswordPrompt
						title={'Konfirmasi Kata Sandi'}
						placeholder={'Tulis ulang kata sandi'}
						getter={setConfirmPassword}
					/>
				</section>
				<h3 className='mt-6 text-sm text-selasar-content'>
					Dengan mendaftar, saya menyetujui{' '}
					<span className='text-selasar-primary font-semibold'>
						<a href='javascript:void(0)'>Syarat & Ketentuan</a>
					</span>{' '}
					dan{' '}
					<span className='text-selasar-primary font-semibold'>
						<a href='javascript:void(0)'>Kebijakan Privasi Selasar.io</a>
					</span>
				</h3>
				<section className='flex flex-col mt-10 space-y-2'>
					<button
						type='submit'
						className='bg-selasar-primary text-md font-semibold text-white px-8 py-3 rounded-lg active:bg-primary/60'
						onClick={() => {
							// setUsername('');
							// setUserEmail('');
							// setNamaLengkap('');
							// setPassword('');
							history.push('/verification')
						}}>
						Daftar
					</button>
					<Link to='/signin' className='inline w-full justify-center'>
						<button className='w-full bg-transparent text-md font-semibold text-selasar-primary px-8 py-3 rounded-lg active:bg-selasar-content/10'>
							Kembali
						</button>
					</Link>
				</section>
			</section>
		</div>
	);
}

export default SignUp;
