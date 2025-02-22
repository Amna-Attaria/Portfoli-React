import { db, collection, addDoc } from "../firebase"; // Corrected import

import { serverTimestamp } from "firebase/firestore";

const addUser = async () => {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim().toLowerCase();
    let message = document.getElementById("message").value.trim().toLowerCase();

    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return;
    }

    try {
        // Add the post to Firestore
        const docRef = await addDoc(collection(db, "Users"), {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: serverTimestamp() // Corrected field name
        });

        console.log("Document written with ID:", docRef.id);
        alert("Message Send successfully!");
    } catch (error) {
        console.error("Error adding post:", error);
        alert("Failed to add post. Please try again.");
    }
};

// Ensure DOM is fully loaded before adding event listener
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitform").addEventListener("click", addUser);
});