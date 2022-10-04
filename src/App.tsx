import useMultiStepForm from './hooks/useMultistepForm'
import styles from './styles/Form.module.scss'
const App = () => {
  const {
    steps,
    currentStep,
    isFirstStep,
    isLastStep,
    step,
    next,
    prev,
    goTo,
  } = useMultiStepForm([<div>One</div>, <div>Two</div>, <div>Three</div>])
  return (
    <div className={styles.form}>
      <form>
        <div className={styles['step-counter']}>
          {currentStep + 1} / {steps.length}
        </div>
        {step}
        <div className={styles['button-container']}>
          {!isFirstStep && (
            <button type="button" className={styles['button']} onClick={prev}>
              Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button type="button" className={styles['button']} onClick={next}>
              {isLastStep ? 'Subit' : 'Next'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default App
