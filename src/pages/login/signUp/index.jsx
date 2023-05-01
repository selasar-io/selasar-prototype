function SignUp() {
	return (
		<>
			<section className='p-4'>
				<h1 className='text-lg font-semibold'>Buat Akun</h1>
				<section className='flex flex-col gap-10 mt-8'>
					<section className=''>
						<h2>Username</h2>
						<input
							className='outline-none border-b-2 focus:border-red-500 w-[100%] py-4'
							placeholder={'Buat username'}></input>
					</section>
					<section>
						<h2>Nama Lengkap</h2>
						<input
							className='outline-none border-b-2 focus:border-red-500 w-[100%] py-4'
							placeholder={
								'Nama sesuai yang tercantum di KTP'
							}></input>
					</section>
					<section>
						<h2>Email</h2>
						<input
							className='outline-none border-b-2 focus:border-red-500 w-[100%] py-4'
							placeholder={'Masukkan alamat email'}></input>
					</section>
					<section>
						<h2>Kata Sandi</h2>
						<input
							className='outline-none border-b-2 focus:border-red-500 w-[100%] py-4'
							placeholder={'Buat kata sandi'}></input>
					</section>
					<section>
						<h2>Konfirmasi Kata Sandi</h2>
						<input
							className='outline-none border-b-2 focus:border-red-500 w-[100%] py-4'
							placeholder={'Tulis ulang kata sandi'}></input>
					</section>
				</section>
				<h3 className='mt-6'>
					Dengan mendaftar, saya menyetujui{' '}
					<span className='text-red-500 font-semibold'>
						<a href='#'>Syarat & Ketentuan</a>
					</span>{' '}
					dan{' '}
					<span className='text-red-500 font-semibold'>
						<a href='#'>Kebijakan Privasi Selasar.io</a>
					</span>
				</h3>
				<section className='flex flex-col mt-12 gap-2'>
					<button
						type='submit'
						className='bg-red-500 text-white py-2 rounded-lg active:bg-red-600'>
						Buat Akun
					</button>
					<button className='bg-transparent text-red-500 py-2 rounded-lg active:bg-slate-200'>
						Kembali
					</button>
				</section>
			</section>
		</>
	);
}

export default SignUp;
