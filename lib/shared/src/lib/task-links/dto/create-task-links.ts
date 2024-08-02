import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskLinksInput {
    @Field()
    sourceTaskId: number;

    @Field()
    targetTaskId: number;

    @Field()
    type: number;

    @Field({ nullable: true })
    action?: string;
}