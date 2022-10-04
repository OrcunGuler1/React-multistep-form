import { ReactElement, useState } from 'react'

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0)

  const next = () => {
    setCurrentStep(prev => (prev >= steps.length ? prev : prev + 1))
  }

  const prev = () => {
    setCurrentStep(prev => (prev <= 0 ? prev : prev - 1))
  }

  const goTo = (index: number) => {
    setCurrentStep(index)
  }

  return {
    currentStep,
    step: steps[currentStep],
    next,
    prev,
    goTo,
  }
}

export default useMultiStepForm
