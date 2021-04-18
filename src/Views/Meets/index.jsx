import { useContext, useState } from 'react'
import { Meet } from '../../components'
import ShowModalContext from '../../context/ShowModalContext'
import { useHandleForm } from '../../hooks'
import saveMeet from './infrastructure/saveMeet'
import { ShowNotificationContext } from '../../context/ShowNotificationContext'
import getMeetsOfOneDay from './infrastructure/getMeetsOfOneDay'
import deleteMeet from './infrastructure/deleteMeet'
import moment from 'moment'
import getMountMeets from './infrastructure/getMountMeets'

export default function Meets() {
  const { formData, handleForm } = useHandleForm({
    name: '',
    endOfMeet: new Date(),
    initOfMeet: new Date()
  })
  const [selectedMont, setSelectedMont] = useState(
    moment(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-05`)
  )
  const [meetsOfOneDay, setMeetsOfOneDay] = useState()
  const { openNotificationWithIcon } = useContext(ShowNotificationContext)
  const [isLoading, setIsLoading] = useState(false)
  const handleOnSave = saveMeet({ formData, openNotificationWithIcon, setIsLoading })

  const handlerShowMeetOfOneDay = getMeetsOfOneDay({ setMeetsOfOneDay })
  const handlerDeleteMeet = deleteMeet({ openNotificationWithIcon })
  const meetsOfMont = getMountMeets({ selectedMont })

  return (
    <ShowModalContext.Provider
      value={{
        isModalVisible: true,
        modalType: 0
      }}
      additionalHandlers={{
        isLoading,
        formData,
        meetsOfOneDay,
        handleMeetsOfDay: setMeetsOfOneDay,
        handleForm,
        handleOnSave,
        handlerShowMeetOfOneDay,
        handlerDeleteMeet,
        setSelectedMont,
        meetsOfMont
      }}
    >
      <Meet selectedMont={selectedMont} />
    </ShowModalContext.Provider>
  )
}
