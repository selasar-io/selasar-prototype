import { useState } from 'react';
import mailIcon from 'src/asset/mail.svg';

function Verification() {
  const [resendRemainingSec, setResendRemainingSec] = useState(29)

  return (
    <div className='min-h-screen flex flex-col items-center px-4 py-20 bg-selasar-primary text-white'>
      <div className='bg-white text-selasar-black w-full max-w-md rounded-[10px] px-12 py-6'>
        <div className="flex items-center justify-center bg-selasar-primary mx-auto w-14 h-14 rounded-full mb-7">
					<img src={mailIcon} />
        </div>
        <h2 className="text-xl font-medium text-center mb-7">Kami mengirim kode verifikasi</h2>
        <h4 className="text-sm text-selasar-content text-center mb-6">Segera periksa email anda dan masukkan 4 digit kode verifikasi</h4>
        <div className="flex space-x-2 justify-center">
          {[...Array(4).keys()].map((_, index) => (
            <input
              type="text"
              maxLength="1"
              onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g,'')}
              key={index}
              className='w-14 h-14 bg-selasar-gray text-2xl text-selasar-black font-medium rounded-[10px] !appearance-none'
            ></input>
          ))}
        </div>
      </div>
      <div className="text-sm text-white text-center mt-10">
        <div>Belum menerima kode verifikasi?</div>
        <div>Kirim ulang kode dalam <span className='font-semibold'>00:{resendRemainingSec}</span></div>
      </div>
      <div className="mt-6 px-8 py-3 rounded-[10px] text-center text-white/50 w-full max-w-md font-medium cursor-pointer">
        Kirim ulang code
      </div>
      <div className="mt-12 px-8 py-3 rounded-[10px] text-center bg-white text-selasar-primary w-full max-w-md font-medium cursor-pointer">
        Verifikasi
      </div>
    </div>
  )
}

export default Verification
