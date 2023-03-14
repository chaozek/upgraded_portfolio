import { Flex, Button } from "@chakra-ui/react";
import {
  PageComponentDocument,
  useAddComponentToPageMutation,
} from "generated";
import _ from "lodash";
import { useShowOrHideComponentOnPageMutation } from "../../generated/index";
import { fireCreateComponent } from "./helpers";

export const CreateComponent = ({
  componentInfo,
  componentToRenderStatic,
  componentName,
}) => {
  const [addToComponentPageMutation, { data, loading, error }] =
    useAddComponentToPageMutation();
  const [showOrHideComp, { data: _data, loading: _loading, error: _error }] =
    useShowOrHideComponentOnPageMutation();

  const findFun = (componentName) => {
    const foundComp = _.find(componentInfo, { name: componentName });
    if (!foundComp) {
      try {
        addToComponentPageMutation({
          variables: {
            component: {
              name: componentName,
              parentName: componentName,
              title: "TEST",
              texts: {
                title: "CREATE FROM INIT VALUE",
                textOrder: "text1",
              },
            },
            page: "homepage",
          },
          errorPolicy: "all",
          refetchQueries: [
            {
              query: PageComponentDocument,
              variables: {
                page: "homepage",
              },
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
      return;
    }
    return foundComp.show;
  };
  const showOrHide = () => {
    if (componentToRenderStatic === "hero") {
      try {
        showOrHideComp({
          variables: {
            show: !findFun(componentName),
            page: "homepage",
            name: "hero",
          },
          errorPolicy: "all",
          refetchQueries: [
            {
              query: PageComponentDocument,
              variables: {
                page: "homepage",
              },
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
    } else if (/\bintro\d+\b/.test(componentToRenderStatic)) {
      try {
        showOrHideComp({
          variables: {
            show: !findFun(componentName),
            page: "homepage",
            name: componentName,
          },
          errorPolicy: "all",
          refetchQueries: [
            {
              query: PageComponentDocument,
              variables: {
                page: "homepage",
              },
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
    } else if (/\ComponentWithImage\d+\b/.test(componentToRenderStatic)) {
      try {
        showOrHideComp({
          variables: {
            show: !findFun(componentName),
            page: "homepage",
            name: componentName,
          },
          errorPolicy: "all",
          refetchQueries: [
            {
              query: PageComponentDocument,
              variables: {
                page: "homepage",
              },
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
    } else if (/\ThreeColumnsWithPicture\d+\b/.test(componentToRenderStatic)) {
      try {
        showOrHideComp({
          variables: {
            show: !findFun(componentName),
            page: "homepage",
            name: componentName,
          },
          errorPolicy: "all",
          refetchQueries: [
            {
              query: PageComponentDocument,
              variables: {
                page: "homepage",
              },
            },
          ],
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  let decideToShowHideBtn = (componentInfo) => {
    let found = _.find(componentInfo, {
      name: componentToRenderStatic,
    });

    return found && found.show === true && found.name;
  };
  let decideToShowCreateCompBtn = (componentInfo) => {
    let found = _.find(componentInfo, {
      name: componentToRenderStatic,
    });
    return found && found.name;
  };
  return (
    <Flex
      mt="10"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Button m="1" onClick={() => showOrHide()} isLoading={_loading}>
        {decideToShowHideBtn(componentInfo)
          ? ` HIDE ${componentToRenderStatic}`
          : ` SHOW ${componentToRenderStatic}`}
      </Button>
      {!decideToShowCreateCompBtn(componentInfo) ? (
        <Button
          m="1"
          onClick={() =>
            fireCreateComponent(componentToRenderStatic, componentName)
          }
          fontSize="1vw"
        >
          create {componentToRenderStatic}
        </Button>
      ) : null}
      <Flex></Flex>
    </Flex>
  );
};
