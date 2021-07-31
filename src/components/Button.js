import React from "react"

const Button = ({ label, Icon }) => (
  <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
    {Icon}
    <span>{label}</span>
  </button>
)

export default Button
