import firebase from '../../config/firebase'

export default function useFindEvolutionHistory(setEvolutionHistory, type) {
  const findEvo = (userUid) => {
    firebase
      .firestore()
      .collection('evolutions')
      .where('userUid', '==', userUid)
      .onSnapshot((evolutionHistory) => {
        const evoHist = []
        evolutionHistory.forEach((evo) => {
          const evoData = evo.data()
          const evoid = evo.id
          evoHist.push({ ...evoData, evoUid: evoid })
        })
        setEvolutionHistory(evoHist)
      })
  }

  const findEvoDebts = (userUid) => {
    firebase
      .firestore()
      .collection('evolutions')
      .where('userUid', '==', userUid)
      .where('isPayAll', '==', false)
      .onSnapshot((evolutionHistory) => {
        const evoHist = []
        evolutionHistory.forEach((evo) => {
          const evoData = evo.data()
          const evoid = evo.id
          evoHist.push({ ...evoData, evoUid: evoid })
        })
        setEvolutionHistory(evoHist)
      })
  }
  if (type === 'debts') return findEvoDebts
  else return findEvo
}
