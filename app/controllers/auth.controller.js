import User from '../models/User'

export const signUp = async (req, res) => {
    res.json('signup')
}

export const signIn = async (req, res) => {
    res.json('signIn')
}

export const currentUser = async (req, res) => {
    
    const user = jwt.decode(req.body.token);
    
    res.status(200).json(user)
}