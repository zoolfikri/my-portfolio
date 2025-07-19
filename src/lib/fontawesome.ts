// Configure Font Awesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Tell Font Awesome to skip adding the CSS automatically 
// since it's imported above
config.autoAddCss = false

export default function FontAwesome() {
  return null;
}
