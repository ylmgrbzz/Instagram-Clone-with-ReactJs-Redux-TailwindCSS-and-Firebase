import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "./utils";

const firebaseConfig = {
    apiKey: "AIzaSyAIKFVKcqxRpyJtqAMbNEklTHOCWhhBo98",
    authDomain: "instagram-f169b.firebaseapp.com",
    projectId: "instagram-f169b",
    storageBucket: "instagram-f169b.appspot.com",
    messagingSenderId: "683232795331",
    appId: "1:683232795331:web:cd57cdb99f4f418e926076"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

onAuthStateChanged(auth, user => {
    userHandle(user || false)
})

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        console.log(response.user, response.password)
    } catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
    } catch (err) {
        toast.error(err.code)
    }
}