import { useState } from 'react'

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
)

const Accordion = ({ title, content }) => {
  const [toggle, setToggle] = useState(false)

  const toggleContent = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className="py-8 border-b-2">
        <div className="flex items-center space-x-4" onClick={toggleContent}>
          <h3>{title}</h3>
          <div className="w-6 h-6">{toggle ? <ChevronDown /> : <ChevronRight />}</div>
        </div>
        {toggle && (
          <div>
            <p className="mt-4 text-gray-500">{content}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default Accordion
