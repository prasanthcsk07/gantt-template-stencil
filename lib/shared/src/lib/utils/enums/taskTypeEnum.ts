export enum TaskTypeValue {
    PROJECT = 'project',
    TASK = 'task',
    MILESTONE = 'milestone',
}

export enum TaskTypeLabel {
    PROJECT = 'Sum.',
    TASK = 'Task',
    MILESTONE = 'MS',
}

export enum TaskTypeId {
    PROJECT = 1,
    TASK = 2,
    MILESTONE = 3,
}

export const taskTypeEnum = [
    { id: TaskTypeId.PROJECT, value: TaskTypeValue.PROJECT, label: TaskTypeLabel.PROJECT },
    { id: TaskTypeId.TASK, value: TaskTypeValue.TASK, label: TaskTypeLabel.TASK },
    { id: TaskTypeId.MILESTONE, value: TaskTypeValue.MILESTONE, label: TaskTypeLabel.MILESTONE },
];

export const taskTypeEnumNoProject = [
    { id: TaskTypeId.TASK, value: TaskTypeValue.TASK, label: TaskTypeLabel.TASK },
    { id: TaskTypeId.MILESTONE, value: TaskTypeValue.MILESTONE, label: TaskTypeLabel.MILESTONE },
];