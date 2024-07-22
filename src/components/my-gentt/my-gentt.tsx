import { Component, h, Element, State } from '@stencil/core';
import axios from 'axios';

declare const gantt: any; 

@Component({
    tag: 'my-gentt',
    styleUrl: 'my-gentt.css',
    shadow: true,
})

export class MyGentt {
    @Element() el: HTMLElement;
    @State() isLoading: boolean = false;
  
    componentDidLoad() {
      const ganttScript = document.createElement('script');
      ganttScript.src = 'https://cdn.dhtmlx.com/gantt/edge/dhtmlxgantt.js';
  
      ganttScript.onload = () => {
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
  
  
      };
      document.head.appendChild(ganttScript);
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