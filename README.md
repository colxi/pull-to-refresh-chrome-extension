# pull-to-refresh Chrome extension

Pull gesture implementation ( and mouse wheel/track pad overscroll ) to reload the current webpage.

Allows quick and easy page refresh, in all kind of environments and devices:

- Pull down gesture, in touch devices
- Two fingers scroll in laptop track pads
- Mouse Wheel scroll in mouse based environments

Available in:

https://chrome.google.com/webstore/detail/pull-to-refresh/opiolhkaggfkacemkinlcbidbidfpenl

## Building

In order to output the package zip file required by Chrome, run the following sequence :

```bash
npm install
npm run build
```

The contents of the `src` directory will be packed in a ZIP file and placed in `dist` directory as `pull-to-refresh-chrome-extension.zip`.

## History log

- 1.0.8 Improved project directory structure
- 1.0.7 Mouse/TouchPad configurable sensitivity added (thanks to @proohit)
- 1.0.6 Minor glitches fixed, and reduced page reloading time
- 1.0.5 Added support to `overscrollBehaviorY` CSS directive
- 1.0.4 First release
