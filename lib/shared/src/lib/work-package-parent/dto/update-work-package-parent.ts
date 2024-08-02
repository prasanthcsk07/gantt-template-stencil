import { CreateWorkPackageParentInput } from "./create-work-package-parent";
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkPackageParentInput extends PartialType(CreateWorkPackageParentInput) {
  @Field(() => Number)
  id: number;
}