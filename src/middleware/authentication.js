import jwt from "jsonwebtoken";
import "dotenv/config";

const secretKey = process.env.JWT_SECRET_KEY;
export const authenticateToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        jwt.verify(token, secretKey, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Forbidden" });
            }
            req.user = user;
            next();
        });
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }  
};