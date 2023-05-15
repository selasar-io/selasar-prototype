import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import LandingLogo from 'src/component/LandingLogo'
import { PasswordPrompt, SignUpPrompt } from 'src/component/SignUpPrompt';

function SignIn() {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const isFirstTime = localStorage.getItem('selasar:isFirstTime') === 'true'
  if (!isFirstTime) {
    setTimeout(adminAlert, 2500)
    localStorage.setItem('selasar:isFirstTime', 'true')
  }

  function signInNow () {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('selasar:isLoggedIn', 'true')
      history.push('/')
    } else {
      adminAlert()
    }
  }

  function adminAlert () {
    alert('Masukkan username "admin" dan password "admin" untuk login')
  }

  return (
    <div className="landing-bg min-h-screen bg-selasar-black text-white">
      <div className='landing-gradient min-h-screen flex flex-col items-center px-4 py-14'>
        <LandingLogo />
        <div className='bg-white text-selasar-black space-y-7 w-full max-w-sm rounded-[10px] px-6 py-5'>
          <h2 className="text-xl font-medium text-center">Masuk</h2>
          <SignUpPrompt
            title={'Email/Username'}
            placeholder={'Masukkan email atau username-mu'}
            value={username}
            onChange={setUsername}
          />
          <PasswordPrompt
            title={'Kata Sandi'}
            placeholder={'Masukkan kata sandi'}
            value={password}
            onChange={setPassword}
          />
          <div className="space-y-2 text-center font-medium">
            <div className="p-3 bg-selasar-primary text-white rounded-[10px] cursor-pointer" onClick={signInNow}>Masuk</div>
            <div className="p-3 text-selasar-primary border border-selasar-primary rounded-[10px] cursor-pointer">Masuk dengan Google</div>
            <div className="p-3 text-selasar-primary rounded-[10px] cursor-pointer">Lupa Password?</div>
          </div>
        </div>
        <Link to="/signup" className="mt-10 px-8 py-3 rounded-[10px] text-center font-medium cursor-pointer">
          Buat Akun
        </Link>
      </div>
    </div>
  )
}

export default SignIn
