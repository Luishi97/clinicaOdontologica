import { navigate } from '@reach/router'

import firebase from '../../../config/firebase'

export function handleRegister({ email, password, openNotificationWithIcon }) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      openNotificationWithIcon(
        {
          message: 'Bienvenida',
          description: 'Se inició sesión correctamente.'
        },
        'success'
      )
      navigate('citas')
    })
    .catch((err) => {
      openNotificationWithIcon(
        {
          message: 'Error al iniciar sesión',
          description: 'Hubo un error al inciar sesión ' + err
        },
        'error'
      )
    })
}

export function handleLogin({ email, password, openNotificationWithIcon }) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      openNotificationWithIcon(
        {
          message: 'Bienvenida',
          description: 'Se inició sesión correctamente.'
        },
        'success'
      )
    })
    .catch((err) => {
      openNotificationWithIcon(
        {
          message: 'Error al iniciar sesión',
          description: 'Hubo un error al inciar sesión ' + err
        },
        'error'
      )
    })
}
