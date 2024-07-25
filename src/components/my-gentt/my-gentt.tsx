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

  componentDidLoad() {
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
      })
      .catch(error => {
        console.error('Error fetching chart:', error);
      });

    axios.get<LinksData>("http://localhost:8000/links")
      .then(response => response.data)
      .then(res => {
        task.links = res;
      })
      .catch(error => {
        console.error('Error fetching links:', error);
      });

    setTimeout(() => {
      gantt.parse(task);
      this.isLoading = false;
    }, 2000);


    
   gantt.attachEvent("onAfterTaskAdd", (id, task) => {
    let newData = {...task, end_date:"", start_date: this.formatDate(task.start_date),open:true,id:String(id)}
    axios.post("http://localhost:8000/chart",newData).then(res=>console.log("successfully post data")).catch(err=>console.log("Error in post"))
  });



  gantt.attachEvent("onAfterTaskUpdate", (id, task) => {
    // console.log(`Task updated: ${id}`, task);
    let newData = {...task, end_date:"", start_date: this.formatDate(task.start_date),open:true,id:String(id)}
    axios.put(`http://localhost:8000/chart/${id}`,newData).then(res=>console.log(id,"Data Successfully Updated")).catch(err=>console.log(err,"Error"))
  });


  gantt.attachEvent("onAfterTaskDelete", (id) => {
    axios.delete(`http://localhost:8000/chart/${id}`).then(res=>console.log(`${id}-Deleted Successfully`)).catch(err=>console.log(err))
  });

  gantt.attachEvent("onLinkCreated", (link) => {
    axios.post("http://localhost:8000/links",link).then(res=>console.log('Link created:', link)).catch(err=>console.log("Error in post Link"))
    return true; // Return true to confirm the link creation
  });
  
  gantt.attachEvent('onAfterLinkDelete', (id, link) => {
    axios.delete(`http://localhost:8000/links/${id}`).then(res=>console.log(`${id}-Deleted Link Successfully`)).catch(err=>console.log(err))
    return true; // Return true to confirm the link deletion
  });

  }

  render() {
    return (
      <div style={{position:"relative"}}>
        {this.isLoading && <div style={{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",zIndex:"999"}} id="skeleton_loader"></div>}
        <div id="gantt_here" style={{ width: '100%', height: '500px' }}></div>
      </div>
    );
  }
}
