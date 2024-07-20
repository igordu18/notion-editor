import { ArrowDownLeft, Clock, Cloud, DotsThreeVertical } from '@phosphor-icons/react'
import { FiCheckCircle } from "react-icons/fi";
import helpjuice from '../assets/helpjuice.png';
import './menu-actions.css';

export function MenuActions() {
  return (
    <div className="menu-actions-container">
      <div className='details'>
        <span className='short-name'>P</span>
        <div className='short-vertical-separator' />
        <span className="time">
          <Clock size={16} weight='bold' color='#9ca3af' />
          0min
        </span>
        <div className='short-vertical-separator' />
        <img src={helpjuice} width={26} height={26} />
        <div className='short-vertical-separator' />
        <span className="share">
          <ArrowDownLeft size={16} weight='bold' />
          0
        </span>
      </div>
      <div className='buttons-container'>
        <button type="button" className='menu-actions-button'>
          <FiCheckCircle 
            size={16}
            weight='bold'
            color='#9ca3af'
          />
        </button>
        <button type="button" className='menu-actions-button cloud-button'>
          <Cloud 
            size={16}
            weight='bold'
            className='cloud-icon'
            color='#4f9a74'
          />
        </button>
        <button type="button" className='menu-actions-button three-dots-button'>
          <DotsThreeVertical
            size={20} 
            weight='bold'
          />
        </button>
      </div>
    </div>
  )
}