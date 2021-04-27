import { useCallback, useState } from 'react'

export default function useHandleForm(formDataModel = {}) {
  const [formData, setFormData] = useState(formDataModel)

  const handleForm = useCallback(
    ({ name, value }) => {
      setFormData({ ...formData, [name]: value })
    },
    [formData]
  )

  return { formData, setFormData, handleForm }
}
