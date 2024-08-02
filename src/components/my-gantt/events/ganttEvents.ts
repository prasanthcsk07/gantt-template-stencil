import { formatDate } from './formatDate';
import { postTaskData, updateTaskData, deleteTaskData, postLinkData, deleteLinkData } from '../api/apiService';

export function setupGanttEvents(gantt: any) {
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




  gantt.attachEvent("onBeforeAutoSchedule", function () {
		gantt.message("Recalculating project schedule...");
		return true;
	});
	gantt.attachEvent("onAfterTaskAutoSchedule", function (task, new_date, constraint, predecessor) {
		if(task && predecessor){
			gantt.message({
				text: "<b>" + task.text + "</b> has been rescheduled to " + gantt.templates.task_date(new_date) + " due to <b>" + predecessor.text + "</b> constraint",
				expire: 4000
			});
		}
	});



}
