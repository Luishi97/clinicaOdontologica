import { useEffect } from 'react'
import firebase from '../../../config/firebase'
import fire from 'firebase'

export function useGetAccountsByMonth(dateSelected, setEvolutionsByMonuth) {
  let totalT = 0
  let pagoT = 0

  useEffect(() => {
    if (dateSelected)
      firebase
        .firestore()
        .collection('evolutions')
        .where(
          'createdAt',
          '>=',
          fire.firestore.Timestamp.fromDate(
            new Date(dateSelected.getFullYear(), dateSelected.getMonth(), 1, 0, 0, 0)
          )
        )
        .where(
          'createdAt',
          '<=',
          fire.firestore.Timestamp.fromDate(
            new Date(dateSelected.getFullYear(), dateSelected.getMonth() + 1, 0, 0, 0, 0)
          )
        )
        .get()
        .then((evolutions) => {
          const evoHist = []
          evolutions.forEach((evo) => {
            const evoData = evo.data()
            totalT += parseInt(evoData.total)
            pagoT += parseInt(evoData.pago)
            evoHist.push({ ...evoData, createdAt: evoData.createdAt.toDate() })
          })
          setEvolutionsByMonuth({ totalT, pagoT, evoHist })
        })
  }, [dateSelected])
}
