import { useEffect, useState } from 'react'
import firebase from '../../../config/firebase'
import fire from 'firebase'

export default function useGetMountMeets({ selectedMont }) {
  const [meetsOfMont, setMeetsOfMont] = useState()
  useEffect(() => {
    firebase
      .firestore()
      .collection('meets')
      .where(
        'initOfMeet',
        '>=',
        fire.firestore.Timestamp.fromDate(
          new Date(selectedMont.year(), selectedMont.month(), 1, 0, 0, 0)
        )
      )
      .where(
        'initOfMeet',
        '<=',
        fire.firestore.Timestamp.fromDate(
          new Date(selectedMont.year(), selectedMont.month() + 1, 0, 0, 0, 0)
        )
      )
      .onSnapshot((meets) => {
        const dataForRender = []
        meets.forEach((meet) => dataForRender.push({ uid: meet.id, ...meet.data() }))
        setMeetsOfMont(dataForRender)
      })
  }, [selectedMont.year(), selectedMont.month()])

  return meetsOfMont
}
