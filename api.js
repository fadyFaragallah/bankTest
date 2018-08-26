import * as firebase from "firebase"
// Initialize Firebase
export  var config = {
    apiKey: "AIzaSyBJmB72yHSK5mXC9rFM8oMMFp1ZcoPI_c0",
    authDomain: "banktest-c1451.firebaseapp.com",
    databaseURL: "https://banktest-c1451.firebaseio.com",
    projectId: "banktest-c1451",
  };

firebase.initializeApp(config);

export const signup = async(email, pass)=> {

    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error.toString())
    }

}

export const login= async(email, pass)=> {
    
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);

        console.log("Logged In!");

        // Navigate to the Home page

    } catch (error) {
        console.log(error.toString())
    }

}

export const logout=async()=> {

    try {

        await firebase.auth().signOut();
        console.log("bye!");

    } catch (error) {
        console.log(error);
    }

}

export let email='';
export let uid='';
firebase.auth().onAuthStateChanged(async(user)=> {
    try{
          if (user) {
            // User is signed in.
             email = user.email;
             uid = user.uid;
            // ...
          } else {
            // User is signed out.
            // ...
          }
      }catch(err){console.log(err)}
});



// Get a reference to the database service
var database = firebase.database();
// save the user's profile into Firebase so we can list users,
// use them in Security and Firebase Rules, and show profiles
export const writeUserData = async(userId, name, email)=> {
    try{
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
      });
    }catch(err){
        console.log(err)
        console.log("can't write")
    }
}