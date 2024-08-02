import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProgramTimingTrackerInput {
    @Field({ nullable: true })
    programId?: number;

    @Field({nullable : true})
    businessUnitId?: number;

    @Field({ nullable: true })
    customerId?: number;

    @Field({ nullable: true })
    templateOwnerId?: number;

    @Field({nullable : true})
    programManagerId?: number;

    @Field({nullable : true})
    name?: string;

    @Field({nullable : true})
    description?: string;

    @Field({nullable : true})
    startDate?: string;

    @Field({nullable : true})
    finishDate?: string;

    @Field({nullable : true})
    status?: number;

    @Field({nullable : true})
    version?: string;

    @Field({ nullable: true })
    taskMode?: number;

    @Field({ nullable: true })
    calendar?: number;

    @Field({ nullable: true })
    type?: number;

    @Field({ nullable: true })
    parent?: number;

    @Field({nullable : true})
    versionExplanation?: string;

    @Field({ nullable: true })
    archived?: boolean;

    @Field({ nullable: true })
    quantityWP?: number;

    @Field({ nullable: true })
    partNumberRelated?: boolean;
}