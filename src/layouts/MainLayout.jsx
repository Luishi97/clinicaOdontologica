import { Layout, Menu } from 'antd'
import { FcConferenceCall, FcPlanner, FcViewDetails, FcMoneyTransfer } from 'react-icons/fc'
import { Link } from '@reach/router'

import Routes from '../Routes'
import './MainLayoutStyles.css'

const { Header, Content, Sider } = Layout

export default function MainLayout() {
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
        <Header className="site-layout-sub-header-background" />
        <Content className="site-layout-content">
          <div className="site-layout-background">
            <Routes />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}
