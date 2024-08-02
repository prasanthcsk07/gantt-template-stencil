import { CreateWorkFlowInput } from './create-workflow';
import { InputType, Field,  PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWorkFlowInput extends PartialType(CreateWorkFlowInput) {
  @Field(() => Number)
  id: number;
}