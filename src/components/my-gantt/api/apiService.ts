import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

export interface ChartData {
  // Define the structure of your chart data
}

export interface LinksData {
  // Define the structure of your links data
}

export interface Task {
  data?: ChartData;
  links?: LinksData;
}

export const fetchChartData = async (): Promise<ChartData> => {
  try {
    const response = await axios.get<ChartData>(`${BASE_URL}/chart`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chart:', error);
    throw error;
  }
};

export const fetchLinksData = async (): Promise<LinksData> => {
  try {
    const response = await axios.get<LinksData>(`${BASE_URL}/links`);
    return response.data;
  } catch (error) {
    console.error('Error fetching links:', error);
    throw error;
  }
};

export const postTaskData = async (task: any) => {
  try {
    await axios.post(`${BASE_URL}/chart`, task);
    console.log('Successfully posted data');
  } catch (error) {
    console.error('Error in post:', error);
  }
};

export const updateTaskData = async (id: number, task: any) => {
  try {
    let newTask = {...task, type: task.parent == 0 ? "project": ""}
    await axios.put(`${BASE_URL}/chart/${id}`, newTask);
    console.log(`${id} - Data successfully updated`);
  } catch (error) {
    console.error('Error:', error);
  }
};

export const deleteTaskData = async (id: number) => {
  try {
    await axios.delete(`${BASE_URL}/chart/${id}`);
    console.log(`${id} - Deleted successfully`);
  } catch (error) {
    console.error('Error:', error);
  }
};

export const postLinkData = async (link: any) => {
  try {
    await axios.post(`${BASE_URL}/links`, link);
    console.log('Link created:', link);
  } catch (error) {
    console.error('Error in post link:', error);
  }
};

export const deleteLinkData = async (id: number) => {
  try {
    await axios.delete(`${BASE_URL}/links/${id}`);
    console.log(`${id} - Deleted link successfully`);
  } catch (error) {
    console.error('Error:', error);
  }
};
