import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={65}
      height={65}
      fill="#FFFFFF"
      {...props}
    >
      <path d="M10.828 12l4.95 4.95-1.414 1.415L8 12l6.364-6.364 1.414 1.414-4.95 4.95z" />
    </svg>
  )
}

export default SvgComponent