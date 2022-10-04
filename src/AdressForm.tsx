import FormWrapper from './FormWrapper'

const AdressForm = ({
  street,
  city,
  state,
  zip,
  updateFields,
}: AdressFormProps) => (
  <FormWrapper title="Adress Form">
    <label>Street</label>
    <input
      required
      autoFocus
      type="text"
      value={street}
      onChange={e => updateFields({ street: e.target.value })}
    />
    <label>City</label>
    <input
      required
      type="text"
      value={city}
      onChange={e => updateFields({ city: e.target.value })}
    />
    <label>State</label>
    <input
      required
      type="text"
      value={state}
      onChange={e => updateFields({ state: e.target.value })}
    />
    <label>Zip</label>
    <input
      required
      type="text"
      value={zip}
      onChange={e => updateFields({ zip: e.target.value })}
    />
  </FormWrapper>
)

export default AdressForm

type AdressFormData = {
  street: string
  city: string
  state: string
  zip: string
}
type AdressFormProps = AdressFormData & {
  updateFields: (fields: Partial<AdressFormData>) => void
}
