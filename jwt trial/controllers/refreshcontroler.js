const jwt = require('jsonwebtoken');

const refresh = (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.refresh_token) return res.status(401).json({ message: 'No refresh token provided' });
    const refreshtoken = cookies.refresh_token;

    jwt.verify(refreshtoken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Invalid refresh token' });
        const acesstoken = jwt.sign({ username: decoded.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token: acesstoken });
    });
};

module.exports = refresh;
