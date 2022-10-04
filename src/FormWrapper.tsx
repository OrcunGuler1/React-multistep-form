import { ReactNode } from 'react'
import styles from './styles/Form.module.scss'
const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2 className={styles['form-title']}>{title}</h2>
      <div className={styles['form-wrapper']}>{children}</div>
    </>
  )
}

export default FormWrapper

type FormWrapperProps = {
  title: string
  children: ReactNode
}
