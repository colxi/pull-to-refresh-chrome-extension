document.addEventListener('DOMContentLoaded', async event => {
  let mouseSensitivityElement = document.getElementById('mouseSensitivity')
  let touchPadSensitivityElement = document.getElementById(
    'touchPadSensitivity'
  )

  chrome.storage.local.get('sensitivitySettings', function(items) {
    let mouseSens
    let touchSens

    try {
      mouseSens = items.sensitivitySettings.mouseSens
      touchSens = items.sensitivitySettings.touchSens
    } catch (e) {
      mouseSens = 5.5
      touchSens = 3.5
    }

    mouseSensitivityElement.value = mouseSens
    touchPadSensitivityElement.value = touchSens
  })

  document.getElementById('save').addEventListener('click', ev => {
    chrome.storage.local.set({
      sensitivitySettings: {
        mouseSens: mouseSensitivityElement.value,
        touchSens: touchPadSensitivityElement.value
      }
    })

    window.close()
  })
})
