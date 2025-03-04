import { use, useState } from "react"

const OTP = () =>{
    const [otp, setOtp] = useState('');
    const handleOtp = () =>{
        const newOtp = Math.floor(1000 + (Math.random()*9000))
        setOtp(newOtp);
    }
    return<>
    <h1>OTP Generator</h1>
    <div className="container">
    <h1>Your OTP is : {otp}</h1>
    <button onClick={handleOtp}>Generate Otp</button>
    </div>
    </>
}

export default OTP;