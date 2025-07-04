import { db } from '../database/data.js';
import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

const productsCollection = collection(db, 'products');

// Obtener todos los productos
export const getAllProducts = async(params) => {

    //Obtener los url params name, category, price

    //recorrer los elemtnos de params y crear un array de condiciones
    const conditions = [];
    for (const [key, value] of Object.entries(params)) {
        console.log(`key: ${key}, value: ${value}`);
        conditions.push(where(key, '==', value));
    }
    console.log(conditions);
    const q = query(productsCollection, ...conditions);

    const snapshot = await getDocs(q);
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
    try {
        await updateDoc(docRef, product);
    }
    catch (error) {
        console.error("Error updating product: ", error);
        return null;
    }
    return { id: docRef.id, ...product };
}