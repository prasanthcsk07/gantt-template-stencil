// setGanttPlugins.ts
export function setGanttPlugins(gantt) {
    gantt.plugins({
      quick_info: true,
      tooltip: true,
      critical_path: true,
      fullscreen: true,
      multiselect: true,
      auto_scheduling: true,
			marker: true
    });
  }
  