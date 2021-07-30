import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    likesCount?: true;
}
