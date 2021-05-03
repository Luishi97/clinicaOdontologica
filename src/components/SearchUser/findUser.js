import moment from 'moment'
import firebase from '../../config/firebase'

const fromArrayTimestampToDate = (generalData) => {
  generalData.registro = generalData.registro.map((reg) => ({
    ...reg,
    date: moment(reg.date.toDate())
  }))
  return generalData
}

export function findUser({ userName, setPatientsNames }) {
  if (userName === '') setPatientsNames([])
  else
    firebase
      .firestore()
      .collection('clients')
      .where('fullName', 'array-contains', userName.toUpperCase())
      .get()
      .then((patientFireData) => {
        const petientsNames = []
        patientFireData.forEach((patient) => {
          const patientData = patient.data()
          const uid = patient.id
          petientsNames.push({
            value: `${patientData.personalData.firstName} ${patientData.personalData.lastName} ${patientData.personalData.apMat}`.toUpperCase(),
            label: `${patientData.personalData.firstName} ${patientData.personalData.lastName} ${patientData.personalData.apMat}`.toUpperCase(),
            patientData: {
              ...patientData,
              generalData: fromArrayTimestampToDate(patientData.generalData),
              uid
            }
          })
        })
        setPatientsNames(petientsNames)
      })
      .catch((err) => {
        setPatientsNames([err])
      })
}
