import React, { FC, ReactNode } from "react"

type Props = {
  label: string
  Icon: ReactNode
  href?: string
}

const Button: FC<Props> = ({ label, Icon, href }) => (
  <a
    href={href}
    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center hover:cursor-pointer"
    target="_blank"
  >
    {Icon}
    <span>{label}</span>
  </a>
)

export default Button
