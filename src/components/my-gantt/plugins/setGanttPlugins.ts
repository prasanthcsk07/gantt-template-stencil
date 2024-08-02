// setGanttPlugins.ts
export function setGanttPlugins(gantt) {
    gantt.plugins({
      quick_info: true,
      tooltip: true,
      critical_path: true,
      fullscreen: true,
      multiselect: true,
      auto_scheduling: true
    });
  
    // Initialize each plugin here if necessary


    gantt.templates.scale_cell_class = function (date) {
      if (!gantt.isWorkTime(date)) {
        return "weekend";
      }
    };
    gantt.templates.timeline_cell_class = function (item, date) {
      if (!gantt.isWorkTime(date)) {
        return "weekend";
      }
    };
  
    gantt.config.auto_scheduling = true;
    gantt.config.auto_scheduling_strict = true;
    gantt.config.auto_scheduling_compatibility = true;
  
    gantt.config.date_format = "%d-%m-%Y";
  
    // gantt.config.start_date = new Date(2023, 3, 1);
    // gantt.config.end_date = new Date(2023, 5, 1);

  }
  