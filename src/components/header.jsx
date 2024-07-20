import { MenuActions } from "./menu-actions"
import './header.css'

export function Header() {
  return (
    <header className="header-container">
      <MenuActions />
      <div>
        <h1>Front-end developer test project</h1>
        <div className="horizontal-separator" />
      </div>
    </header>
  )
}