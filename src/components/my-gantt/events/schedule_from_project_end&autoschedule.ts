export function projectEndAndAutoschedule(gantt){
    gantt.templates.scale_cell_class = function (date) {
        if (!gantt.isWorkTime(date)) {
            return "weekend";
        }
    };
    gantt.templates.timeline_cell_class = function (item, date) {
        if (!gantt.isWorkTime(date)) {
            return "weekend";
        }
    };

    gantt.config.work_time = true;

    gantt.config.auto_scheduling = true;
    gantt.config.auto_scheduling_strict = true;


    gantt.config.schedule_from_end = true;
    gantt.config.project_end = new Date(2024, 4, 15);
    gantt.addMarker({
        start_date: gantt.config.project_end,
        text: "project end"
    });

    gantt.config.date_format = "%d-%m-%Y";

    gantt.config.fit_tasks = true;

    var textEditor = { type: "text", map_to: "text" };
    var dateEditor = { type: "date", map_to: "start_date", min: new Date(2023, 0, 1), max: new Date(2025, 0, 1) };
    var durationEditor = { type: "number", map_to: "duration", min: 0, max: 100 };
    var constraintTypeEditor = {
        type: "select", map_to: "constraint_type", options: [
            { key: "asap", label: gantt.locale.labels.asap },
            { key: "alap", label: gantt.locale.labels.alap },
            { key: "snet", label: gantt.locale.labels.snet },
            { key: "snlt", label: gantt.locale.labels.snlt },
            { key: "fnet", label: gantt.locale.labels.fnet },
            { key: "fnlt", label: gantt.locale.labels.fnlt },
            { key: "mso", label: gantt.locale.labels.mso },
            { key: "mfo", label: gantt.locale.labels.mfo }
        ]
    };
    var constraintDateEditor = { type: "date", map_to: "constraint_date", min: new Date(2023, 0, 1), max: new Date(2025, 0, 1) };

    gantt.config.columns = [
        { name: "text", tree: true, resize: true, width: 150, editor: textEditor },
        { name: "start_date", align: "center", resize: true, width: 150, editor: dateEditor },
        { name: "duration", align: "center", width: 80, resize: true, editor: durationEditor },
        {
            name: "constraint_type", align: "center", width: 100, template: function (task) {
                return gantt.locale.labels[gantt.getConstraintType(task)];
            }, resize: true, editor: constraintTypeEditor
        },
        {
            name: "constraint_date", align: "center", width: 120, template: function (task) {
                var constraintTypes = gantt.config.constraint_types;

                if (task.constraint_date && task.constraint_type != constraintTypes.ASAP && task.constraint_type != constraintTypes.ALAP) {
                    return gantt.templates.task_date(task.constraint_date);
                }
                return "";
            }, resize: true, editor: constraintDateEditor
        },
        { name: "add", width: 44 }
    ];

    function renderDiv(task, date, className) {
        var el = document.createElement('div');
        el.className = className;
        var sizes = gantt.getTaskPosition(task, date);
        el.style.left = sizes.left + 'px';
        el.style.top = sizes.top + 'px';
        return el;
    }

    gantt.addTaskLayer(function draw_deadline(task) {
        var constraintType = gantt.getConstraintType(task);
        var types = gantt.config.constraint_types;
        if (constraintType != types.ASAP && constraintType != types.ALAP && task.constraint_date) {
            var dates = gantt.getConstraintLimitations(task);

            var els = document.createElement("div");

            if (dates.earliestStart) {
                els.appendChild(renderDiv(task, dates.earliestStart, 'constraint-marker earliest-start'));
            }

            if (dates.latestEnd) {
                els.appendChild(renderDiv(task, dates.latestEnd, 'constraint-marker latest-end'));
            }

            els.title = gantt.locale.labels[constraintType] + " " + gantt.templates.task_date(task.constraint_date);

            if (els.children.length)
                return els;
        }
        return false;
    });

    gantt.config.lightbox.sections = [
        { name: "description", height: 38, map_to: "text", type: "textarea", focus: true },
        { name: "constraint", type: "constraint" },
        { name: "time", type: "duration", map_to: "auto" }
    ];

    gantt.attachEvent("onAfterTaskAutoSchedule", function (task, new_date, link, predecessor) {
        var reason = "";
        if (predecessor) {
            reason = predecessor.text;
        } else {
            var constraint = gantt.getConstraintType(task);
            reason = gantt.locale.labels[constraint];
        }
        var predecessor = predecessor ? predecessor : { text: task.constraint_type };
        console.log("<b>" + task.text + "</b> has been rescheduled to " + gantt.templates.task_date(new_date) + " due to <b>" + reason + "</b> constraint");
    });

    gantt.message({ text: "Project is scheduled as late as possible from the project end date", expire: -1 });
}