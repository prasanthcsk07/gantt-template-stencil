import { CreateProgramInput } from './create-program';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgramInput extends PartialType(CreateProgramInput) {
  @Field(() => Number)
  id: number;
}