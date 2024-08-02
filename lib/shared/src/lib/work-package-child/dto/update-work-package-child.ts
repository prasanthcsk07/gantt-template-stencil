import { CreateWorkPackageChildInput } from './create-work-package-child';
import { InputType, Field,  PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkPackageChildInput extends PartialType(CreateWorkPackageChildInput) {
  @Field(() => Number)
  id: number;
}