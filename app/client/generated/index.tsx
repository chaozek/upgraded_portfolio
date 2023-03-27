// THIS IS A GENERATED FILE, use `yarn codegen` to regenerate
/* tslint:disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  Upload: any;
};

export type Component = {
  __typename?: 'Component';
  createdAt?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  parentName?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['Boolean']>;
  texts?: Maybe<Array<Maybe<Text>>>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type ComponentCreation = {
  name?: InputMaybe<Scalars['String']>;
  parentName?: InputMaybe<Scalars['String']>;
  texts?: InputMaybe<CreateSpecificComponent>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentToRender = {
  __typename?: 'ComponentToRender';
  component: Scalars['String'];
  id: Scalars['ID'];
  isUserCreated?: Maybe<Scalars['Boolean']>;
  pageName?: Maybe<Scalars['String']>;
  show?: Maybe<Scalars['Boolean']>;
};

export type ComponentToRenderInput = {
  component: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  isUserCreated?: InputMaybe<Scalars['Boolean']>;
  pageName?: InputMaybe<Scalars['String']>;
  show?: InputMaybe<Scalars['Boolean']>;
};

export type Image = {
  __typename?: 'Image';
  component?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  specificLoc?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComponentToPage: PageComponent;
  addComponentToRender: PageComponent;
  createComponent?: Maybe<PageComponent>;
  createTextsToComponent?: Maybe<PageComponent>;
  deleteImage?: Maybe<Scalars['Boolean']>;
  deletePage?: Maybe<Scalars['String']>;
  editComponentPage: PageComponent;
  imageUpload: Image;
  showOrHideComponentOnPage: PageComponent;
  updateOrderInComponents?: Maybe<PageComponent>;
};


export type MutationAddComponentToPageArgs = {
  component?: InputMaybe<ComponentCreation>;
  isUserCreated?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['String']>;
  textOrder?: InputMaybe<Scalars['String']>;
};


export type MutationAddComponentToRenderArgs = {
  component?: InputMaybe<Scalars['String']>;
  pageName?: InputMaybe<Scalars['String']>;
};


export type MutationCreateComponentArgs = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  parentName?: InputMaybe<Scalars['String']>;
  texts?: InputMaybe<Array<InputMaybe<TextCreateInput>>>;
  title?: InputMaybe<Scalars['String']>;
};


export type MutationCreateTextsToComponentArgs = {
  name: Scalars['String'];
  page?: InputMaybe<Scalars['String']>;
  textOrder: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteImageArgs = {
  Id?: InputMaybe<Scalars['String']>;
};


export type MutationDeletePageArgs = {
  page?: InputMaybe<Scalars['String']>;
};


export type MutationEditComponentPageArgs = {
  component?: InputMaybe<EditComponentPage>;
  page?: InputMaybe<Scalars['String']>;
  textOrder?: InputMaybe<Scalars['String']>;
};


export type MutationImageUploadArgs = {
  component?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  specificLoc?: InputMaybe<Scalars['String']>;
};


export type MutationShowOrHideComponentOnPageArgs = {
  name?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  show?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateOrderInComponentsArgs = {
  componentsToRender?: InputMaybe<Array<InputMaybe<ComponentToRenderInput>>>;
};

export type PageComponent = {
  __typename?: 'PageComponent';
  components?: Maybe<Array<Maybe<Component>>>;
  componentsToRender?: Maybe<Array<Maybe<ComponentToRender>>>;
  id?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  componentImages?: Maybe<Array<Maybe<Image>>>;
  componentImagesMoreComponents?: Maybe<Array<Maybe<Image>>>;
  components?: Maybe<Array<Component>>;
  componentsToRender?: Maybe<Array<Maybe<ComponentToRender>>>;
  images?: Maybe<Array<Maybe<Image>>>;
  pageComponent?: Maybe<PageComponent>;
};


export type QueryComponentImagesArgs = {
  component?: InputMaybe<Scalars['String']>;
};


export type QueryComponentImagesMoreComponentsArgs = {
  component?: InputMaybe<Scalars['String']>;
};


export type QueryComponentsToRenderArgs = {
  pageName?: InputMaybe<Scalars['String']>;
};


export type QueryPageComponentArgs = {
  page?: InputMaybe<Scalars['String']>;
};

export type Text = {
  __typename?: 'Text';
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  textOrder: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type TextCreateInput = {
  description?: InputMaybe<Scalars['String']>;
  textOrder?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreateSpecificComponent = {
  description?: InputMaybe<Scalars['String']>;
  textOrder?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type EditComponentPage = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  texts?: InputMaybe<EditSpecificComponent>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditSpecificComponent = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  textOrder?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type EditSpecificText = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ImageUploadMutationVariables = Exact<{
  file: Scalars['Upload'];
  component?: InputMaybe<Scalars['String']>;
  specificLoc?: InputMaybe<Scalars['String']>;
}>;


export type ImageUploadMutation = { __typename?: 'Mutation', imageUpload: { __typename?: 'Image', component?: string | null, image?: string | null, specificLoc?: string | null } };

export type CreateTextsToComponentMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  textOrder: Scalars['String'];
  name: Scalars['String'];
}>;


export type CreateTextsToComponentMutation = { __typename?: 'Mutation', createTextsToComponent?: { __typename?: 'PageComponent', page?: string | null, id?: string | null, components?: Array<{ __typename?: 'Component', updatedAt?: string | null, title?: string | null, page?: string | null, name?: string | null, id: string, createdAt?: string | null, texts?: Array<{ __typename?: 'Text', title: string, description?: string | null, id: string, textOrder: string } | null> | null } | null> | null, componentsToRender?: Array<{ __typename?: 'ComponentToRender', component: string, isUserCreated?: boolean | null, show?: boolean | null, id: string, pageName?: string | null } | null> | null } | null };

export type DeleteImageMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']>;
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', deleteImage?: boolean | null };

export type CreateComponentMutationVariables = Exact<{
  name: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  texts?: InputMaybe<Array<InputMaybe<TextCreateInput>> | InputMaybe<TextCreateInput>>;
  page?: InputMaybe<Scalars['String']>;
  parentName: Scalars['String'];
}>;


export type CreateComponentMutation = { __typename?: 'Mutation', createComponent?: { __typename?: 'PageComponent', id?: string | null, page?: string | null, components?: Array<{ __typename?: 'Component', id: string, page?: string | null, name?: string | null, title?: string | null, updatedAt?: string | null, createdAt?: string | null, parentName?: string | null, texts?: Array<{ __typename?: 'Text', id: string, title: string, description?: string | null, updatedAt?: string | null, createdAt?: string | null, textOrder: string } | null> | null } | null> | null, componentsToRender?: Array<{ __typename?: 'ComponentToRender', component: string, isUserCreated?: boolean | null, show?: boolean | null, id: string, pageName?: string | null } | null> | null } | null };

export type AddComponentToPageMutationVariables = Exact<{
  component?: InputMaybe<ComponentCreation>;
  page?: InputMaybe<Scalars['String']>;
  textOrder?: InputMaybe<Scalars['String']>;
}>;


export type AddComponentToPageMutation = { __typename?: 'Mutation', addComponentToPage: { __typename?: 'PageComponent', page?: string | null, components?: Array<{ __typename?: 'Component', page?: string | null, name?: string | null, title?: string | null, updatedAt?: string | null, createdAt?: string | null, parentName?: string | null, texts?: Array<{ __typename?: 'Text', title: string, description?: string | null, updatedAt?: string | null, createdAt?: string | null, textOrder: string } | null> | null } | null> | null, componentsToRender?: Array<{ __typename?: 'ComponentToRender', component: string, isUserCreated?: boolean | null, show?: boolean | null, id: string, pageName?: string | null } | null> | null } };

export type EditComponentPageMutationVariables = Exact<{
  component?: InputMaybe<EditComponentPage>;
  textOrder?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
}>;


export type EditComponentPageMutation = { __typename?: 'Mutation', editComponentPage: { __typename?: 'PageComponent', page?: string | null, id?: string | null, componentsToRender?: Array<{ __typename?: 'ComponentToRender', component: string, isUserCreated?: boolean | null, show?: boolean | null, id: string, pageName?: string | null } | null> | null, components?: Array<{ __typename?: 'Component', createdAt?: string | null, id: string, name?: string | null, page?: string | null, title?: string | null, texts?: Array<{ __typename?: 'Text', id: string, title: string, textOrder: string, description?: string | null, updatedAt?: string | null, createdAt?: string | null } | null> | null } | null> | null } };

export type ShowOrHideComponentOnPageMutationVariables = Exact<{
  page?: InputMaybe<Scalars['String']>;
  show?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
}>;


export type ShowOrHideComponentOnPageMutation = { __typename?: 'Mutation', showOrHideComponentOnPage: { __typename?: 'PageComponent', components?: Array<{ __typename?: 'Component', show?: boolean | null, page?: string | null, name?: string | null } | null> | null } };

export type AddComponentToRenderMutationVariables = Exact<{
  component?: InputMaybe<Scalars['String']>;
  pageName?: InputMaybe<Scalars['String']>;
}>;


export type AddComponentToRenderMutation = { __typename?: 'Mutation', addComponentToRender: { __typename?: 'PageComponent', id?: string | null, page?: string | null, components?: Array<{ __typename?: 'Component', createdAt?: string | null, name?: string | null, page?: string | null, parentName?: string | null } | null> | null, componentsToRender?: Array<{ __typename?: 'ComponentToRender', component: string, id: string, pageName?: string | null, show?: boolean | null, isUserCreated?: boolean | null } | null> | null } };

export type UpdateOrderInComponentsMutationVariables = Exact<{
  componentsToRender?: InputMaybe<Array<InputMaybe<ComponentToRenderInput>> | InputMaybe<ComponentToRenderInput>>;
}>;


export type UpdateOrderInComponentsMutation = { __typename?: 'Mutation', updateOrderInComponents?: { __typename?: 'PageComponent', id?: string | null, page?: string | null, componentsToRender?: Array<{ __typename?: 'ComponentToRender', pageName?: string | null, id: string, component: string, isUserCreated?: boolean | null, show?: boolean | null } | null> | null, components?: Array<{ __typename?: 'Component', name?: string | null, page?: string | null } | null> | null } | null };

export type QueryQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryQuery = { __typename?: 'Query', components?: Array<{ __typename?: 'Component', id: string, name?: string | null, title?: string | null, updatedAt?: string | null, createdAt?: string | null, texts?: Array<{ __typename?: 'Text', id: string, title: string, textOrder: string, description?: string | null, updatedAt?: string | null, createdAt?: string | null } | null> | null }> | null };

export type PageComponentQueryVariables = Exact<{
  page?: InputMaybe<Scalars['String']>;
}>;


export type PageComponentQuery = { __typename?: 'Query', pageComponent?: { __typename?: 'PageComponent', page?: string | null, componentsToRender?: Array<{ __typename?: 'ComponentToRender', component: string, isUserCreated?: boolean | null, show?: boolean | null, id: string, pageName?: string | null } | null> | null, components?: Array<{ __typename?: 'Component', id: string, name?: string | null, page?: string | null, title?: string | null, updatedAt?: string | null, parentName?: string | null, show?: boolean | null, texts?: Array<{ __typename?: 'Text', createdAt?: string | null, description?: string | null, id: string, title: string, updatedAt?: string | null, textOrder: string } | null> | null } | null> | null } | null };

export type ComponentImagesQueryVariables = Exact<{
  component?: InputMaybe<Scalars['String']>;
}>;


export type ComponentImagesQuery = { __typename?: 'Query', componentImages?: Array<{ __typename?: 'Image', id?: string | null, image?: string | null, component?: string | null, specificLoc?: string | null } | null> | null };

export type ComponentsToRenderQueryVariables = Exact<{
  pageName?: InputMaybe<Scalars['String']>;
}>;


export type ComponentsToRenderQuery = { __typename?: 'Query', componentsToRender?: Array<{ __typename?: 'ComponentToRender', component: string, id: string, isUserCreated?: boolean | null, show?: boolean | null, pageName?: string | null } | null> | null };

export type ComponentImagesMoreComponentsQueryVariables = Exact<{
  component?: InputMaybe<Scalars['String']>;
}>;


export type ComponentImagesMoreComponentsQuery = { __typename?: 'Query', componentImagesMoreComponents?: Array<{ __typename?: 'Image', component?: string | null, id?: string | null, specificLoc?: string | null, image?: string | null } | null> | null };


export const ImageUploadDocument = gql`
    mutation ImageUpload($file: Upload!, $component: String, $specificLoc: String) {
  imageUpload(file: $file, component: $component, specificLoc: $specificLoc) {
    component
    image
    specificLoc
  }
}
    `;
export type ImageUploadMutationFn = Apollo.MutationFunction<ImageUploadMutation, ImageUploadMutationVariables>;

/**
 * __useImageUploadMutation__
 *
 * To run a mutation, you first call `useImageUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useImageUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [imageUploadMutation, { data, loading, error }] = useImageUploadMutation({
 *   variables: {
 *      file: // value for 'file'
 *      component: // value for 'component'
 *      specificLoc: // value for 'specificLoc'
 *   },
 * });
 */
export function useImageUploadMutation(baseOptions?: Apollo.MutationHookOptions<ImageUploadMutation, ImageUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ImageUploadMutation, ImageUploadMutationVariables>(ImageUploadDocument, options);
      }
export type ImageUploadMutationHookResult = ReturnType<typeof useImageUploadMutation>;
export type ImageUploadMutationResult = Apollo.MutationResult<ImageUploadMutation>;
export type ImageUploadMutationOptions = Apollo.BaseMutationOptions<ImageUploadMutation, ImageUploadMutationVariables>;
export const CreateTextsToComponentDocument = gql`
    mutation CreateTextsToComponent($title: String, $page: String, $textOrder: String!, $name: String!) {
  createTextsToComponent(
    title: $title
    page: $page
    textOrder: $textOrder
    name: $name
  ) {
    components {
      updatedAt
      title
      texts {
        title
        description
        id
        textOrder
      }
      page
      name
      id
      createdAt
    }
    page
    componentsToRender {
      component
      isUserCreated
      show
      id
      pageName
    }
    id
  }
}
    `;
export type CreateTextsToComponentMutationFn = Apollo.MutationFunction<CreateTextsToComponentMutation, CreateTextsToComponentMutationVariables>;

/**
 * __useCreateTextsToComponentMutation__
 *
 * To run a mutation, you first call `useCreateTextsToComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTextsToComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTextsToComponentMutation, { data, loading, error }] = useCreateTextsToComponentMutation({
 *   variables: {
 *      title: // value for 'title'
 *      page: // value for 'page'
 *      textOrder: // value for 'textOrder'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateTextsToComponentMutation(baseOptions?: Apollo.MutationHookOptions<CreateTextsToComponentMutation, CreateTextsToComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTextsToComponentMutation, CreateTextsToComponentMutationVariables>(CreateTextsToComponentDocument, options);
      }
export type CreateTextsToComponentMutationHookResult = ReturnType<typeof useCreateTextsToComponentMutation>;
export type CreateTextsToComponentMutationResult = Apollo.MutationResult<CreateTextsToComponentMutation>;
export type CreateTextsToComponentMutationOptions = Apollo.BaseMutationOptions<CreateTextsToComponentMutation, CreateTextsToComponentMutationVariables>;
export const DeleteImageDocument = gql`
    mutation DeleteImage($id: String) {
  deleteImage(Id: $id)
}
    `;
export type DeleteImageMutationFn = Apollo.MutationFunction<DeleteImageMutation, DeleteImageMutationVariables>;

/**
 * __useDeleteImageMutation__
 *
 * To run a mutation, you first call `useDeleteImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageMutation, { data, loading, error }] = useDeleteImageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImageMutation, DeleteImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImageMutation, DeleteImageMutationVariables>(DeleteImageDocument, options);
      }
export type DeleteImageMutationHookResult = ReturnType<typeof useDeleteImageMutation>;
export type DeleteImageMutationResult = Apollo.MutationResult<DeleteImageMutation>;
export type DeleteImageMutationOptions = Apollo.BaseMutationOptions<DeleteImageMutation, DeleteImageMutationVariables>;
export const CreateComponentDocument = gql`
    mutation CreateComponent($name: String!, $title: String, $texts: [TextCreateInput], $page: String, $parentName: String!) {
  createComponent(
    name: $name
    title: $title
    texts: $texts
    page: $page
    parentName: $parentName
  ) {
    components {
      id
      page
      name
      title
      texts {
        id
        title
        description
        updatedAt
        createdAt
        textOrder
      }
      updatedAt
      createdAt
      parentName
    }
    componentsToRender {
      component
      isUserCreated
      show
      id
      pageName
    }
    id
    page
  }
}
    `;
export type CreateComponentMutationFn = Apollo.MutationFunction<CreateComponentMutation, CreateComponentMutationVariables>;

/**
 * __useCreateComponentMutation__
 *
 * To run a mutation, you first call `useCreateComponentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateComponentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createComponentMutation, { data, loading, error }] = useCreateComponentMutation({
 *   variables: {
 *      name: // value for 'name'
 *      title: // value for 'title'
 *      texts: // value for 'texts'
 *      page: // value for 'page'
 *      parentName: // value for 'parentName'
 *   },
 * });
 */
export function useCreateComponentMutation(baseOptions?: Apollo.MutationHookOptions<CreateComponentMutation, CreateComponentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateComponentMutation, CreateComponentMutationVariables>(CreateComponentDocument, options);
      }
export type CreateComponentMutationHookResult = ReturnType<typeof useCreateComponentMutation>;
export type CreateComponentMutationResult = Apollo.MutationResult<CreateComponentMutation>;
export type CreateComponentMutationOptions = Apollo.BaseMutationOptions<CreateComponentMutation, CreateComponentMutationVariables>;
export const AddComponentToPageDocument = gql`
    mutation AddComponentToPage($component: ComponentCreation, $page: String, $textOrder: String) {
  addComponentToPage(component: $component, page: $page, textOrder: $textOrder) {
    components {
      page
      name
      title
      texts {
        title
        description
        updatedAt
        createdAt
        textOrder
      }
      updatedAt
      createdAt
      parentName
    }
    page
    componentsToRender {
      component
      isUserCreated
      show
      id
      pageName
    }
  }
}
    `;
export type AddComponentToPageMutationFn = Apollo.MutationFunction<AddComponentToPageMutation, AddComponentToPageMutationVariables>;

/**
 * __useAddComponentToPageMutation__
 *
 * To run a mutation, you first call `useAddComponentToPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddComponentToPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addComponentToPageMutation, { data, loading, error }] = useAddComponentToPageMutation({
 *   variables: {
 *      component: // value for 'component'
 *      page: // value for 'page'
 *      textOrder: // value for 'textOrder'
 *   },
 * });
 */
export function useAddComponentToPageMutation(baseOptions?: Apollo.MutationHookOptions<AddComponentToPageMutation, AddComponentToPageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddComponentToPageMutation, AddComponentToPageMutationVariables>(AddComponentToPageDocument, options);
      }
export type AddComponentToPageMutationHookResult = ReturnType<typeof useAddComponentToPageMutation>;
export type AddComponentToPageMutationResult = Apollo.MutationResult<AddComponentToPageMutation>;
export type AddComponentToPageMutationOptions = Apollo.BaseMutationOptions<AddComponentToPageMutation, AddComponentToPageMutationVariables>;
export const EditComponentPageDocument = gql`
    mutation EditComponentPage($component: editComponentPage, $textOrder: String, $page: String) {
  editComponentPage(component: $component, textOrder: $textOrder, page: $page) {
    page
    id
    componentsToRender {
      component
      isUserCreated
      show
      id
      pageName
    }
    components {
      createdAt
      id
      name
      page
      texts {
        id
        title
        textOrder
        description
        updatedAt
        createdAt
      }
      title
    }
  }
}
    `;
export type EditComponentPageMutationFn = Apollo.MutationFunction<EditComponentPageMutation, EditComponentPageMutationVariables>;

/**
 * __useEditComponentPageMutation__
 *
 * To run a mutation, you first call `useEditComponentPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditComponentPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editComponentPageMutation, { data, loading, error }] = useEditComponentPageMutation({
 *   variables: {
 *      component: // value for 'component'
 *      textOrder: // value for 'textOrder'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useEditComponentPageMutation(baseOptions?: Apollo.MutationHookOptions<EditComponentPageMutation, EditComponentPageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditComponentPageMutation, EditComponentPageMutationVariables>(EditComponentPageDocument, options);
      }
export type EditComponentPageMutationHookResult = ReturnType<typeof useEditComponentPageMutation>;
export type EditComponentPageMutationResult = Apollo.MutationResult<EditComponentPageMutation>;
export type EditComponentPageMutationOptions = Apollo.BaseMutationOptions<EditComponentPageMutation, EditComponentPageMutationVariables>;
export const ShowOrHideComponentOnPageDocument = gql`
    mutation ShowOrHideComponentOnPage($page: String, $show: Boolean, $name: String) {
  showOrHideComponentOnPage(page: $page, show: $show, name: $name) {
    components {
      show
      page
      name
    }
  }
}
    `;
export type ShowOrHideComponentOnPageMutationFn = Apollo.MutationFunction<ShowOrHideComponentOnPageMutation, ShowOrHideComponentOnPageMutationVariables>;

/**
 * __useShowOrHideComponentOnPageMutation__
 *
 * To run a mutation, you first call `useShowOrHideComponentOnPageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShowOrHideComponentOnPageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [showOrHideComponentOnPageMutation, { data, loading, error }] = useShowOrHideComponentOnPageMutation({
 *   variables: {
 *      page: // value for 'page'
 *      show: // value for 'show'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useShowOrHideComponentOnPageMutation(baseOptions?: Apollo.MutationHookOptions<ShowOrHideComponentOnPageMutation, ShowOrHideComponentOnPageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ShowOrHideComponentOnPageMutation, ShowOrHideComponentOnPageMutationVariables>(ShowOrHideComponentOnPageDocument, options);
      }
export type ShowOrHideComponentOnPageMutationHookResult = ReturnType<typeof useShowOrHideComponentOnPageMutation>;
export type ShowOrHideComponentOnPageMutationResult = Apollo.MutationResult<ShowOrHideComponentOnPageMutation>;
export type ShowOrHideComponentOnPageMutationOptions = Apollo.BaseMutationOptions<ShowOrHideComponentOnPageMutation, ShowOrHideComponentOnPageMutationVariables>;
export const AddComponentToRenderDocument = gql`
    mutation AddComponentToRender($component: String, $pageName: String) {
  addComponentToRender(component: $component, pageName: $pageName) {
    components {
      createdAt
      name
      page
      parentName
    }
    componentsToRender {
      component
      id
      pageName
      show
      isUserCreated
    }
    id
    page
  }
}
    `;
export type AddComponentToRenderMutationFn = Apollo.MutationFunction<AddComponentToRenderMutation, AddComponentToRenderMutationVariables>;

/**
 * __useAddComponentToRenderMutation__
 *
 * To run a mutation, you first call `useAddComponentToRenderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddComponentToRenderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addComponentToRenderMutation, { data, loading, error }] = useAddComponentToRenderMutation({
 *   variables: {
 *      component: // value for 'component'
 *      pageName: // value for 'pageName'
 *   },
 * });
 */
export function useAddComponentToRenderMutation(baseOptions?: Apollo.MutationHookOptions<AddComponentToRenderMutation, AddComponentToRenderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddComponentToRenderMutation, AddComponentToRenderMutationVariables>(AddComponentToRenderDocument, options);
      }
export type AddComponentToRenderMutationHookResult = ReturnType<typeof useAddComponentToRenderMutation>;
export type AddComponentToRenderMutationResult = Apollo.MutationResult<AddComponentToRenderMutation>;
export type AddComponentToRenderMutationOptions = Apollo.BaseMutationOptions<AddComponentToRenderMutation, AddComponentToRenderMutationVariables>;
export const UpdateOrderInComponentsDocument = gql`
    mutation UpdateOrderInComponents($componentsToRender: [ComponentToRenderInput]) {
  updateOrderInComponents(componentsToRender: $componentsToRender) {
    id
    componentsToRender {
      pageName
      id
      component
      isUserCreated
      show
    }
    components {
      name
      page
    }
    page
  }
}
    `;
export type UpdateOrderInComponentsMutationFn = Apollo.MutationFunction<UpdateOrderInComponentsMutation, UpdateOrderInComponentsMutationVariables>;

/**
 * __useUpdateOrderInComponentsMutation__
 *
 * To run a mutation, you first call `useUpdateOrderInComponentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderInComponentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderInComponentsMutation, { data, loading, error }] = useUpdateOrderInComponentsMutation({
 *   variables: {
 *      componentsToRender: // value for 'componentsToRender'
 *   },
 * });
 */
export function useUpdateOrderInComponentsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderInComponentsMutation, UpdateOrderInComponentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderInComponentsMutation, UpdateOrderInComponentsMutationVariables>(UpdateOrderInComponentsDocument, options);
      }
export type UpdateOrderInComponentsMutationHookResult = ReturnType<typeof useUpdateOrderInComponentsMutation>;
export type UpdateOrderInComponentsMutationResult = Apollo.MutationResult<UpdateOrderInComponentsMutation>;
export type UpdateOrderInComponentsMutationOptions = Apollo.BaseMutationOptions<UpdateOrderInComponentsMutation, UpdateOrderInComponentsMutationVariables>;
export const QueryDocument = gql`
    query Query {
  components {
    id
    name
    title
    texts {
      id
      title
      textOrder
      description
      updatedAt
      createdAt
    }
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useQueryQuery__
 *
 * To run a query within a React component, call `useQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryQuery(baseOptions?: Apollo.QueryHookOptions<QueryQuery, QueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
      }
export function useQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryQuery, QueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryQuery, QueryQueryVariables>(QueryDocument, options);
        }
export type QueryQueryHookResult = ReturnType<typeof useQueryQuery>;
export type QueryLazyQueryHookResult = ReturnType<typeof useQueryLazyQuery>;
export type QueryQueryResult = Apollo.QueryResult<QueryQuery, QueryQueryVariables>;
export const PageComponentDocument = gql`
    query PageComponent($page: String) {
  pageComponent(page: $page) {
    page
    componentsToRender {
      component
      isUserCreated
      show
      id
      pageName
    }
    components {
      id
      name
      page
      title
      updatedAt
      texts {
        createdAt
        description
        id
        title
        updatedAt
        textOrder
      }
      parentName
      show
    }
  }
}
    `;

/**
 * __usePageComponentQuery__
 *
 * To run a query within a React component, call `usePageComponentQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageComponentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageComponentQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function usePageComponentQuery(baseOptions?: Apollo.QueryHookOptions<PageComponentQuery, PageComponentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageComponentQuery, PageComponentQueryVariables>(PageComponentDocument, options);
      }
export function usePageComponentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageComponentQuery, PageComponentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageComponentQuery, PageComponentQueryVariables>(PageComponentDocument, options);
        }
export type PageComponentQueryHookResult = ReturnType<typeof usePageComponentQuery>;
export type PageComponentLazyQueryHookResult = ReturnType<typeof usePageComponentLazyQuery>;
export type PageComponentQueryResult = Apollo.QueryResult<PageComponentQuery, PageComponentQueryVariables>;
export const ComponentImagesDocument = gql`
    query ComponentImages($component: String) {
  componentImages(component: $component) {
    id
    image
    component
    specificLoc
  }
}
    `;

/**
 * __useComponentImagesQuery__
 *
 * To run a query within a React component, call `useComponentImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useComponentImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComponentImagesQuery({
 *   variables: {
 *      component: // value for 'component'
 *   },
 * });
 */
export function useComponentImagesQuery(baseOptions?: Apollo.QueryHookOptions<ComponentImagesQuery, ComponentImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComponentImagesQuery, ComponentImagesQueryVariables>(ComponentImagesDocument, options);
      }
export function useComponentImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComponentImagesQuery, ComponentImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComponentImagesQuery, ComponentImagesQueryVariables>(ComponentImagesDocument, options);
        }
export type ComponentImagesQueryHookResult = ReturnType<typeof useComponentImagesQuery>;
export type ComponentImagesLazyQueryHookResult = ReturnType<typeof useComponentImagesLazyQuery>;
export type ComponentImagesQueryResult = Apollo.QueryResult<ComponentImagesQuery, ComponentImagesQueryVariables>;
export const ComponentsToRenderDocument = gql`
    query ComponentsToRender($pageName: String) {
  componentsToRender(pageName: $pageName) {
    component
    id
    isUserCreated
    show
    pageName
  }
}
    `;

/**
 * __useComponentsToRenderQuery__
 *
 * To run a query within a React component, call `useComponentsToRenderQuery` and pass it any options that fit your needs.
 * When your component renders, `useComponentsToRenderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComponentsToRenderQuery({
 *   variables: {
 *      pageName: // value for 'pageName'
 *   },
 * });
 */
export function useComponentsToRenderQuery(baseOptions?: Apollo.QueryHookOptions<ComponentsToRenderQuery, ComponentsToRenderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComponentsToRenderQuery, ComponentsToRenderQueryVariables>(ComponentsToRenderDocument, options);
      }
export function useComponentsToRenderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComponentsToRenderQuery, ComponentsToRenderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComponentsToRenderQuery, ComponentsToRenderQueryVariables>(ComponentsToRenderDocument, options);
        }
export type ComponentsToRenderQueryHookResult = ReturnType<typeof useComponentsToRenderQuery>;
export type ComponentsToRenderLazyQueryHookResult = ReturnType<typeof useComponentsToRenderLazyQuery>;
export type ComponentsToRenderQueryResult = Apollo.QueryResult<ComponentsToRenderQuery, ComponentsToRenderQueryVariables>;
export const ComponentImagesMoreComponentsDocument = gql`
    query ComponentImagesMoreComponents($component: String) {
  componentImagesMoreComponents(component: $component) {
    component
    id
    specificLoc
    image
  }
}
    `;

/**
 * __useComponentImagesMoreComponentsQuery__
 *
 * To run a query within a React component, call `useComponentImagesMoreComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useComponentImagesMoreComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useComponentImagesMoreComponentsQuery({
 *   variables: {
 *      component: // value for 'component'
 *   },
 * });
 */
export function useComponentImagesMoreComponentsQuery(baseOptions?: Apollo.QueryHookOptions<ComponentImagesMoreComponentsQuery, ComponentImagesMoreComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ComponentImagesMoreComponentsQuery, ComponentImagesMoreComponentsQueryVariables>(ComponentImagesMoreComponentsDocument, options);
      }
export function useComponentImagesMoreComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ComponentImagesMoreComponentsQuery, ComponentImagesMoreComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ComponentImagesMoreComponentsQuery, ComponentImagesMoreComponentsQueryVariables>(ComponentImagesMoreComponentsDocument, options);
        }
export type ComponentImagesMoreComponentsQueryHookResult = ReturnType<typeof useComponentImagesMoreComponentsQuery>;
export type ComponentImagesMoreComponentsLazyQueryHookResult = ReturnType<typeof useComponentImagesMoreComponentsLazyQuery>;
export type ComponentImagesMoreComponentsQueryResult = Apollo.QueryResult<ComponentImagesMoreComponentsQuery, ComponentImagesMoreComponentsQueryVariables>;