import { db } from '../database/data.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const authCollection = collection(db, 'auth');

const defaultUser = {
    email: "admin@example.com",
    password: "123456"
};

// Crear usuario default en la db
const createDefaultUser = async () => {
    const existingUser = await getUserByEmail(defaultUser.email);
    if (!existingUser) {
        await createUser(defaultUser);
    }
}

// Obtener todos los usuarios
export const getAllUsers = async () => {
    const snapshot = await getDocs(authCollection);
    const users = snapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
    }));
    return users;
}

// Obtener un usuario por email
export const getUserByEmail = async (email) => {
    const snapshot = await getDocs(authCollection);
    const user = snapshot.docs.find(doc => doc.data().email === email);
    return user ? { id: user.id, ...user.data() } : null;
}

// Crear un usuario
export const createUser = async (user) => {
    const docRef = await addDoc(authCollection, user);
    return { id: docRef.id, ...user };
}

// Borrar un usuario
export const deleteUser = async (id) => {
    const docRef = doc(authCollection, id);
    await deleteDoc(docRef);
}

//modificar un usuario
export const updateUser = async (id, user) => {
    const docRef = doc(authCollection, id);
    await updateDoc(docRef, user);
    return { id: docRef.id, ...user };
}

createDefaultUser();