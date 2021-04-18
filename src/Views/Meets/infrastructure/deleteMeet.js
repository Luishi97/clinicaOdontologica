import firebase from '../../../config/firebase'

export default function deleteMeet({ openNotificationWithIcon }) {
  const handlerDeleteMeet = (idMeet) => {
    firebase
      .firestore()
      .collection('meets')
      .doc(idMeet)
      .delete()
      .then(() =>
        openNotificationWithIcon(
          {
            message: 'Cita eliminada',
            description: 'Se eliminó correctamente la cita'
          },
          'success'
        )
      )
      .catch((err) =>
        openNotificationWithIcon(
          {
            message: 'Error al eliminar',
            description: 'No se pudo eliminar la cita ' + err
          },
          'error'
        )
      )
  }
  return handlerDeleteMeet
}
