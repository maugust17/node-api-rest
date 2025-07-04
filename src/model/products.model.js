import { db } from '../database/data.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Obtener todos los productos
export const getAllProducts = async() => {
    const snapshot = await getDocs(productsCollection);
    const products = snapshot.docs.map(doc => ({
        id: doc.id, ...doc.data()
    }));
    return products;
}

//Obtener un producto por id
export const getProductById = async(id) => {
    const docRef = doc(productsCollection, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
}

//Crear un producto
export const createProduct = async(product) => {
    const docRef = await addDoc(productsCollection, product);
    return docRef.id;
}

//Borrar un producto
export const deleteProduct = async(id) => {
    const docRef = doc(productsCollection, id);
    await deleteDoc(docRef);
}

// Actualizar un producto
export const updateProduct = async(id, product) => {
    const docRef = doc(productsCollection, id);
    await updateDoc(docRef, product);
    return { id: docRef.id, ...product };
}