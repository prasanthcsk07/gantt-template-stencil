export function getData() {
    const tasks = {
		data: [
			{id: 1, text: "Office itinerancy", open: true, type: "project"},
			{id: 2, text: "Office facing", start_date: "22-07-2024", duration: "20", parent: "1"},
			{id: 3, text: "Furniture installation", start_date: "22-07-2024", duration: "5", parent: "1"},
			{id: 4, text: "The employee relocation", start_date: "29-07-2024", duration: "15", parent: "1"},
			{id: 5, text: "Interior office", start_date: "29-07-2024", duration: "15", parent: "1"},
			{id: 6, text: "Air conditioners installation", start_date: "19-08-2024", duration: "2", parent: "1"},
			{id: 7, text: "Workplaces preparation", start_date: "21-08-2024", duration: "2", parent: "1"},
			{id: 8, text: "Preparing workplaces for us", start_date: "22-07-2024", duration: "10", parent: "1"},
			{id: 9, text: "Workplaces importation", start_date: "23-08-2024", duration: "1", parent: "1"},
			{id: 10, text: "Analysis", open: true, type: "project"},
			{id: 11, text: "Documentation creation", start_date: "26-08-2024", duration: "14", parent: "10"},
			{id: 12, text: "Software design", start_date: "26-08-2024", duration: "10", parent: "10"},
			{id: 13, text: "Interface setup", start_date: "13-09-2024", duration: "1", parent: "10"},
			{id: 14, text: "Development", open: true, type: "project"},
			{id: 15, text: "Develop System", start_date: "16-09-2024", duration: "5", parent: "14"},
			{id: 16, text: "Integrate System", start_date: "16-09-2024", duration: "15", parent: "14"},
			{id: 17, text: "Test", start_date: "07-10-2024", duration: "1", parent: "14"}
		],
		links: [
			{id: "1", source: "3", target: "4", type: "0"},
			{id: "2", source: "3", target: "5", type: "0"},
			{id: "3", source: "2", target: "6", type: "0"},
			{id: "4", source: "4", target: "6", type: "0"},
			{id: "5", source: "5", target: "6", type: "0"},
			{id: "6", source: "6", target: "7", type: "0"},
			{id: "7", source: "7", target: "9", type: "0"},
			{id: "8", source: "8", target: "9", type: "0"},
			{id: "9", source: "9", target: "10", type: "0"},
			{id: "10", source: "9", target: "11", type: "0"},
			{id: "11", source: "9", target: "12", type: "0"},
			{id: "12", source: "11", target: "13", type: "0"},
			{id: "13", source: "12", target: "13", type: "0"},
			{id: "14", source: "13", target: "14", type: "0"},
			{id: "15", source: "13", target: "15", type: "0"},
			{id: "16", source: "15", target: "17", type: "0"},
			{id: "17", source: "16", target: "17", type: "0"}
		],
    };
  
    return tasks;
  }