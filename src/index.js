import React from 'react'
import ReactDOM from 'react-dom'
import esES from 'antd/lib/locale/es_ES'
import { ConfigProvider } from 'antd'
import moment from 'moment'
import 'moment/locale/es-mx'

import App from './App'
import ShowNotificationContext from './context/ShowNotificationContext'
moment.locale('es')

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={esES}>
      <ShowNotificationContext.Provider value={{}}>
        <App />
      </ShowNotificationContext.Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
