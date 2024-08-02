import { Component, h, Element, State, Listen } from '@stencil/core';
import 'dhtmlx-gantt';
import { setGanttPlugins } from './plugins/setGanttPlugins';
import { ZoomConfigData } from './events/zoomConfigData';
import { fetchChartData, fetchLinksData, Task } from './api/apiService';
import { setupGanttEvents } from './events/ganttEvents';
import { initializeZoomPlugin, zoomIn, zoomOut, setZoomLevel } from './events/zoomEvents';

declare const gantt: any;

@Component({
  tag: 'my-gantt',
  styleUrl: 'my-gantt.css',
  shadow: true,
})
export class MyGantt {
  @Element() el: HTMLElement;
  @State() isLoading: boolean = false;
  @State() zoomConfig = ZoomConfigData(gantt);

  componentDidLoad() {
    this.initializeGantt();
    this.loadData();
    this.setupFullscreenToggle();
    this.setupZoomPlugin();
  }

  initializeGantt() {
    gantt.config.highlight_critical_path = true;
    const ganttContainer = this.el.shadowRoot.querySelector('#gantt_here') as HTMLElement;

    setGanttPlugins(gantt);

    gantt.config.work_time = true;
    gantt.config.details_on_create = false;
    gantt.config.duration_unit = 'day';
    gantt.config.row_height = 30;
    gantt.config.min_column_width = 40;

    gantt.templates.timeline_cell_class = (task, date) => {
      if (!gantt.isWorkTime(date)) return 'week_end';
      return '';
    };

    gantt.init(ganttContainer);
  }

  async loadData() {
    this.isLoading = true;
    let task: Task = {};

    try {
      const [links, chart] = await Promise.all([fetchLinksData(), fetchChartData()]);
      task.links = links;
      task.data = chart;
      gantt.parse(task);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      this.isLoading = false;
    }

    setupGanttEvents(gantt);
  }

  setupFullscreenToggle() {
    document.addEventListener("fullscreenchange", () => {
      const icon = gantt.toggleIcon;
      if (document.fullscreenElement) {
        if (icon) icon.className = icon.className.replace("fa-expand", "fa-compress");
      } else {
        if (icon) icon.className = icon.className.replace("fa-compress", "fa-expand");
      }
    });

    gantt.attachEvent("onTemplatesReady", () => {
      const toggle = document.getElementById("img");
      toggle.className = "fa fa-expand gantt-fullscreen";
      gantt.toggleIcon = toggle;
      this.el.shadowRoot.appendChild(toggle);
      toggle.onclick = () => gantt.ext.fullscreen.toggle();
    });

    // gantt.attachEvent("onExpand", () => {
    //   console.log('onExpand')
    //   const icon = gantt.toggleIcon;
    //   if (icon) icon.className = icon.className.replace("fa-expand", "fa-compress");
    // });

    // gantt.attachEvent("onCollapse", () => {
    //   console.log("onCollapse")
    //   const icon = gantt.toggleIcon;
    //   if (icon) icon.className = icon.className.replace("fa-compress", "fa-expand");
    // });

    const toggle = document.createElement("img");
    toggle.className = "fa fa-expand gantt-fullscreen";
    toggle.src = "https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-fullscreen-vector-icon-png-image_702532.jpg";
    toggle.style.height = "50px";
    toggle.style.marginTop = "1rem";
    gantt.toggleIcon = toggle;
    this.el.shadowRoot.appendChild(toggle);
    toggle.onclick = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        this.el.shadowRoot.querySelector('#gantt_here').requestFullscreen();
      }
    };
  }

  setupZoomPlugin() {
    initializeZoomPlugin(gantt, this.zoomConfig, this.el.shadowRoot);
  }

  @Listen('zoomIn')
  handleZoomIn() {
    zoomIn();
  }

  @Listen('zoomOut')
  handleZoomOut() {
    zoomOut();
  }

  @Listen('setZoomLevel')
  handleSetZoomLevel(event: CustomEvent) {
    setZoomLevel(event.detail);
  }

  @Listen('toggleCriticalPath')
  handleToggleCriticalPath() {
    const button = this.el.shadowRoot.querySelector('gantt-control').shadowRoot.querySelector('.gantt_control button') as HTMLButtonElement;
    if (button) {
      button.dataset.enabled = button.dataset.enabled === 'true' ? 'false' : 'true';
      const isEnabled = button.dataset.enabled === 'true';
      button.innerHTML = isEnabled ? 'Hide Critical Path' : 'Show Critical Path';
      gantt.config.highlight_critical_path = isEnabled;
      gantt.render();
    }
  }

  render() {
    return (
      <div>
        <gantt-control></gantt-control>
        <div id="gantt_here" style={{ width: '100%', height: 'calc(80vh - 24px)' }}></div>
        {this.isLoading && (
          <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", width: "100%", height: "calc(80vh - 52px)", zIndex: "999" }} id="skeleton_loader"></div>
        )}
      </div>
    );
  }
}
