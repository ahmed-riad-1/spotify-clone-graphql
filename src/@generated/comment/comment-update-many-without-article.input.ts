import { InputType, Field } from '@nestjs/graphql';
import { CommentCreateWithoutArticleInput } from './comment-create-without-article.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';
import { CommentUpdateWithWhereUniqueWithoutArticleInput } from './comment-update-with-where-unique-without-article.input';
import { CommentUpdateManyWithWhereWithoutArticleInput } from './comment-update-many-with-where-without-article.input';
import { CommentScalarWhereInput } from './comment-scalar-where.input';
import { CommentUpsertWithWhereUniqueWithoutArticleInput } from './comment-upsert-with-where-unique-without-article.input';
import { CommentCreateOrConnectWithoutArticleInput } from './comment-create-or-connect-without-article.input';

@InputType()
export class CommentUpdateManyWithoutArticleInput {
    @Field(() => [CommentCreateWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutArticleInput | Array<CommentCreateWithoutArticleInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    set?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    disconnect?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    delete?: CommentWhereUniqueInput | Array<CommentWhereUniqueInput>;

    @Field(() => [CommentUpdateWithWhereUniqueWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    update?:
        | CommentUpdateWithWhereUniqueWithoutArticleInput
        | Array<CommentUpdateWithWhereUniqueWithoutArticleInput>;

    @Field(() => [CommentUpdateManyWithWhereWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    updateMany?:
        | CommentUpdateManyWithWhereWithoutArticleInput
        | Array<CommentUpdateManyWithWhereWithoutArticleInput>;

    @Field(() => [CommentScalarWhereInput], {
        nullable: true,
        description: undefined,
    })
    deleteMany?: CommentScalarWhereInput | Array<CommentScalarWhereInput>;

    @Field(() => [CommentUpsertWithWhereUniqueWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    upsert?:
        | CommentUpsertWithWhereUniqueWithoutArticleInput
        | Array<CommentUpsertWithWhereUniqueWithoutArticleInput>;

    @Field(() => [CommentCreateOrConnectWithoutArticleInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | CommentCreateOrConnectWithoutArticleInput
        | Array<CommentCreateOrConnectWithoutArticleInput>;
}
