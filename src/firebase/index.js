import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from './config'

const auth = firebase.initializeApp(firebaseConfig).auth();

class FirebaseAuthService {

  constructor(auth) {
    this.auth = auth
  }

  signInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await this
        .auth
        .signInWithEmailAndPassword(email, password)
      return [null, userCredential]
    } catch (error) {
      return [error, null]
    }
  }

  signOut = async () => {
    try {
      await this
        .auth
        .signOut()
      
      return [null]
    } catch (error) {
      return [error]
    }
  }
}

export default new FirebaseAuthService(auth)
