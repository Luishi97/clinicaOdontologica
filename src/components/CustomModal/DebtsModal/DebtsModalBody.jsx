import { useContext } from 'react'
import { EvolutionHistory } from '../..'
import { ShowModalContext } from '../../../context/ShowModalContext'

export default function DebtsModalBody() {
  const {
    additionalHandlers: { userUid }
  } = useContext(ShowModalContext)

  return (
    <EvolutionHistory
      userUid={userUid}
      type="debts"
      emptyText="El paciente no tiene cuentas por pagar"
    />
  )
}
