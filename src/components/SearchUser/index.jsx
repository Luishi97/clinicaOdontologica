import { useState } from 'react'
import { AutoComplete, Input } from 'antd'
import ProptTypes from 'prop-types'

import { findUser } from './findUser'

export default function SearchUser({ setPatient }) {
  const [patientsNames, setPatientsNames] = useState([])
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      options={patientsNames}
      onSelect={(_, { patientData }) => {
        setPatient({ ...patientData })
      }}
      className="search_patient-auto_complete"
    >
      <Input.Search
        style={{ width: '100%' }}
        placeholder="Nombres luego los apellidos"
        enterButton
        onSearch={(value) => findUser({ userName: value || '', setPatientsNames })}
      />
    </AutoComplete>
  )
}

SearchUser.propTypes = {
  setPatient: ProptTypes.func
}
