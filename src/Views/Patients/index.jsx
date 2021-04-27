import { Col, Row } from 'antd'
import AddUserSVG from '../../assets/images/svg/addUser.svg'
import PeopleSearchSVG from '../../assets/images/svg/propleSearch.svg'
import Cards from '../../components/Cards'
import './Patients.css'

export default function Patients() {
  return (
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
  )
}
