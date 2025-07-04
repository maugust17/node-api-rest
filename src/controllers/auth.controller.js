import { generateToken } from "../utils/token-generator.js";
import * as authService from '../services/auth.service.js';
import {validationResult} from 'express-validator'

export async function login(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    const user = await authService.getUserByEmail(email);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if (user.password === password) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.status(401).json({ message: "Invalid credentials" });
    }
}

export async function register(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    const existingUser = await authService.getUserByEmail(email);
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }
    const newUser = {
        email,
        password
    };
    await authService.createUser(newUser);
    res.status(201).json({ message: "User registered successfully" });
}