import { Avatar, Col, Row } from 'antd'
import PropTypes from 'prop-types'
import maleAvatar from '../../../../assets/images/svg/maleAvatar.svg'
import femaleAvatar from '../../../../assets/images/svg/femaleAvata.svg'
import emptyProfile from '../../../../assets/images/svg/emptyProfile.svg'

export function PanelNewUser({ userData }) {
  if (!userData.lastName)
    return (
      <img
        src={emptyProfile}
        alt="Empty profile"
        className="container_panel_new_user"
        style={{ width: '100%' }}
      />
    )
  return (
    <Row className="container_panel_new_user">
      <Col className="container_panel_new_user-avatar">
        <Avatar
          src={userData.sex === 'male' ? maleAvatar : femaleAvatar}
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        />
        <p>{userData.firstName}</p>
        <p>
          {userData.lastName} {userData.apMat}
        </p>

        <p>
          {userData.birthday.date &&
            `${userData.birthday.date()}/${userData.birthday.month()}/${userData.birthday.year()}`}
        </p>
        <p>{userData.sex === 'male' ? 'Masculino' : 'Femenino'}</p>
      </Col>
    </Row>
  )
}
PanelNewUser.propTypes = {
  userData: PropTypes.shape({
    lastName: PropTypes.string,
    apMat: PropTypes.string,
    firstName: PropTypes.string,
    sex: PropTypes.string,
    birthday: PropTypes.object
  })
}
