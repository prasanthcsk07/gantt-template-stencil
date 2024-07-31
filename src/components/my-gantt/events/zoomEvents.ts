// zoomEvents.ts
declare const gantt: any;

export const initializeZoomPlugin = (gantt: any, zoomConfig: any, el: ShadowRoot) => {
  gantt.ext.zoom.init(zoomConfig);
  gantt.ext.zoom.setLevel('day');
  gantt.ext.zoom.attachEvent('onAfterZoom', (level, config) => {
    const radio = el.querySelector(`.gantt_radio[value='${config.name}']`) as HTMLInputElement;
    if (radio) {
      radio.checked = true;
    }
  });
};

export const zoomIn = () => {
  gantt.ext.zoom.zoomIn();
};

export const zoomOut = () => {
  gantt.ext.zoom.zoomOut();
};

export const setZoomLevel = (level: string) => {
  gantt.ext.zoom.setLevel(level);
};
