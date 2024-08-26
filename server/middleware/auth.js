export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");

        if (!token) {
            return res.status(403).send("Access Denied");
        } else {
            if (token.startsWith("Bearer")) {
                token = token.slice(7, token.length).trimLeft();
            }

            const verified = jwt.verify(token, process.env.JWT_SECRET);
            req.user = verified;

            // Optional: Check user role
            if (req.user.role && req.user.role !== 'admin') {
                return res.status(403).send("Access Denied");
            }

            next();
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
