import { FormEvent, useState } from 'react'
import AccountForm from './AccountForm'
import AdressForm from './AdressForm'
import useMultiStepForm from './hooks/useMultistepForm'
import styles from './styles/Form.module.scss'
import UserForm from './UserForm'
const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}
export type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}
const App = () => {
  const [data, setData] = useState(INITIAL_DATA)
  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => ({ ...prev, ...fields }))
  }
  const {
    steps,
    currentStep,
    isFirstStep,
    isLastStep,
    step,
    next,
    prev,
    goTo,
  } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AdressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />,
  ])
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className={styles.form}>
      <form onSubmit={onSubmit}>
        <div className={styles['step-counter']}>
          {currentStep + 1} / {steps.length}
        </div>
        {step}
        <div className={styles['button-container']}>
          {!isFirstStep && (
            <button type="submit" className={styles['button']}>
              Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button type="submit" className={styles['button']}>
              {isLastStep ? 'Subit' : 'Next'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default App
