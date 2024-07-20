import { QuestionMark } from '@phosphor-icons/react'
import './helper.css';

export function Helper() {
  return (
    <button type='button' className="helper-container">
      <div className='icon-circle'>
        <QuestionMark size={20} weight="bold" color='#6d727e' />
      </div>
    </button>
  );
}