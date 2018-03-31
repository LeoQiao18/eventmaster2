module.exports = (req, res, next) => {
    if (!req.user) {
        return res.send("You must authenticated!");
    } else if (!req.user.isAdmin) {
        return res.send("You must be an administrator!");
    }
    next();
};
