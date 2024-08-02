import { CreateMartinreaMilestoneInput } from "./create-martinrea-milestone";
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMartinreaMilestoneInput extends PartialType(CreateMartinreaMilestoneInput) {
  @Field(() => Number)
  id: number;
}