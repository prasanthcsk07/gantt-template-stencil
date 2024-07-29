import { Component, h, Element, State } from '@stencil/core';
import axios from 'axios';
import 'dhtmlx-gantt'; // Importing the npm package

declare const gantt: any;

@Component({
  tag: 'my-gentt',
  styleUrl: 'my-gentt.css',
  shadow: true,
})
export class MyGentt {
  @Element() el: HTMLElement;
  @State() isLoading: boolean = false;

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }

  applyTaskStyles() {
    const tasks = gantt.getTaskByTime(); // Get all tasks
    tasks.forEach((task) => {
      const taskElement = this.el.shadowRoot.querySelector(`[data-task-id='${task.id}'] .gantt_task_progress_wrapper`);
      const taskElement2 = this.el.shadowRoot.querySelector(`[data-task-id='${task.id}'] .gantt_task_progress`);
      if (taskElement) {
        if (task.progress < 0.5 && task.progress > 0.2) {
          taskElement.classList.add('task-yellow');
          taskElement2.classList.add('task-yellow-progress');
        } else if (task.progress > 0.5) {
          taskElement.classList.add('task-green');
          taskElement2.classList.add('task-green-progress');
        } else if (task.progress < 0.2) {
          taskElement.classList.add('task-red');
          taskElement2.classList.add('task-red-progress');
        }
      }
    });
  }

  componentDidLoad() {
    gantt.plugins({
      quick_info: true,
      tooltip: true,
      critical_path: true,
      fullscreen: true // Ensure fullscreen plugin is activated
    });

    gantt.config.xml_date = "%Y-%m-%d %H:%i";
    gantt.init(this.el.shadowRoot.querySelector('#gantt_here'));

    interface ChartData {
      // Define the structure of your chart data
    }

    interface LinksData {
      // Define the structure of your links data
    }

    interface Task {
      data?: ChartData;
      links?: LinksData;
    }

    let task: Task = {};

    this.isLoading = true;

    axios.get<ChartData>("http://localhost:8000/chart")
      .then(response => response.data)
      .then(res => {
        task.data = res;
        gantt.parse(task);
        this.isLoading = false;
        this.applyTaskStyles();
      })
      .catch(error => {
        console.error('Error fetching chart:', error);
        this.isLoading = false;
      });

    axios.get<LinksData>("http://localhost:8000/links")
      .then(response => response.data)
      .then(res => {
        task.links = res;
      })
      .catch(error => {
        console.error('Error fetching links:', error);
      });

    gantt.attachEvent("onAfterTaskAdd", (id, task) => {
      let newData = { ...task, end_date: "", start_date: this.formatDate(task.start_date), open: true, id: String(id) };
      axios.post("http://localhost:8000/chart", newData)
        .then(() => {
          console.log("Successfully posted data");
          this.applyTaskStyles();
        })
        .catch(err => console.log("Error in post", err));
    });

    gantt.attachEvent("onAfterTaskUpdate", (id, task) => {
      let newData = { ...task, end_date: "", start_date: this.formatDate(task.start_date), open: true, id: String(id) };
      axios.put(`http://localhost:8000/chart/${id}`, newData)
        .then(() => {
          console.log(id, "Data successfully updated");
          this.applyTaskStyles();
        })
        .catch(err => console.log("Error", err));
    });

    gantt.attachEvent("onAfterTaskDelete", (id) => {
      axios.delete(`http://localhost:8000/chart/${id}`)
        .then(() => {
          console.log(`${id} - Deleted successfully`);
          this.applyTaskStyles();
        })
        .catch(err => console.log("Error", err));
    });

    gantt.attachEvent("onLinkCreated", (link) => {
      axios.post("http://localhost:8000/links", link)
        .then(() => console.log('Link created:', link))
        .catch(err => console.log("Error in post link", err));
      return true; // Return true to confirm the link creation
    });

    gantt.attachEvent('onAfterLinkDelete', (id, link) => {
      axios.delete(`http://localhost:8000/links/${id}`)
        .then(() => console.log(`${id} - Deleted link successfully`))
        .catch(err => console.log("Error", err));
      return true; // Return true to confirm the link deletion
    });

    gantt.attachEvent("onTemplatesReady", () => {
      const toggle = document.getElementById("i");
      toggle.className = "fa fa-expand gantt-fullscreen";
      gantt.toggleIcon = toggle;
      this.el.shadowRoot.appendChild(toggle);
      toggle.onclick = () => {
        gantt.ext.fullscreen.toggle();
      };
    });

    gantt.attachEvent("onExpand", () => {
      const icon = gantt.toggleIcon;
      if (icon) {
        icon.className = icon.className.replace("fa-expand", "fa-compress");
      }
    });

    gantt.attachEvent("onCollapse", () => {
      const icon = gantt.toggleIcon;
      if (icon) {
        icon.className = icon.className.replace("fa-compress", "fa-expand");
      }
    });

    // gantt.attachEvent("onTemplatesReady", () => {
    //   console.log("onTemplatesReady")
    //   const toggle = document.createElement("i");
    //   toggle.className = "fa fa-expand gantt-fullscreen";
    //   gantt.toggleIcon = toggle;
    //   this.el.shadowRoot.appendChild(toggle);
    //   toggle.onclick = () => {
    //     if (document.fullscreenElement) {
    //       document.exitFullscreen();
    //     } else {
    //       this.el.shadowRoot.querySelector('#gantt_here').requestFullscreen();
    //     }
    //   };
    // });
    
    document.addEventListener("fullscreenchange", () => {
      const icon = gantt.toggleIcon;
      if (document.fullscreenElement) {
        if (icon) icon.className = icon.className.replace("fa-expand", "fa-compress");
      } else {
        if (icon) icon.className = icon.className.replace("fa-compress", "fa-expand");
      }
    });


    const toggle = document.createElement("img");
    toggle.className = "fa fa-expand gantt-fullscreen";
    toggle.src = "https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-fullscreen-vector-icon-png-image_702532.jpg";
    toggle.style.height = "70px"
    toggle.style.zIndex = "1"
    toggle.style.bottom = "0"
    gantt.toggleIcon = toggle;
    this.el.shadowRoot.appendChild(toggle);
    toggle.onclick = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        this.applyTaskStyles();
      } else {
        this.el.shadowRoot.querySelector('#gantt_here').requestFullscreen();
        this.applyTaskStyles();
      }
    };
    
  }

  render() {
    return (
      <div>
        <div style={{ position: "relative" }}>
          {this.isLoading && <div style={{ position: "absolute", top: "0", left: "0", right: "0", bottom: "0", width: "100%", height: "100%", zIndex: "999" }} id="skeleton_loader"></div>}
          <div id="gantt_here" style={{ width: '100%', height: '500px' }}></div>
        </div>
      </div>
    );
  }
}
