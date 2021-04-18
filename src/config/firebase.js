import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCzujWgS2OvnxzFfFV1oI_tvVhqP-dvG0o',
  authDomain: 'dentalgui.firebaseapp.com',
  projectId: 'dentalgui',
  storageBucket: 'dentalgui.appspot.com',
  messagingSenderId: '726988078456',
  appId: '1:726988078456:web:9c6b6ddea70728123f9c8d'
}
const App = firebase.default.initializeApp(firebaseConfig)

export const firestore = App.firestore()

export default App
