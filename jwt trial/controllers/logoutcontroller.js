const logout = (req, res) => {
    res.clearCookie('refresh_token', { httpOnly: true, secure: false, sameSite: 'lax' });
    res.json({ message: 'Logged out successfully' });
};

module.exports = logout;
