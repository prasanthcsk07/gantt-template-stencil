import { formatDate } from '../events/formatDate';
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
}
