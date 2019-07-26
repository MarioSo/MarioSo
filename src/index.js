import styles from './styles/index.scss'
import App from './scripts/app.js'

App()

if (module.hot) {
  module.hot.accept('./scripts/app.js', function() {
    App()
  })
}
