import firebase from '../../../config/firebase'
import fire from 'firebase'

export default function useGetMeetsOfOneDay({ setMeetsOfOneDay }) {
  const handlerShowMeetOfOneDay = (date) => {
    firebase
      .firestore()
      .collection('meets')
      .where(
        'initOfMeet',
        '>=',
        fire.firestore.Timestamp.fromDate(new Date(date.year(), date.month(), date.date(), 0, 0, 0))
      )
      .where(
        'initOfMeet',
        '<=',
        fire.firestore.Timestamp.fromDate(
          new Date(date.year(), date.month(), date.date(), 23, 59, 59)
        )
      )
      .onSnapshot((meets) => {
        const dataForRender = []
        meets.forEach((meet) => dataForRender.push({ uid: meet.id, ...meet.data() }))
        setMeetsOfOneDay(dataForRender)
      })
  }

  return handlerShowMeetOfOneDay
}
