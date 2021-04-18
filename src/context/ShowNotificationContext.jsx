import { createContext } from 'react'
import PropTypes from 'prop-types'
import { notification } from 'antd'

export const ShowNotificationContext = createContext()

const Provider = ({ children }) => {
  const openNotificationWithIcon = (notificationData, type) => {
    notification[type](notificationData)
  }

  const value = {
    openNotificationWithIcon
  }

  return (
    <ShowNotificationContext.Provider value={value}>{children}</ShowNotificationContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.node
}

export default {
  Provider,
  Consumer: ShowNotificationContext.Consumer
}
