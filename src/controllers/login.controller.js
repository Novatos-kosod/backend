import User from '../models/User.js';

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
   
    if (user.password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    } else {
        let userFound = {
            _id: user._id,
            name: user.name,
            role: user.role,
            email: user.email,
        };
        res.status(200).json(userFound);
    }
}
