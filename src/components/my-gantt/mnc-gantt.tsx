import { Component, h, Prop, Method, Host } from '@stencil/core';
import { gantt } from 'dhtmlx-gantt';
import { getData } from './data/data'
import { initZoom } from './mnc-gantt-zoom';

@Component({
  tag: 'my-gantt',
  styleUrl: './scss/mnc-gantt.scss',
  shadow: true,
})
export class MncGantt {
  ganttContainer: HTMLDivElement;

  /**
   * The task data
   */
  @Prop() taskdata: {};

  componentDidLoad() {

    this.taskdata = getData();
    // MPP Load
    gantt.plugins({
      export_api: true,
      critical_path: true,
      tooltip: true
    });

    gantt.config.work_time = true;
    gantt.config.details_on_create = false;
    gantt.config.duration_unit = "day";
    gantt.config.row_height = 30;
    gantt.config.min_column_width = 40;

    gantt.templates.timeline_cell_class = function (task, date) {
       console.log(task)
      if (!gantt.isWorkTime(date))
        return "week_end";
      return "";
    };

    gantt.attachEvent("onAfterTaskAdd", function (id, item) {
      gantt.message("The task was added " + "ID: " + id + item)
    });

    // Tooltip START
    gantt.attachEvent("onGanttReady", function () {
      var tooltips = gantt.ext.tooltips;
      tooltips.tooltip.setViewport(gantt.$task_data);
    });
    gantt.config.static_background = true;
    // Tooltip END

    gantt.init(this.ganttContainer);
    initZoom();
    gantt.parse(this.taskdata);
  }

  render() {
    return (
      <Host>
        <div class="gantt_control">
          <div class="gantt_control_buttons">
          <mnc-button
            appearance="primary"
            border="s"
            href=""
            justify-content="center"
            size="small"
            target="_blank"
            type="button"
            variant="standard"
            onMncClick={() => { this.gZoomOut() }}
          >
            Zoom Out
          </mnc-button>
          <mnc-button
            appearance="primary"
            border="s"
            href=""
            justify-content="center"
            size="small"
            target="_blank"
            type="button"
            variant="standard"
            onMncClick={() => { this.gZoomIn() }}
          >
            Zoom In
          </mnc-button>
          </div>
        </div>
        <div id="gantt" class="ganttContainer" ref={(input) => { this.ganttContainer = input; }}>
        </div>
      </Host>
    );
  }

  @Method()
  async gZoomIn() {
    gantt.ext.zoom.zoomIn();
  }

  @Method()
  async gZoomOut() {
    gantt.ext.zoom.zoomOut();
  }

  @Method()
  async updateCriticalPath(toggle) {
    console.log(toggle)
    toggle.enabled = !toggle.enabled;
    console.log(toggle.enabled)
    if (toggle.enabled) {
      toggle.innerHTML = "Hide Critical Path";
      gantt.config.highlight_critical_path = true;
    } else {
      toggle.innerHTML = "Show Critical Path";
      gantt.config.highlight_critical_path = false;
    }
    console.log(["Toggle", "RenderAction"])
    gantt.render();
  }
}
