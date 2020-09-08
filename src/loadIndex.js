import { loadNavbar } from './loadNavbar'
import { loadFooter } from './loadFooter'
import { loadHomeContent } from './content/loadHomeContent'

function loadIndex() {
  loadNavbar();
  loadHomeContent();
  loadFooter();
}

export { loadIndex }