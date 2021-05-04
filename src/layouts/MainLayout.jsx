import { Button, Layout, Menu } from 'antd'
import { FcConferenceCall, FcPlanner, FcViewDetails, FcMoneyTransfer } from 'react-icons/fc'
import { Link } from '@reach/router'

import firebase from '../config/firebase'
import Routes from '../Routes'
import './MainLayoutStyles.css'
import { useContext } from 'react'
import { ShowTopMenuContext } from '../context/ShowTopMenuContext'

const { Header, Content, Sider } = Layout

export default function MainLayout() {
  const { isVisible, handlerShowClinic, handlerShowDebts, handlerShowPrescription } = useContext(
    ShowTopMenuContext
  )
  return (
    <Layout className="layout">
      <Sider breakpoint="lg" collapsedWidth="0" id="components-layout-demo-responsive">
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
          <Menu.Item key="1" icon={<FcConferenceCall />} className="menu-item">
            <Link to="pacientes">Pacientes</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FcPlanner />} className="menu-item">
            <Link to="citas">Citas</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FcViewDetails />} className="menu-item">
            <Link to="orden">Orden</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<FcMoneyTransfer />} className="menu-item">
            <Link to="cuentas">Cuentas</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="site-layout-sub-header-background">
          {isVisible && (
            <div className="site-layout-sub-header-background-menu">
              <Button
                type="primary"
                className="site-layout-sub-header-background-menu-item"
                size="large"
                onClick={handlerShowDebts}
              >
                Deudas
              </Button>
              <Button
                type="primary"
                className="site-layout-sub-header-background-menu-item"
                size="large"
                onClick={handlerShowClinic}
              >
                Ficha clínica
              </Button>
              <Button
                type="primary"
                className="site-layout-sub-header-background-menu-item"
                size="large"
                onClick={handlerShowPrescription}
              >
                Generar receta
              </Button>
            </div>
          )}
          <Button
            type="primary"
            onClick={() => {
              firebase.auth().signOut()
            }}
          >
            Cerrar sesión
          </Button>
        </Header>
        <Content className="site-layout-content">
          <div className="site-layout-background">
            <Routes />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
