import { CreateProgramTimingTrackerInput } from './create-program-timing-tracker';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgramTimingTrackerInput extends PartialType(CreateProgramTimingTrackerInput) {
  @Field(() => Number)
  id: number;
}