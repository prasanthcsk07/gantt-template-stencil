import { CreateVehicleAttributeInput } from './create-vehicle-attribute';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVehicleAttributeInput extends PartialType(CreateVehicleAttributeInput) {
  @Field(() => Number)
  id: number;
}