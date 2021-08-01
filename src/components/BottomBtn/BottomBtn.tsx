import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'


interface IBottomBtnProps {
  text: string,
  colorClass: string,
  icon: IconProp,
  onBtnClick: () => void
}


const BottomBtn: React.FC<IBottomBtnProps> = ({ text, colorClass, icon, onBtnClick }) => (
  <button
    type="button"
    className={`btn btn-block no-border ${colorClass}`}
    onClick={onBtnClick}
  >
    <FontAwesomeIcon
      className="mr-2"
      size="lg"
      icon={icon}
    />
    {text}
  </button>
)

BottomBtn.defaultProps = {
  text: "新建"
}

export default BottomBtn