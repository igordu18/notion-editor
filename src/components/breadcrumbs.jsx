import { BookOpen } from '@phosphor-icons/react'
import './breadcrumbs.css';

export function Breadcrumbs() {
  return (
    <nav>
      <ul className="breadcrumb">
        <li className="breadcrumb-item breadcrumb-item-with-icon active">
          <BookOpen size={16} weight="bold" />
          Main
        </li>
        <li className="breadcrumb-item">
          Getting started
        </li>
        <li className="breadcrumb-item">
          Front-end developer test proje...
        </li>
      </ul>
    </nav>
  );
}