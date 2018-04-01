module.exports = (req, res, next) => {
    if (!req.user) {
        return res.state(403).send("You must authenticated!");
    } else if (!req.user.isAdmin) {
        return res.state(403).send("You must be an administrator!");
    }
    next();
};
