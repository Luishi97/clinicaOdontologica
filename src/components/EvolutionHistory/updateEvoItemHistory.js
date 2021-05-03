import firebase from '../../config/firebase'

export default function updateEvoItemHistory({ evoUid, data, openNotificationWithIcon }) {
  const evoRef = firebase.firestore().collection('evolutions').doc(evoUid)
  evoRef
    .update(data)
    .then(() =>
      openNotificationWithIcon(
        {
          message: 'Se actualizó correctamente',
          description: 'Se actulizo correctamente el historial'
        },
        'success'
      )
    )
    .catch((err) => {
      openNotificationWithIcon(
        {
          message: 'Error al actualizar',
          description: 'No se pudo actulizar el historial ' + err
        },
        'success'
      )
    })
}
