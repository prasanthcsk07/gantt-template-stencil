import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateMartinreaMilestoneInput {
    @Field()
    nodeId: number;

    @Field()
    name: string;

    @Field()
    abbreviation: string;

    @Field()
    description: string;

    @Field()
    archived: boolean;
}