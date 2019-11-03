document.addEventListener('DOMContentLoaded', async (event) => {
    let mousesensitivityElement = document.getElementById('mousesensitivity');
    let touchpadsensitivityElement = document.getElementById('touchpadsensitivity');

    chrome.storage.local.get('sensitivitySettings', function (items) {
        let mousesens;
        let touchsens;

        try {
            mousesens = items.sensitivitySettings.mousesens;
            touchsens = items.sensitivitySettings.touchsens;
        } catch (e) {
            mousesens = 5.5;
            touchsens = 3.5;
        }

        mousesensitivityElement.value=mousesens;
        touchpadsensitivityElement.value = touchsens;
    })

    document.getElementById('save').addEventListener('click', (ev) => {
        chrome.storage.local.set({
            'sensitivitySettings': {
                'mousesens': mousesensitivityElement.value,
                'touchsens': touchpadsensitivityElement.value
            }
        })

        window.close();
    })
})