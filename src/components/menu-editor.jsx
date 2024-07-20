/* eslint-disable react/prop-types */
import { TextT } from '@phosphor-icons/react'
import PropTypes from 'prop-types';
import './menu-editor.css';

export function MenuEditor(props) {
  const options = [
    {
      ...props.items[0],
      label: 'Heading 1',
      shortcut: '# + space',
      disabled: false,
    },
    {
      label: 'Expandable Heading 1',
      shortcut: '>># + space',
      disabled: true,
    },
  ]

  return (
    <div className='menu-editor-container'>
      <div>
        <h1>Add blocks</h1>
        <p>Keep typing to filter, or escape to exit</p>
      </div>
      <div>
        <div className='filter-text-container'>
          <span >Filtering keyword</span>
          <span>1</span>
        </div>
        <div>
          {options.map((option) => (
            <button type="button" key={option.shortcut} className='option-button' disabled={option.disabled} onClick={() => props.onItemClick(option)}>
              <div className='option-icon-container-button'>
                <TextT size={32} weight='bold' color='#9ca3af' />
              </div>
              <div className='option-text-container-button'>
                <h3>{option.label}</h3>
                <span>Shortcut: type {option.shortcut}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

MenuEditor.propTypes = {
  cursorPosition: PropTypes.number,
}