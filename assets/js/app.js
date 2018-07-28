document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button')
  const tip = document.querySelector('.tip-action')
  const stateStoraged = localStorage.getItem('stateNightMode')

  if (stateStoraged) {
    document.documentElement.classList.toggle('night-mode')
    button.checked = true
  }

  button.addEventListener('click', () => {
    document.documentElement.classList.toggle('night-mode')

    if (document.documentElement.classList.contains('night-mode')) {
      tip.textContent = 'on'
      localStorage.setItem('stateNightMode', true)
    } else {
      tip.textContent = 'off'
      localStorage.removeItem('stateNightMode')
    }
  })
})
