import FormWrapper from './FormWrapper'

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => (
  <FormWrapper title="Account Form">
    <label>Email</label>
    <input
      autoFocus
      required
      type="email"
      value={email}
      onChange={e => updateFields({ email: e.target.value })}
    />
    <label>Password</label>
    <input
      autoFocus
      required
      type="password"
      value={password}
      onChange={e => updateFields({ password: e.target.value })}
    />
  </FormWrapper>
)

export default AccountForm

type AccountFormData = {
  email: string
  password: string
}

type AccountFormProps = AccountFormData & {
  updateFields: (fields: Partial<AccountFormData>) => void
}
