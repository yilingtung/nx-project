import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Upload: any;
};

export type AuthPayload = {
  accessToken: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Category = {
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type Comment = {
  author: SimpleUser;
  authorId: Scalars['Int'];
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  mentionProducts?: Maybe<Array<CommentMentionProduct>>;
  mentionUsers?: Maybe<Array<CommentMentionUser>>;
  product: SimpleProduct;
  productId: Scalars['Int'];
  text: Scalars['String'];
  updatedAt: Scalars['Date'];
  voted?: Maybe<Scalars['Boolean']>;
  votes: Scalars['Int'];
};

export type CommentCreatedFields = {
  mentionProducts?: InputMaybe<Array<CommentMentionProductCreatedFields>>;
  mentionUsers?: InputMaybe<Array<CommentMentionUserCreatedFields>>;
  productId: Scalars['Int'];
  text: Scalars['String'];
};

export type CommentMentionProduct = {
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  length: Scalars['Int'];
  link: Scalars['String'];
  name: Scalars['String'];
  offset: Scalars['Int'];
};

export type CommentMentionProductCreatedFields = {
  length: Scalars['Int'];
  offset: Scalars['Int'];
  productId: Scalars['Int'];
};

export type CommentMentionUser = {
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  length: Scalars['Int'];
  link: Scalars['String'];
  name: Scalars['String'];
  offset: Scalars['Int'];
};

export type CommentMentionUserCreatedFields = {
  length: Scalars['Int'];
  offset: Scalars['Int'];
  userId: Scalars['Int'];
};

export type CursorMeta = {
  cursor: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type CursorPaginatedComments = {
  data: Array<Comment>;
  meta: CursorMeta;
};

export type CursorPaginatedProducts = {
  data: Array<Product>;
  meta: CursorMeta;
};

export type CursorPaginatedUsers = {
  data: Array<User>;
  meta: CursorMeta;
  self?: Maybe<User>;
};

export type Direction =
  | 'asc'
  | 'desc';

export type Mutation = {
  CreateComment?: Maybe<Comment>;
  CreateProduct?: Maybe<Product>;
  Follow?: Maybe<StatusPayload>;
  PlatformLogin?: Maybe<AuthPayload>;
  RefreshAccessToken?: Maybe<AuthPayload>;
  ResetPassword?: Maybe<StatusPayload>;
  SendPasswordResettingMail?: Maybe<StatusPayload>;
  SendVerifiedMail?: Maybe<StatusPayload>;
  ThridPartyLogin?: Maybe<AuthPayload>;
  Unfollow?: Maybe<StatusPayload>;
  UnvoteComment?: Maybe<StatusPayload>;
  UnvoteProduct?: Maybe<StatusPayload>;
  UpdateSetting?: Maybe<Setting>;
  UpdateUser?: Maybe<User>;
  Upload?: Maybe<UrlPayload>;
  View?: Maybe<StatusPayload>;
  VoteComment?: Maybe<StatusPayload>;
  VoteProduct?: Maybe<StatusPayload>;
};


export type MutationCreateCommentArgs = {
  createdFields: CommentCreatedFields;
};


export type MutationCreateProductArgs = {
  createdFields: ProductCreatedFields;
};


export type MutationFollowArgs = {
  userId: Scalars['Int'];
};


export type MutationPlatformLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRefreshAccessTokenArgs = {
  refreshToken: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  newPassword: Scalars['String'];
};


export type MutationSendPasswordResettingMailArgs = {
  email: Scalars['String'];
};


export type MutationSendVerifiedMailArgs = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  thirdPartyToken?: InputMaybe<Scalars['String']>;
  thirdPartyType?: InputMaybe<ThirdPartyType>;
};


export type MutationThridPartyLoginArgs = {
  token: Scalars['String'];
  type: ThirdPartyType;
};


export type MutationUnfollowArgs = {
  userId: Scalars['Int'];
};


export type MutationUnvoteCommentArgs = {
  commentId: Scalars['Int'];
};


export type MutationUnvoteProductArgs = {
  productId: Scalars['Int'];
};


export type MutationUpdateSettingArgs = {
  key: SettingKey;
  value: Scalars['Boolean'];
};


export type MutationUpdateUserArgs = {
  updatedFields: UserUpdateFields;
};


export type MutationUploadArgs = {
  file: Scalars['Upload'];
  type: UploadType;
};


export type MutationViewArgs = {
  productId: Scalars['Int'];
};


export type MutationVoteCommentArgs = {
  commentId: Scalars['Int'];
};


export type MutationVoteProductArgs = {
  productId: Scalars['Int'];
};

export type OffsetMeta = {
  currentPage: Scalars['Int'];
  lastPage: Scalars['Int'];
  perPage: Scalars['Int'];
  total: Scalars['Int'];
};

export type OffsetPaginatedProductGroups = {
  data: Array<ProductGroup>;
  meta: OffsetMeta;
};

export type OffsetPaginatedProducts = {
  data: Array<Product>;
  meta: OffsetMeta;
};

export type OffsetPaginatedSimpleUsers = {
  data: Array<SimpleUser>;
  meta: OffsetMeta;
};

export type Product = {
  categories: Array<Category>;
  commentCount: Scalars['Int'];
  cover: Scalars['String'];
  createdAt: Scalars['Date'];
  customId: Scalars['String'];
  id: Scalars['Int'];
  images?: Maybe<Array<ProductImage>>;
  intro: Scalars['String'];
  links?: Maybe<Array<ProductLink>>;
  logo: Scalars['String'];
  name: Scalars['String'];
  officialLink: Scalars['String'];
  publisher?: Maybe<User>;
  tags: Array<Tag>;
  updatedAt: Scalars['Date'];
  viProductCategorys?: Maybe<Array<ViProductCategory>>;
  viProductTags?: Maybe<Array<ViProductTag>>;
  views: Scalars['Int'];
  voted?: Maybe<Scalars['Boolean']>;
  votes: Scalars['Int'];
};

export type ProductCreatedFields = {
  categories?: InputMaybe<Array<Scalars['Int']>>;
  cover: Scalars['String'];
  customId: Scalars['String'];
  images?: InputMaybe<Array<ProductImageCreatedFields>>;
  intro: Scalars['String'];
  links?: InputMaybe<Array<ProductLinkCreatedFields>>;
  logo: Scalars['String'];
  name: Scalars['String'];
  officialLink: Scalars['String'];
  publishedAt: Scalars['String'];
  publisherEmail: Scalars['String'];
  tags?: InputMaybe<Array<Scalars['Int']>>;
};

export type ProductFilter = {
  categories?: InputMaybe<Array<Scalars['Int']>>;
  search?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['Int']>>;
};

export type ProductGroup = {
  data: Array<Product>;
  groupedValue: Scalars['String'];
};

export type ProductGroupBy =
  | 'day'
  | 'month';

export type ProductImage = {
  id: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type ProductImageCreatedFields = {
  type: Scalars['String'];
  url: Scalars['String'];
};

export type ProductLink = {
  id: Scalars['Int'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type ProductLinkCreatedFields = {
  type: Scalars['String'];
  url: Scalars['String'];
};

export type ProductOrderBy = {
  direction: Direction;
  field: ProductOrderByField;
};

export type ProductOrderByField =
  | 'publishedAt'
  | 'views'
  | 'votes';

export type Query = {
  AllComments?: Maybe<Array<Maybe<Comment>>>;
  Categories?: Maybe<Array<Maybe<Category>>>;
  Comments?: Maybe<CursorPaginatedComments>;
  FilterCategories?: Maybe<Array<Maybe<Category>>>;
  FilterTags?: Maybe<Array<Maybe<Tag>>>;
  Followers?: Maybe<CursorPaginatedUsers>;
  Followings?: Maybe<CursorPaginatedUsers>;
  Me?: Maybe<User>;
  Product?: Maybe<Product>;
  ProductGroups?: Maybe<OffsetPaginatedProductGroups>;
  Products?: Maybe<OffsetPaginatedProducts>;
  RandomProducts?: Maybe<Array<Maybe<SimpleProduct>>>;
  RandomUsers?: Maybe<Array<Maybe<SimpleUser>>>;
  SearchedUsers?: Maybe<OffsetPaginatedSimpleUsers>;
  Setting?: Maybe<Setting>;
  Tags?: Maybe<Array<Maybe<Tag>>>;
  User?: Maybe<User>;
  UserProductComments?: Maybe<CursorPaginatedComments>;
  UserVotedProducts?: Maybe<CursorPaginatedProducts>;
  Voters?: Maybe<CursorPaginatedUsers>;
};


export type QueryAllCommentsArgs = {
  productCustomId: Scalars['String'];
};


export type QueryCommentsArgs = {
  cursor?: Scalars['Int'];
  perPage?: Scalars['Int'];
  productCustomId: Scalars['String'];
};


export type QueryFilterCategoriesArgs = {
  search: Scalars['String'];
};


export type QueryFilterTagsArgs = {
  search: Scalars['String'];
};


export type QueryFollowersArgs = {
  cursor?: Scalars['Int'];
  customId: Scalars['String'];
  perPage?: Scalars['Int'];
};


export type QueryFollowingsArgs = {
  cursor?: Scalars['Int'];
  customId: Scalars['String'];
  perPage?: Scalars['Int'];
};


export type QueryProductArgs = {
  customId: Scalars['String'];
};


export type QueryProductGroupsArgs = {
  filter?: InputMaybe<ProductFilter>;
  groupBy?: ProductGroupBy;
  orderBy: ProductOrderBy;
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  orderBy?: InputMaybe<ProductOrderBy>;
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryRandomProductsArgs = {
  count?: Scalars['Int'];
  productId?: Scalars['Int'];
};


export type QueryRandomUsersArgs = {
  count?: Scalars['Int'];
};


export type QuerySearchedUsersArgs = {
  keyword?: Scalars['String'];
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
};


export type QueryUserArgs = {
  customId: Scalars['String'];
};


export type QueryUserProductCommentsArgs = {
  cursor?: Scalars['Int'];
  customId: Scalars['String'];
  perPage?: Scalars['Int'];
};


export type QueryUserVotedProductsArgs = {
  cursor?: Scalars['Int'];
  customId: Scalars['String'];
  perPage?: Scalars['Int'];
};


export type QueryVotersArgs = {
  cursor?: Scalars['Int'];
  customId: Scalars['String'];
  perPage?: Scalars['Int'];
};

export type Setting = {
  notificationComment: Scalars['Boolean'];
  notificationEmail: Scalars['Boolean'];
  notificationFollow: Scalars['Boolean'];
  notificationVote: Scalars['Boolean'];
};

export type SettingKey =
  | 'NOTIFICATION_COMMENT'
  | 'NOTIFICATION_EMAIL'
  | 'NOTIFICATION_FOLLOW'
  | 'NOTIFICATION_VOTE';

export type SimpleProduct = {
  cover: Scalars['String'];
  createdAt: Scalars['Date'];
  customId: Scalars['String'];
  id: Scalars['Int'];
  intro: Scalars['String'];
  logo: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
  views: Scalars['Int'];
  votes: Scalars['Int'];
};

export type SimpleUser = {
  avatar?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  customId: Scalars['String'];
  email: Scalars['String'];
  followed?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  intro?: Maybe<Scalars['String']>;
  isMe?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
};

export type SocialMedia = {
  id: Scalars['Int'];
  type: Scalars['String'];
  value: Scalars['String'];
};

export type SocialMediaUpdateFields = {
  type: Scalars['String'];
  value: Scalars['String'];
};

export type StatusPayload = {
  status: Scalars['String'];
};

export type Tag = {
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ThirdParty = {
  id: Scalars['Int'];
  thirdPartyId: Scalars['String'];
  type: Scalars['String'];
};

export type ThirdPartyType =
  | 'facebook'
  | 'google';

export type UploadType =
  | 'TMP'
  | 'USER_AVATAR'
  | 'USER_COVER';

export type UrlPayload = {
  url: Scalars['String'];
};

export type User = {
  avatar?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  customId: Scalars['String'];
  email: Scalars['String'];
  followed?: Maybe<Scalars['Boolean']>;
  id: Scalars['Int'];
  intro?: Maybe<Scalars['String']>;
  isMe?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['String']>;
  socialMedias: Array<SocialMedia>;
  tags: Array<Tag>;
  thirdParties: Array<ThirdParty>;
  viUserCategorys?: Maybe<Array<ViUserCategory>>;
  viUserTags?: Maybe<Array<ViUserTag>>;
};

export type UserUpdateFields = {
  avatar?: InputMaybe<Scalars['String']>;
  categories?: InputMaybe<Array<Scalars['Int']>>;
  cover?: InputMaybe<Scalars['String']>;
  customId?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['String']>;
  position?: InputMaybe<Scalars['String']>;
  socialMedias?: InputMaybe<Array<SocialMediaUpdateFields>>;
  tags?: InputMaybe<Array<Scalars['Int']>>;
};

export type ViProductCategory = {
  category: Category;
  createdAt: Scalars['Date'];
};

export type ViProductTag = {
  createdAt: Scalars['Date'];
  tag: Tag;
};

export type ViUserCategory = {
  category: Category;
  createdAt: Scalars['Date'];
};

export type ViUserTag = {
  createdAt: Scalars['Date'];
  tag: Tag;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { Me?: { id: number, customId: string, email: string, name?: string, avatar?: string, organization?: string, position?: string, createdAt?: any } };


export const MeDocument = gql`
    query Me {
  Me {
    id
    customId
    email
    name
    avatar
    organization
    position
    createdAt
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;