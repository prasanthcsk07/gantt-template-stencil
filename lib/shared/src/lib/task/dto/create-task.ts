import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
    @Field(() => Float, { nullable: true })
    ganttId?: number;

    @Field({ nullable: true })
    programTimingTrackerId: number;

    @Field({ nullable: true })
    workPackageChildId: number;

    @Field({ nullable: true })
    rolesId: number;

    @Field({ nullable: true })
    wbsCode: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    startDate: string;

    @Field({ nullable: true })
    finishDate?: string;

    @Field({ nullable: true })
    actualStartDate?: string;

    @Field({ nullable: true })
    actualFinishDate?: string;

    @Field({ nullable: true })
    duration: number;

    @Field({ nullable: true })
    unitTime: number;

    @Field({ nullable: true })
    parent?: number;

    @Field({ nullable: true })
    index: number;

    @Field({ nullable: true })
    notes?: string;

    @Field({ nullable: true })
    workPackage?: string;

    @Field({ nullable: true })
    mandatoryAttachments?: boolean;

    @Field({ nullable: true })
    requirePredecessor?: boolean;

    @Field({ nullable: true })
    taskDoesNotApply?: boolean;

    @Field({ nullable: true })
    assigne?: string;

    @Field(() => [Int], { nullable: true })
    assignes?: number[];

    @Field(() => [Int], { nullable: true })
    approvers?: number[];

    @Field({ nullable: true })
    lagDays?: number;

    @Field({ nullable: true })
    workDays?: number;

    @Field({ nullable: true })
    progress?: number;

    @Field({ nullable: true })
    baseLineStart?: string;

    @Field({ nullable: true })
    baseLineFinish?: string;

    @Field({ nullable: true })
    predecessors?: string;

    @Field({ nullable: true })
    autoScheduleType?: number;

    @Field({ nullable: true })
    taskType?: number;

    @Field({ nullable: true })
    color: string;

    @Field({ nullable: true })
    isBold: boolean;

    @Field({ nullable: true })
    requireApprover?: boolean;

    // #region -Templates-
    @Field({ nullable: true })
    isMultiplier: boolean;
    // #endregion

    @Field({ nullable: true })
    taskId?: number;

    @Field({ nullable: true })
    action?: string;

    @Field({ nullable: true })
    taskStatus?: number;
}
