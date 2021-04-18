import { Calendar } from 'antd'
import { useContext } from 'react'
import { ShowModalContext } from '../../context/ShowModalContext.jsx'
import DateCellRender from './DateCellRender.js'
import PropTypes from 'prop-types'

import './MeetStyles.css'

export default function Meet({ selectedMont }) {
  const { additionalHandlers, handleIsModalVisible, handleChangeModalData } = useContext(
    ShowModalContext
  )
  const handleOnSelectDate = (date) => {
    handleChangeModalData({
      title: `${date.format('dddd')} - ${date.date()}/${date.month()}/${date.year()}`,
      date: date.toDate()
    })
    additionalHandlers.handlerShowMeetOfOneDay(date)
    additionalHandlers.setSelectedMont(date)
    handleIsModalVisible(true)
  }
  return (
    <Calendar
      dateFullCellRender={DateCellRender}
      onSelect={handleOnSelectDate}
      value={selectedMont}
    />
  )
}

Meet.propTypes = {
  selectedMont: PropTypes.object
}
