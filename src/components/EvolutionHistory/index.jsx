import { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { Loader } from '..'
import useFindEvolutionHistory from './useFindEvolutionHistory'
import EvolutionItem from './EvolutionItem'
import { ShowNotificationContext } from '../../context/ShowNotificationContext'
import updateEvoItemHistory from './updateEvoItemHistory'

function isPay(evo, valuesOfUpdate) {
  let total = 0
  let pago = 0

  if (valuesOfUpdate.total) total = valuesOfUpdate.total
  else total = evo.total

  if (valuesOfUpdate.pago) pago = valuesOfUpdate.pago
  else pago = evo.pago

  console.log(total, pago)
  return total === pago
}

export default function EvolutionHistory({ userUid, type, emptyText }) {
  const { openNotificationWithIcon } = useContext(ShowNotificationContext)
  const [evolutionHistory, setEvolutionHistory] = useState()
  const [valuesOfUpdate, setValuesOfUpdate] = useState()

  const findEvo = useFindEvolutionHistory(setEvolutionHistory, type)
  useEffect(() => {
    if (userUid) findEvo(userUid)
  }, [userUid])

  if (evolutionHistory === undefined) return <Loader />

  if (evolutionHistory === null) return <p>Error al obtener los datos</p>

  return (
    <div className="evolution_history">
      {evolutionHistory.length === 0 ? (
        <p className="evolution_history-emptyText">{emptyText}</p>
      ) : (
        evolutionHistory.map((evo, index) => (
          <EvolutionItem
            {...evo}
            handlefinish={(evoUid) => {
              updateEvoItemHistory({
                evoUid,
                data: { ...valuesOfUpdate, isPayAll: isPay(evo, valuesOfUpdate) },
                openNotificationWithIcon
              })
              console.log(evoUid)
            }}
            handleForm={setValuesOfUpdate}
            valuesOfUpdate={valuesOfUpdate}
            key={index}
          />
        ))
      )}
    </div>
  )
}

EvolutionHistory.propTypes = {
  userUid: PropTypes.string,
  type: PropTypes.string,
  emptyText: PropTypes.string
}
