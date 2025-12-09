import { Icon } from '@iconify/react'

interface Props {
    icon: string
    title: string
}

export default function HoverIcon({icon, title}: Props) {
  return (
     <div className={`flex flex-col items-center text-gray-600 justify-center p-4 rounded-lg transition-colors duration-300 hover:text-red cursor-pointer`}>
      <Icon icon={icon} width="40" height="40" className="mb-2" />
      <span className="text-center text-sm">{title}</span>
    </div>
  )
}
