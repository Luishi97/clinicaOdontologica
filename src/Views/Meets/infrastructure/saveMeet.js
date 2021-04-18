import firebase from '../../../config/firebase'

export default function saveMeet({ formData, openNotificationWithIcon, setIsLoading }) {
  const handleOnSave = () => {
    setIsLoading(true)
    firebase
      .firestore()
      .collection('meets')
      .add({ ...formData, createdAt: new Date(), status: false, userId: '1' })
      .then(() =>
        openNotificationWithIcon(
          {
            message: 'Registro exitoso',
            description: 'Se reistró con exito al paciente ' + formData.name
          },
          'success'
        )
      )
      .catch((err) =>
        openNotificationWithIcon(
          {
            message: 'Error al registrar',
            description: 'Se produjo un error ' + err
          },
          'error'
        )
      )
      .finally(() => setIsLoading(false))
  }

  return handleOnSave
}
