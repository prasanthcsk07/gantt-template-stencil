import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'gantt-control',
  styleUrl: 'gantt-control.css',
  shadow: true,
})
export class GanttControl {
  @Event() zoomIn: EventEmitter<void>;
  @Event() zoomOut: EventEmitter<void>;
  @Event() setZoomLevel: EventEmitter<string>;
  @Event() toggleCriticalPath: EventEmitter<void>;

  handleZoomIn() {
    this.zoomIn.emit();
  }

  handleZoomOut() {
    this.zoomOut.emit();
  }

  handleZoomChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.setZoomLevel.emit(target.value);
  }

  handleToggleCriticalPath(event: Event) {
    event.preventDefault();
    this.toggleCriticalPath.emit();
  }

  render() {
    return (
      <form class="gantt_control">
        <input type="button" value="Zoom In" onClick={() => this.handleZoomIn()} />
        <input type="button" value="Zoom Out" onClick={() => this.handleZoomOut()} />
        <button onClick={(event) => this.handleToggleCriticalPath(event)}>Show Critical Path</button>
        {['day', 'week', 'month', 'quarter', 'year'].map(scale => (
          <span key={scale}>
            <input 
              type="radio" 
              id={`scale-${scale}`} 
              class="gantt_radio" 
              name="scale" 
              value={scale} 
              onClick={(event) => this.handleZoomChange(event)} 
            />
            <label htmlFor={`scale-${scale}`}>{`${scale.charAt(0).toUpperCase() + scale.slice(1)} scale`}</label>
          </span>
        ))}
      </form>
    );
  }
}
