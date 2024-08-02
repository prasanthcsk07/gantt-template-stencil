import { InputType,Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkPackageChildInput {
    @Field()
    nodeId: number;

    @Field()
    workPackageParentId: number;
  
    @Field()
    name: string;

    @Field()
    subgroup: string;

    @Field()
    asset: string;

    @Field()
    description: string;

    @Field()
    abbreviation: string;

    @Field()
    archived: boolean;
}
