import gql from "graphql-tag";

export const COMPONENTS = gql`
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

export const PAGE_COMPONENT = gql`
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
export const GET_COMPONENT_IMAGES = gql`
  query ComponentImages($component: String) {
    componentImages(component: $component) {
      id
      image
      component
      specificLoc
    }
  }
`;

export const GET_COMPONENTSTORENDER = gql`
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

export const GET_MORE_IMAGES_FOR_COMPONENT = gql`
  query ComponentImagesMoreComponents($component: String) {
    componentImagesMoreComponents(component: $component) {
      component
      id
      specificLoc
      image
    }
  }
`;
