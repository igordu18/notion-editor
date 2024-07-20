import { CaretDoubleRight, CaretDown, LockSimpleOpen } from "@phosphor-icons/react"
import { Breadcrumbs } from "./breadcrumbs"
import './navbar.css'

export function Navbar() {
  return (
    <div className="navbar-container">
      <div className="container-item-with-icon">
        <CaretDoubleRight 
          size={12}
          color="#6d727e"
          weight="bold"
        />
        <Breadcrumbs />
      </div>
      <div className="container-buttons">
        <button type="button" className="button editing-button">
          <LockSimpleOpen size={16} weight="bold" />
          <span>Editing</span>
        </button>
        <div className="vertical-separator" />
        <button type="button" className="button publish-button">
          <span>Publish Space</span>
          <CaretDown size={16} weight="bold" />
        </button>
      </div>
    </div>
  )
}