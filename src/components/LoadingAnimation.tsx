import Lottie from "lottie-react"
import type React from "react"
import penWritingAnimation from "../assets/penWriting.json"

const LoadingAnimation: React.FC = () => {
  return <Lottie animationData={penWritingAnimation} className="w-14 h-14" />
}

export default LoadingAnimation
