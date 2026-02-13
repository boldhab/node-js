function checksubscription(req, res, next) {
    // Read user info from app locals for demo flow
    const user = req.app.locals.user;
    if (user && user.subscription === "active") {
        next(); // User is subscribed, proceed to the next middleware/route handler
    } else {
        res.status(403).send("<h2>Subscription Required</h2><a href='/login.html'>Login to Subscribe</a>");
    }
}

module.exports = checksubscription;