const UserForm = () => (
  <>
    <label>First Mame</label>
    <input autoFocus required type="text" />
    <label>Last Name</label>
    <input required type="text" />
    <label>Age</label>
    <input required min={1} type="number" />
  </>
)

export default UserForm
