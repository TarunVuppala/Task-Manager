function auth(req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        res.status(401).json({ err: "unauthorized", success: false });
    }
}

module.exports = auth;
