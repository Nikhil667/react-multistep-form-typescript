import FormWrapper from './FormWrapper'

export default function AccountForm() {
  return (
    <FormWrapper title='Account Details'>
        <label>Email: </label>
        <input type="text" autoFocus required />
        <label>Password: </label>
        <input type="text" required />
    </FormWrapper>
  )
}
