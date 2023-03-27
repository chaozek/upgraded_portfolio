import gql from "graphql-tag";

export const IMAGE_UPLOAD = gql`
  mutation ImageUpload(
    $file: Upload!
    $component: String
    $specificLoc: String
  ) {
    imageUpload(file: $file, component: $component, specificLoc: $specificLoc) {
      component
      image
      specificLoc
    }
  }
`;
export const ADD_TEXT_TO_COMPONENT = gql`
  mutation CreateTextsToComponent(
    $title: String
    $page: String
    $textOrder: String!
    $name: String!
  ) {
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
export const DELETE_IMAGE = gql`
  mutation DeleteImage($id: String) {
    deleteImage(Id: $id)
  }
`;
export const CREATE_COMPONENTS = gql`
  mutation CreateComponent(
    $name: String!
    $title: String
    $texts: [TextCreateInput]
    $page: String
    $parentName: String!
  ) {
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
export const ADD_COMPONENT_TO_PAGE = gql`
  mutation AddComponentToPage(
    $component: ComponentCreation
    $page: String
    $textOrder: String
  ) {
    addComponentToPage(
      component: $component
      page: $page
      textOrder: $textOrder
    ) {
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
export const EDIT_COMPONENT_TEXTS = gql`
  mutation EditComponentPage(
    $component: editComponentPage
    $textOrder: String
    $page: String
  ) {
    editComponentPage(
      component: $component
      textOrder: $textOrder
      page: $page
    ) {
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
export const SHOW_OR_HIDE_COMPONENTS = gql`
  mutation ShowOrHideComponentOnPage(
    $page: String
    $show: Boolean
    $name: String
  ) {
    showOrHideComponentOnPage(page: $page, show: $show, name: $name) {
      components {
        show
        page
        name
      }
    }
  }
`;
export const ADD_COMPONENT_TO_RENDER = gql`
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
export const UPDATE_ORDER_IN_COMPONENTS = gql`
  mutation UpdateOrderInComponents(
    $componentsToRender: [ComponentToRenderInput]
  ) {
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
