import { CreateVehicleBrandInput } from './create-vehicle-brand';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVehicleBrandInput extends PartialType(CreateVehicleBrandInput) {
  @Field(() => Number)
  id: number;
}