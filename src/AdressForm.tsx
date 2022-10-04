import React from 'react'

const AdressForm = () => (
  <>
    <label>Street</label>
    <input required autoFocus type="text" />
    <label>City</label>
    <input required type="text" />
    <label>State</label>
    <input required type="text" />
    <label>Zip</label>
    <input required type="text" />
  </>
)

export default AdressForm
