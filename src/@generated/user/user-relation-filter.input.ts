import { InputType, Field } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    is?: UserWhereInput;

    @Field(() => UserWhereInput, {
        nullable: true,
        description: undefined,
    })
    isNot?: UserWhereInput;
}
