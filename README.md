# standard-hooks 🎣

Essential set of [React Hooks][] for convenient [Web API][] consumption.

[react hooks]: https://reactjs.org/docs/hooks-intro.html
[web api]: https://developer.mozilla.org/docs/Web/API

## Key features

- 🐹 **Bundler-friendly** with tree shaking support
- 📚 **Well-documented** and type-safe interfaces
- 📦 **Self-contained**, free of runtime dependencies

## Reference

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

#### Table of Contents

- [Sensors](#sensors)
  - [useDeviceMotion](#usedevicemotion)
  - [useDeviceOrientation](#usedeviceorientation)
  - [useDocumentReadiness](#usedocumentreadiness)
  - [useDocumentVisibility](#usedocumentvisibility)
  - [useGeolocation](#usegeolocation)
  - [useMousePosition](#usemouseposition)
  - [useNetworkAvailability](#usenetworkavailability)
  - [useNetworkInformation](#usenetworkinformation)
  - [usePreferredLanguages](#usepreferredlanguages)
  - [useWindowScrollPosition](#usewindowscrollposition)
  - [useWindowSize](#usewindowsize)
- [Utilities](#utilities)
  - [useEventListener](#useeventlistener)
  - [useInterval](#useinterval)

### Sensors

#### useDeviceMotion

[src/useDeviceMotion.ts:23-37](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useDeviceMotion.ts#L23-L37 'Source code on GitHub')

Tracks acceleration and rotation rate of the device.

##### Examples

```javascript
const Example = () => {
  const { acceleration, rotationRate, interval } = useDeviceMotion();
  // ...
};
```

Returns **EventArgs&lt;DeviceMotionEvent>** Own properties of the last received [`DeviceMotionEvent`](https://developer.mozilla.org/docs/Web/API/DeviceMotionEvent).

#### useDeviceOrientation

[src/useDeviceOrientation.ts:23-39](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useDeviceOrientation.ts#L23-L39 'Source code on GitHub')

Tracks physical orientation of the device.

##### Examples

```javascript
const Example = () => {
  const { alpha, beta, gamma, absolute } = useDeviceOrientation();
  // ...
};
```

Returns **EventArgs&lt;DeviceOrientationEvent>** Own properties of the last received [`DeviceOrientationEvent`](https://developer.mozilla.org/docs/Web/API/DeviceOrientationEvent).

#### useDocumentReadiness

[src/useDocumentReadiness.ts:18-32](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useDocumentReadiness.ts#L18-L32 'Source code on GitHub')

- **See: [`Document.readyState`](https://developer.mozilla.org/docs/Web/API/Document/readyState)**

Tracks loading state of the page.

##### Examples

```javascript
const Example = () => {
  const documentReadiness = useDocumentReadiness();
  if (documentReadiness === 'interactive') {
    // ...
  }
};
```

Returns **DocumentReadyState** Readiness of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), which is `'loading'` by default.

#### useDocumentVisibility

[src/useDocumentVisibility.ts:20-36](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useDocumentVisibility.ts#L20-L36 'Source code on GitHub')

- **See: [`Document.visibilityState`](https://developer.mozilla.org/docs/Web/API/Document/visibilityState)**

Tracks visibility of the page.

##### Examples

```javascript
const Example = () => {
  const documentVisibility = useDocumentVisibility();
  if (documentVisibility === 'hidden') {
    // ...
  }
};
```

Returns **StandardVisibilityState** Visibility state of the [`document`](https://developer.mozilla.org/docs/Web/API/Document), which is `'visible'` by default.

#### useGeolocation

[src/useGeolocation.ts:19-37](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useGeolocation.ts#L19-L37 'Source code on GitHub')

Tracks geolocation of the device.

##### Parameters

- `options` **PositionOptions?** Additional watching options.
- `errorCallback` **PositionErrorCallback?** Method to execute in case of an error, with a [`PositionError`](https://developer.mozilla.org/docs/Web/API/PositionError) parameter.

##### Examples

```javascript
const Example = () => {
  const geolocation = useGeolocation();
  if (geolocation) {
    // ...
  }
};
```

Returns **(Position | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** A [`Position`](https://developer.mozilla.org/docs/Web/API/Position) instance, or `undefined` when data is unavailable.

#### useMousePosition

[src/useMousePosition.ts:15-27](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useMousePosition.ts#L15-L27 'Source code on GitHub')

Tracks mouse position.

##### Examples

```javascript
const Example = () => {
  const [mouseX, mouseY] = useMousePosition();
  // ...
};
```

Returns **\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Coordinates `[x, y]`, falling back to `[0, 0]` when unavailable.

#### useNetworkAvailability

[src/useNetworkAvailability.ts:17-38](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useNetworkAvailability.ts#L17-L38 'Source code on GitHub')

Tracks information about the network's availability.

⚠️ _This attribute is [inherently unreliable](https://html.spec.whatwg.org/multipage/offline.html#navigator.online). A computer can be connected to a network without having internet access._

##### Examples

```javascript
const Example = () => {
  const isOnline = useNetworkAvailability();
  // ...
};
```

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** `false` if the user agent is definitely offline, or `true` if the user agent might be online.

#### useNetworkInformation

[src/useNetworkInformation.ts:17-35](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useNetworkInformation.ts#L17-L35 'Source code on GitHub')

Tracks information about the device's network connection.

⚗️ _The underlying technology is experimental. Please be aware about browser compatibility before using this in production._

##### Examples

```javascript
const Example = () => {
  const { effectiveType, downlink, rtt, saveData } = useNetworkInformation();
  // ...
};
```

Returns **(NetworkInformation | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined))** A [`NetworkInformation`](https://developer.mozilla.org/docs/Web/API/NetworkInformation) instance, or `undefined` when data is unavailable.

#### usePreferredLanguages

[src/usePreferredLanguages.ts:21-35](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/usePreferredLanguages.ts#L21-L35 'Source code on GitHub')

Tracks preferred languages of the user.

##### Examples

```javascript
const Example = () => {
  const preferredLanguages = usePreferredLanguages();
  // ...
};
```

Returns **ReadonlyArray&lt;[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>** An array of [BCP 47](https://tools.ietf.org/html/bcp47) language tags, ordered by preference with the most preferred language first.

#### useWindowScrollPosition

[src/useWindowScrollPosition.ts:15-29](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useWindowScrollPosition.ts#L15-L29 'Source code on GitHub')

Tracks window scroll position.

##### Examples

```javascript
const Example = () => {
  const [windowScrollX, windowScrollY] = useWindowScrollPosition();
  // ...
};
```

Returns **\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Coordinates `[x, y]`, falling back to `[0, 0]` when unavailable.

#### useWindowSize

[src/useWindowSize.ts:15-29](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useWindowSize.ts#L15-L29 'Source code on GitHub')

Tracks window size.

##### Examples

```javascript
const Example = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  // ...
};
```

Returns **\[[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number), [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)]** Dimensions `[width, height]`, falling back to `[0, 0]` when unavailable.

### Utilities

#### useEventListener

[src/useEventListener.ts:22-35](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useEventListener.ts#L22-L35 'Source code on GitHub')

- **See: [Event reference on MDN](https://developer.mozilla.org/en-US/docs/Web/Events)**

Listens to an event while the enclosing component is mounted.

##### Parameters

- `type` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Name of event (case-sensitive).
- `callback` **EventListener** Method to execute whenever the event fires.
- `target` **EventTarget?** Target to listen on, possibly a DOM element or a remote service connector. (optional, default `window`)
- `options` **AddEventListenerOptions?** Additional listener characteristics.

##### Examples

```javascript
const Example = () => {
  useEventListener('error', () => {
    console.log('A resource failed to load.');
  });
  // ...
};
```

#### useInterval

[src/useInterval.ts:20-32](https://github.com/kripod/standard-hooks/blob/6592da14f2edac33fba87d575e1c3dda167a8faf/src/useInterval.ts#L20-L32 'Source code on GitHub')

Repeatedly calls a function with a fixed time delay between each call.

📝 _Timings may be inherently inaccurate, due to the implementation of [`setInterval`](https://developer.mozilla.org/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) under the hood._

##### Parameters

- `callback` **function (): void** Method to execute periodically.
- `delayMs` **([number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | null)** Time, in milliseconds, to wait between executions of the specified function. Set to `null` for pausing.

##### Examples

```javascript
const Example = () => {
  useInterval(() => {
    // Custom logic to execute each second
  }, 1000);
  // ...
};
```

## Performance tips

- Avoid layout thrashing by [debouncing or throttling](https://css-tricks.com/debouncing-throttling-explained-examples/) high frequency events, e.g. scrolling or mouse movements
- Move non-primitive hook parameters to an outer scope or memoize them with [`useMemo`](https://reactjs.org/docs/hooks-reference.html#usememo), e.g.:

  ```tsx
  const geolocationOptions = { enableHighAccuracy: true };
  const Example = () => {
    const geolocation = useGeolocation(geolocationOptions);
    // ...
  };
  ```
