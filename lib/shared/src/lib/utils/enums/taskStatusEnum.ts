export enum TaskStatusValue {
    BLOCKED = 'blocked',
    COMPLETED = 'completed',
    LATE = 'late',
    DUE = 'due',
    ONTIME = 'onTime',
    CANCELLED= 'cancelled'
}

export enum TaskStatusLabel {
    BLOCKED = 'Blocked',
    COMPLETED = 'Completed',
    LATE = 'Late',
    DUE = 'Due',
    ONTIME = 'On Time',
    CANCELLED= 'Cancelled'
}

export enum TaskStatusId {
    BLOCKED = 4,
    COMPLETED = 5,
    LATE = 3,
    DUE = 2,
    ONTIME = 1,
    CANCELLED=6,
}

export const taskStatusEnum = [
    { id: TaskStatusId.ONTIME, value: TaskStatusValue.ONTIME, label: TaskStatusLabel.ONTIME },
    { id: TaskStatusId.DUE, value: TaskStatusValue.DUE, label: TaskStatusLabel.DUE },
    { id: TaskStatusId.LATE, value: TaskStatusValue.LATE, label: TaskStatusLabel.LATE },
    { id: TaskStatusId.COMPLETED, value: TaskStatusValue.COMPLETED, label: TaskStatusLabel.COMPLETED },
    { id: TaskStatusId.BLOCKED, value: TaskStatusValue.BLOCKED, label: TaskStatusLabel.BLOCKED },
    { id: TaskStatusId.CANCELLED, value: TaskStatusValue.CANCELLED, label: TaskStatusLabel.CANCELLED },
];

export const taskStatusEnumNoProject = [
    { id: TaskStatusId.ONTIME, value: TaskStatusValue.ONTIME, label: TaskStatusLabel.ONTIME },
    { id: TaskStatusId.DUE, value: TaskStatusValue.DUE, label: TaskStatusLabel.DUE },
    { id: TaskStatusId.LATE, value: TaskStatusValue.LATE, label: TaskStatusLabel.LATE },
    { id: TaskStatusId.COMPLETED, value: TaskStatusValue.COMPLETED, label: TaskStatusLabel.COMPLETED },
    { id: TaskStatusId.BLOCKED, value: TaskStatusValue.BLOCKED, label: TaskStatusLabel.BLOCKED },
    { id: TaskStatusId.CANCELLED, value: TaskStatusValue.CANCELLED, label: TaskStatusLabel.CANCELLED },
];