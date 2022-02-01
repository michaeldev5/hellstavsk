import React, { FC, ReactNode } from "react"

type Props = {
  label: string
  Icon: ReactNode
  href?: string
}

const Button: FC<Props> = ({ label, Icon, href }) => (
  <a
    href={href}
    className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded inline-flex items-center hover:cursor-pointer"
    target="_blank"
    rel="noreferrer"
  >
    {Icon}
    <span>{label}</span>
  </a>
)

export default Button
