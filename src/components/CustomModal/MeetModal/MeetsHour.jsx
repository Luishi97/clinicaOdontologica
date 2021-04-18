import { useState } from 'react'
import PropType from 'prop-types'
import CreateMeet from './CreateMeet'
import { Button } from 'antd'
import { FcFullTrash } from 'react-icons/fc'

export default function MeetsHour({ hour, name, uid, handleDeleteMeet }) {
  const [isEditing] = useState(false)

  if (isEditing) {
    return <CreateMeet />
  }

  return (
    <li className="modal-meet_body-list-item">
      <p className="modal-meet_body-list-item-hour">{hour}</p>
      <p className="modal-meet_body-list-item-name">{name}</p>
      <div className="modal-meet_body-list-item-actinons">
        <Button
          onClick={() => handleDeleteMeet(uid)}
          type="circle"
          shape="circle"
          icon={<FcFullTrash />}
        ></Button>
      </div>
    </li>
  )
}

MeetsHour.propTypes = {
  hour: PropType.array,
  name: PropType.string,
  uid: PropType.string,
  handleDeleteMeet: PropType.func
}
