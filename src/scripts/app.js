const App = () => {
  const init = () => {
    ready(onDocReady)
  }

  const ready = fn => {
    document.readyState != 'loading'
      ? fn()
      : document.addEventListener('DOMContentLoaded', fn)
  }

  const onDocReady = () => {
    console.log('hi ho')
  }

  init()
}

export default App
