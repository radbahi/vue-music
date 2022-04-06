// firebase/app is the core module for firebase. we don't need to import every feature
import firebase from "firebase/app";
import "firebase/auth";
// firestore lets us store additional info about a user. auth only stores email/password
import "firebase/firestore";

// vue requires VUE_APP_ be in front of all environment variables
const firebaseConfig = {
	apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
	authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
	appId: process.env.VUE_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
