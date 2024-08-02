export type TaskUserTypeEnum = {
    id: number;
    value: string;
    label: string;
    abbreviation: string;
}

export enum TaskUserTypeValue {
    SUSSESOR = 'sussesor',
    REGULAR = 'regular',
}

export enum TaskUserTypeLabel {
    SUSSESOR = 'Sussesor',
    REGULAR = 'Regular',
}

export enum TaskUserTypeId {
    SUSSESOR = 1,
    REGULAR = 2,
}

export const taskUserTypeEnum = [
    { id: TaskUserTypeId.SUSSESOR, value: TaskUserTypeValue.SUSSESOR, label: TaskUserTypeLabel.SUSSESOR },
    { id: TaskUserTypeId.REGULAR, value: TaskUserTypeValue.REGULAR, label: TaskUserTypeLabel.REGULAR },
];
