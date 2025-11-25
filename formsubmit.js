import {firestore} from './main.js';
import {addDoc, collection} 
from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";


const form = document.getElementById('contact-form');

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData =new FormData(form);

    const data = Object.fromEntries(formData);

    try {
        await addDoc(collection(firestore, 'contacts'), data);
        alert("Form submitted successfully!");
        form.reset();
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Error submitting form. Please try again.");
    }
}); 
