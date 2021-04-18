import { useState } from 'react'

export default function useHandleForm(formDataModel = {}) {
  const [formData, setFormData] = useState(formDataModel)

  const handleForm = ({ name, value }) => {
    setFormData({ ...formData, [name]: value })
  }

  return { formData, setFormData, handleForm }
}
