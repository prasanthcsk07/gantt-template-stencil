export enum PttStatusValue {
    DRAFT = 'draft',
    RELEASED = 'released',
    ARCHIVED = 'archived',
}

export enum PttStatusLabel {
    DRAFT = 'Draft',
    RELEASED = 'Rel.',
    ARCHIVED = 'Arch.',
}

export enum PttStatusId {
    DRAFT = 1,
    RELEASED = 2,
    ARCHIVED = 3,
}

export const pttStatusEnum = [
    { id: PttStatusId.DRAFT, value: PttStatusValue.DRAFT, label: PttStatusLabel.DRAFT },
    { id: PttStatusId.RELEASED, value: PttStatusValue.RELEASED, label: PttStatusLabel.RELEASED },
    { id: PttStatusId.ARCHIVED, value: PttStatusValue.ARCHIVED, label: PttStatusLabel.ARCHIVED },
];
