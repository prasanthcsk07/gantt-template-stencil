import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkPackageParentInput {
    @Field()
    nodeId: number;
  
    @Field()
    name: string;
  
    @Field()
    abbreviation: string;
  
    @Field()
    asset: string;
  
    @Field()
    description: string;

    @Field()
    archived: boolean;
}
