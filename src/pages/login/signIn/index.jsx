import './index.css'

function SignIn() {
    return (
      <div className="landing-bg min-h-screen bg-selasar-black text-white">
        <div className='landing-gradient min-h-screen flex flex-col items-center px-4 py-14'>
          <div className='flex flex-col items-center mb-8'>
            <div className='mb-4'>
              <img src="/src/asset/logo-white.svg" alt="Logo Selasar.io" />
            </div>
            <h1 className="text-4xl font-medium">Selasar.io</h1>
          </div>
          <div className='bg-white text-selasar-black space-y-7 w-full max-w-sm rounded-[10px] px-6 py-5'>
            <h2 className="text-xl font-medium text-center">Masuk</h2>
            <div className='flex flex-col !mb-9'>
              <label htmlFor="username" className="text-selasar-content text-sm">Email/Username</label>
              <input 
                type="text" 
                id="username" 
                className="py-3 border-b border-selasar-content focus:border-selasar-primary outline-none"
                placeholder='Masukkan email atau username-mu' 
              />
            </div>
            <div className='flex flex-col !mb-9'>
              <label htmlFor="username" className="text-selasar-content text-sm">Kata Sandi</label>
              <input 
                type="password" 
                id="password" 
                className="py-3 border-b border-selasar-content focus:border-selasar-primary outline-none"
                placeholder='Masukkan kata sandi' 
              />
            </div>
            <div className="space-y-2 text-center font-medium">
              <div className="p-3 bg-selasar-primary text-white rounded-[10px] cursor-pointer">Masuk</div>
              <div className="p-3 text-selasar-primary border border-selasar-primary rounded-[10px] cursor-pointer">Masuk dengan Google</div>
              <div className="p-3 text-selasar-primary rounded-[10px] cursor-pointer">Lupa Password?</div>
            </div>
          </div>
          <div className="mt-10 text-center font-medium cursor-pointer">Buat Akun</div>
        </div>
      </div>
    )
  }
  
  export default SignIn
  