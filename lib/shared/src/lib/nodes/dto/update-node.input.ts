import { CreateNodeInput } from './create-node.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNodeInput extends PartialType(CreateNodeInput) {
  @Field(() => Number)
  id: number;
}