import { gql } from "apollo-server";

const typeDefs = gql`
  type Component {
    id: ID!
    page: String
    name: String
    show: Boolean
    parentName: String
    title: String
    texts: [Text]
    updatedAt: String
    createdAt: String
  }

  type ComponentToRender {
    id: ID!
    component: String!
    pageName: String
    isUserCreated: Boolean
    show: Boolean
  }

  type Text {
    id: ID!
    title: String!
    textOrder: String!
    description: String
    updatedAt: String
    createdAt: String
  }

  type PageComponent {
    id: ID
    page: String
    componentsToRender: [ComponentToRender]
    components: [Component]
  }
  type Image {
    id: ID
    image: String
    component: String
    specificLoc: String
  }
  type Query {
    components: [Component!]
    pageComponent(page: String): PageComponent
    images: [Image]
    componentImages(component: String): [Image]
    componentImagesMoreComponents(component: String): [Image]
    componentsToRender(pageName: String): [ComponentToRender]
  }
  input ComponentToRenderInput {
    id: String
    component: String!
    pageName: String
    isUserCreated: Boolean
    show: Boolean
  }
  input TextCreateInput {
    title: String!
    description: String
    textOrder: String
  }
  input editSpecificComponent {
    id: ID!
    title: String!
    description: String
    textOrder: String
  }
  input createSpecificComponent {
    title: String!
    description: String
    textOrder: String
  }
  input editSpecificText {
    id: ID!
    title: String!
    description: String
  }
  input editComponentPage {
    id: Int!
    name: String
    title: String
    texts: editSpecificComponent
  }
  input ComponentCreation {
    name: String
    parentName: String
    title: String
    texts: createSpecificComponent
  }
  """
  MUTATIONS
  """
  scalar Upload

  type Mutation {
    createComponent(
      name: String
      parentName: String
      title: String
      texts: [TextCreateInput]
      page: String
    ): PageComponent

    editComponentPage(
      component: editComponentPage
      page: String
      textOrder: String
    ): PageComponent!

    addComponentToRender(component: String, pageName: String): PageComponent!
    addComponentToPage(
      component: ComponentCreation
      page: String
      textOrder: String
      isUserCreated: Boolean
    ): PageComponent!
    deletePage(page: String): String

    imageUpload(file: Upload!, component: String, specificLoc: String): Image!

    createTextsToComponent(
      page: String
      name: String!
      title: String
      textOrder: String!
    ): PageComponent

    deleteImage(Id: String): Boolean

    showOrHideComponentOnPage(
      name: String
      page: String
      show: Boolean
    ): PageComponent!

    updateOrderInComponents(
      componentsToRender: [ComponentToRenderInput]
    ): PageComponent
  }
`;
export default typeDefs;
