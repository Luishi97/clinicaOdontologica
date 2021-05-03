import { Avatar, Col, DatePicker, Row } from 'antd'
import { useState } from 'react'
import moment from 'moment'

import { Loader } from '../../components'
import { useGetAccountsByMonth } from './infrastructure/getAcountsByMonth'
import maleAvatar from '../../assets/images/svg/maleAvatar.svg'
import femaleAvatar from '../../assets/images/svg/femaleAvata.svg'
import './accounts.css'

export default function Accounts() {
  const [evolutionsByMonuth, setEvolutionsByMonuth] = useState()
  const [dateSelected, setDateSelected] = useState(new Date())

  useGetAccountsByMonth(dateSelected, setEvolutionsByMonuth)

  if (evolutionsByMonuth === undefined) return <Loader />
  if (evolutionsByMonuth === null) return <p>Ocurrio un error al obtener los datos</p>

  return (
    <div className="account-container">
      <Row className="account-date_header">
        <Col xs={{ span: 24 }} md={{ span: 8 }} className="account-date_picker-container">
          <DatePicker
            picker="month"
            value={moment(dateSelected)}
            onChange={(date) => date && setDateSelected(date.toDate())}
            className="account-date_picker"
          />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <p className="account-total">
            <span className="account-monto">{evolutionsByMonuth.totalT} Bs.</span> monto total
          </p>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 8 }}>
          <p className="account-pago">
            <span className="account-monto">{evolutionsByMonuth.pagoT} Bs.</span> monto pagado
          </p>
        </Col>
      </Row>
      <Row justify="space-around" className="account-headers">
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          Cliente
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          Pago
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }}>
          Precio total
        </Col>
      </Row>

      {evolutionsByMonuth.evoHist.map((item, index) => (
        <Row
          gutter={24}
          justify="space-around"
          key={index}
          className={`account-item ${item.isPayAll ? 'pay' : 'not_pay'}`}
        >
          <Col xs={{ span: 24 }} md={{ span: 4 }}>
            <Avatar
              src={item.userSex === 'male' ? maleAvatar : femaleAvatar}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }} style={{ textTransform: 'uppercase' }}>
            {item.userFullName}
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 6 }}>
            {item.pago} Bs.
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 6 }}>
            {item.total} Bs.
          </Col>
        </Row>
      ))}
    </div>
  )
}
