import { Col, Row } from 'antd'
import AddUserSVG from '../../assets/images/svg/addUser.svg'
import PeopleSearchSVG from '../../assets/images/svg/propleSearch.svg'
import Cards from '../../components/Cards'
import { ShowModalContext } from '../../context/ShowModalContext'
import './Patients.css'

export default function Patients() {
  return (
    <ShowModalContext.Provider
      value={{
        isModalVisible: true,
        modalType: 0
      }}
      additionalHandlers={{}}
    >
      <Row justify="space-around" align="middle" style={{ height: '35rem' }}>
        <Col>
          <Cards
            title="Agregar"
            description="Agregar nuevo paciente"
            image={AddUserSVG}
            to="agregarPaciente"
          />
        </Col>
        <Col>
          <Cards
            title="Buscar"
            description="Buscar paciente existente"
            image={PeopleSearchSVG}
            to="buscarPaciente"
          />
        </Col>
      </Row>
    </ShowModalContext.Provider>
  )
}
