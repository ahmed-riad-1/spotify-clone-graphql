import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateOrConnectWithoutfollowersInput } from './user-create-or-connect-withoutfollowers.input';

@InputType()
export class UserCreateManyWithoutFollowersInput {
    @Field(() => [UserCreateWithoutFollowersInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowersInput | Array<UserCreateWithoutFollowersInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowersInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfollowersInput
        | Array<UserCreateOrConnectWithoutfollowersInput>;
}
