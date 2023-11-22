"use client"
const Wrapper = ({children ,className}) => {
  return (
    <div className={`w-full  px-5 md:px-10 ${className || ""}`}>{children}</div>
  )
}

export default Wrapper 