import { gantt } from "dhtmlx-gantt";

export function   initZoom() {
    function quarterLabel(date) {
      var month = date.getMonth();
      var q_num;

      if (month >= 9) {
        q_num = 4;
      } else if (month >= 6) {
        q_num = 3;
      } else if (month >= 3) {
        q_num = 2;
      } else {
        q_num = 1;
      }

      return "Q" + q_num;
    }

    gantt.ext.zoom.init({
      levels: [
        {
          name: 'Hours',
          scale_height: 60,
          min_column_width: 30,
          scales: [
            { unit: 'day', step: 1, format: '%d %M' },
            { unit: 'hour', step: 1, format: '%H' }
          ]
        },
        {
          name: 'Days',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: 'week', step: 1, format: 'Week #%W' },
            { unit: 'day', step: 1, format: '%d %M' }
          ]
        },
        {
          name: 'Months',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: "month", step: 1, format: '%F' },
            { unit: 'week', step: 1, format: '#%W' }
          ]
        },
        {
          name: 'Years',
          scale_height: 60,
          min_column_width: 70,
          scales: [
            { unit: "year", step: 1, format: '%Y' },
            { unit: "quarter", step: 1, format: quarterLabel },
            { unit: 'month', step: 1, format: '%F' }
          ]
        }
      ]
    });
  }