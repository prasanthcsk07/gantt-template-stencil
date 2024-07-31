import { Component, h, Element, State } from '@stencil/core';
import 'dhtmlx-gantt';
import { setGanttPlugins } from './setGanttPlugins';
import { ZoomConfigData } from './zoomConfigData';
import { formatDate } from './formatDate';
import { fetchChartData, fetchLinksData, postTaskData, updateTaskData, deleteTaskData, postLinkData, deleteLinkData, Task } from './api/apiService';

declare const gantt: any;

@Component({
  tag: 'my-gentt',
  styleUrl: 'my-gentt.css',
  shadow: true,
})
export class MyGentt {
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

    this.setupCriticalPathToggle();
    
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

  setupCriticalPathToggle() {
    const button = this.el.shadowRoot.querySelector('.gantt_control button') as HTMLButtonElement;
    button.onclick = (e) => {
      e.preventDefault();
      this.updateCriticalPath(button);
    };
  }

  updateCriticalPath(toggle: HTMLButtonElement) {
    toggle.dataset.enabled = toggle.dataset.enabled === 'true' ? 'false' : 'true';
    const isEnabled = toggle.dataset.enabled === 'true';
    toggle.innerHTML = isEnabled ? 'Hide Critical Path' : 'Show Critical Path';
    gantt.config.highlight_critical_path = isEnabled;
    gantt.render();
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

    this.setupGanttEvents();
  }

  setupGanttEvents() {
    gantt.attachEvent("onAfterTaskAdd", async (id, task) => {
      const newData = { ...task, end_date: "", start_date: formatDate(task.start_date), open: true, id: String(id), type: task.parent === 0 ? "project" : "" };
      await postTaskData(newData);
    });

    gantt.attachEvent("onAfterTaskUpdate", async (id, task) => {
      const newData = { ...task, end_date: "", start_date: formatDate(task.start_date), open: true, id: String(id) };
      await updateTaskData(id, newData);
    });

    gantt.attachEvent("onAfterTaskDelete", async (id) => {
      await deleteTaskData(id);
    });

    gantt.attachEvent("onLinkCreated", async (link) => {
      await postLinkData(link);
      return true;
    });

    gantt.attachEvent('onAfterLinkDelete', async (id) => {
      await deleteLinkData(id);
      return true;
    });
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

    gantt.attachEvent("onExpand", () => {
      const icon = gantt.toggleIcon;
      if (icon) icon.className = icon.className.replace("fa-expand", "fa-compress");
    });

    gantt.attachEvent("onCollapse", () => {
      const icon = gantt.toggleIcon;
      if (icon) icon.className = icon.className.replace("fa-compress", "fa-expand");
    });

    const toggle = document.createElement("img");
    toggle.className = "fa fa-expand gantt-fullscreen";
    toggle.src = "https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-fullscreen-vector-icon-png-image_702532.jpg";
    toggle.style.height = "50px";
    toggle.style.marginTop = "-20rem";
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
    gantt.ext.zoom.init(this.zoomConfig);
    gantt.ext.zoom.setLevel('day');
    gantt.ext.zoom.attachEvent('onAfterZoom', (level, config) => {
      const radio = this.el.shadowRoot.querySelector(`.gantt_radio[value='${config.name}']`) as HTMLInputElement;
      if (radio) {
        radio.checked = true;
      }
    });
  }

  zoomIn() {
    gantt.ext.zoom.zoomIn();
  }

  zoomOut() {
    gantt.ext.zoom.zoomOut();
  }

  setZoomLevel(event) {
    gantt.ext.zoom.setLevel(event.target.value);
  }

  render() {
    return (
      <div>
        <form class="gantt_control">
          <input type="button" value="Zoom In" onClick={() => this.zoomIn()} />
          <input type="button" value="Zoom Out" onClick={() => this.zoomOut()} />
          <button>Show Critical Path</button>
          {['day', 'week', 'month', 'quarter', 'year'].map(scale => (
            <span>
              <input type="radio" id={`scale-${scale}`} class="gantt_radio" name="scale" value={scale} onClick={(event) => this.setZoomLevel(event)} />
              <label htmlFor={`scale-${scale}`}>{`${scale.charAt(0).toUpperCase() + scale.slice(1)} scale`}</label>
              </span>
          ))}
        </form>
        
        <div id="gantt_here" style={{ width: '100%', height: 'calc(80vh - 24px)' }}></div>
        {this.isLoading && (
          <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", width: "100%", height: "calc(80vh - 52px)", zIndex: "999" }} id="skeleton_loader"></div>
        )}
      </div>
    );
  }
}
