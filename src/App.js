import { lazy, Suspense, useEffect, useState } from 'react'
import { Loader } from './components'
import firebase from './config/firebase'
import './styles/App.css'
import 'antd/dist/antd.css'

function App() {
  const [userData, setUserData] = useState()
  const Main = lazy(
    () =>
      new Promise((resolve) => {
        setTimeout(() => resolve(import('./layouts/MainLayout')), 300)
      })
  )

  useEffect(() => {
    const isAuth = async () => {
      const user = await firebase.auth().onAuthStateChanged()
      if (user) setUserData(user)
      else setUserData(null)
    }

    if (!userData) isAuth()
  }, [userData])

  console.log(userData)

  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  )
}

export default App
