"use client"

const Wrapper = ({children ,className}) => {   // children will be the by default prop, classname is the prop sent from Header.jsx
  return (

    <div className={`w-full px-5 md:px-10  ${className}`}>
      {children}
      </div>
      

  )
}

export default Wrapper 