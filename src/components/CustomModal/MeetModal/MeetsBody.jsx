import { useContext } from 'react'
import MeetsHour from './MeetsHour'
import './MeetModal.css'
import CreateMeet from './CreateMeet'
import { ShowModalContext } from '../../../context/ShowModalContext'
import { Loader } from '../..'

const createHourFormat = (hour) => {
  let hourFormated = ''
  if (hour.getHours() < 10) hourFormated += '0' + hour.getHours()
  else hourFormated += hour.getHours()
  hourFormated += ':'
  if (hour.getMinutes() === 0) hourFormated += '00'
  else hourFormated += hour.getMinutes()
  return hourFormated
}

export default function MeetBody() {
  const { additionalHandlers } = useContext(ShowModalContext)
  const datafromfirebase = additionalHandlers.meetsOfOneDay
  const hours = () => {
    return datafromfirebase.map((cita) => {
      return {
        ...cita,
        hour:
          createHourFormat(cita.initOfMeet.toDate()) +
          ' - ' +
          createHourFormat(cita.endOfMeet.toDate())
      }
    })
  }
  return (
    <div className="modal-meet_body">
      <CreateMeet />
      {/*  Meet list of hours */}
      {!datafromfirebase ? (
        <Loader />
      ) : datafromfirebase.length === 0 ? (
        <div>Aun no tienes citas</div>
      ) : (
        <ul className="modal-meet_body-list">
          {hours().map((item, index) => (
            <MeetsHour
              key={index}
              {...item}
              handleDeleteMeet={additionalHandlers.handlerDeleteMeet}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
