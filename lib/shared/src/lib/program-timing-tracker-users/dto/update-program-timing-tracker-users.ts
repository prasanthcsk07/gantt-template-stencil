import { CreateProgramTimingTrackerUsersInput } from './create-program-timing-tracker-users';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgramTimingTrackerUsersInput extends PartialType(CreateProgramTimingTrackerUsersInput) {
  @Field(() => Number)
  id: number;
}