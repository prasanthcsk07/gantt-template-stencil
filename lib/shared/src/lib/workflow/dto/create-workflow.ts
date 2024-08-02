import { InputType,Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkFlowInput {
    @Field()
    nodeId: number;

    @Field()
    workPackageParentId: number;

    @Field()
    workPackageChildId: number;
  
    @Field()
    name: string;

    @Field()
    description: string;

    @Field()
    abbreviation: string;

    @Field()
    archived: boolean;
}