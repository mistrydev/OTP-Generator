let span = document.querySelector(".container span");

const otpGenerator = () => {
    let n = '1234567890';
    let OTP = "";

    for(let i=0; i<6; i++){
        OTP += Math.floor(Math.random()*10);
        span.innerHTML = OTP;
    }
    return OTP
}

