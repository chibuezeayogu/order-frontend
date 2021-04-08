import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config'

class FirebaseAuthService {

  constructor() {
    this.firebase = firebase.initializeApp(firebaseConfig)
  }

  signInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await this
        .firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
      return [null, userCredential]
    } catch (error) {
      return [error, null]
    }
  }

  signOut = async () => {
    try {
      await this
        .firebase
        .auth()
        .signOut()
      
      return [null]
    } catch (error) {
      return [error]
    }
  }

  onAuthStateChanged = async() => this.firebase.auth().onAuthStateChanged;
  auth = () => this.firebase.auth();
}

export default new FirebaseAuthService()
