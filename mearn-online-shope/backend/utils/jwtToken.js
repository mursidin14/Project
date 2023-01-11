// created token and saving in cookie
const sendToken = (uesr, statusCode, res) => {
    const token = user.getJWTtoken
    // option for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 100
        ),
        httpOnly: true
    };

    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        uesr,
        token
    })
}

module.exports = sendToken