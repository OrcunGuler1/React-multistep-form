import { ReactElement, useState } from 'react'

const useMultiStepform = (stpes: ReactElement[]) => {
  const [currentStep, setCurrentStep] = useState(0)
}

export default useMultiStepform
