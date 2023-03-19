import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import {
  PageComponentQuery,
  useAddComponentToRenderMutation,
} from "../../../generated";
import { addComponentToRender, generateComponentShape } from "../helpers";
import { useCallback, useContext, useEffect, useState } from "react";

import { Card } from "./Card";
import { CreateComponent } from "src/createComponent/CreateComponent";
import _ from "lodash";
import _Modal from "../../utils/modal/Modal";
import update from "immutability-helper";

function Index(props) {
  const data = _.get(
    props,
    "transformedData",
    {}
  ) as PageComponentQuery["pageComponent"]["components"];
  let componentsToRender = _.get(props, "props.componentsToRender", {});
  let isAdmin = _.get(props, "props.isAdmin", false);
  let isDraggable = _.get(props, "props.isDraggable", false);
  let setIsDraggable = _.get(props, "props.setIsDraggable");

  console.log(setIsDraggable, "isAdmiisAdminn");
  const [
    addComponentToRenderMutation,
    {
      data: addComponentData,
      loading: addComponentLoading,
      error: addComponentError,
    },
  ] = useAddComponentToRenderMutation();

  const components = componentsToRender.map((comp) => {
    return generateComponentShape(data, comp, props);
  });

  const [cards, setCards] = useState(components);
  const [componentOrderNames, setComponentOrderNames] = useState([]);
  const [componentsOrder, setComponentsOrder] = useState([]);
  /*   const [isDraggable, setIsDraggable] = useState(false);
  const handleToggleDraggable = () => {
    setIsDraggable(!isDraggable);
  }; */

  useEffect(() => {
    setCards(components);
  }, [componentsToRender]);

  useEffect(() => {
    setComponentsOrder(_.get(props, "props.componentsOrder", {}));
  }, [cards]);

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    return setCards((prevCards: any[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as any],
        ],
      })
    );
  }, []);

  const updateOrder = () => {
    setComponentOrderNames(_.map(cards, "componentName"));
  };

  const sortedArray = componentOrderNames.map((name) => {
    return componentsOrder.find((item) => item.component === name);
  });

  useEffect(() => {
    updateOrder();
  }, [cards]);

  const renderCard = useCallback(
    (
      card: any,
      index: number,
      componentsOrderForCards: any,
      isDraggable: any
    ) => {
      console.log(isDraggable, "isDraggableisDraggable");
      return (
        <Card
          key={card.id}
          isAdmin={true}
          componentsOrderForCards={componentsOrderForCards}
          index={index}
          id={card.id}
          text={card.component}
          moveCard={moveCard}
          isDraggable={isDraggable}
        />
      );
    },
    []
  );

  return (
    <>
      <>
        {addComponentLoading ? (
          "loading..."
        ) : (
          <div>
            {cards.map((card, i) => {
              if (card.show === undefined) {
                return renderCard(card, i, sortedArray, isDraggable);
              } else {
                return card.show === true
                  ? renderCard(card, i, sortedArray, isDraggable)
                  : null;
              }
            })}
          </div>
        )}
      </>
      <Grid
        border="1px dashed green"
        templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]}
        gap={6}
      >
        <Flex>
          <Button
            color="white"
            background="green"
            onClick={() =>
              addComponentToRender(
                addComponentToRenderMutation,
                componentsToRender,
                "intro"
              )
            }
          >
            CREATE INTRO COMPONENT
          </Button>
        </Flex>
        <Flex>
          <Button
            color="white"
            background="green"
            onClick={() =>
              addComponentToRender(
                addComponentToRenderMutation,
                componentsToRender,
                "ThreeColumnsWithPicture"
              )
            }
          >
            CREATE ThreeColumnsWithPicture COMPONENT
          </Button>
        </Flex>
        <Button onClick={() => setIsDraggable()}>
          {isDraggable ? "Disable dragging" : "Enable dragging"}
        </Button>
        <Flex>
          <Button
            color="white"
            background="green"
            onClick={() =>
              addComponentToRender(
                addComponentToRenderMutation,
                componentsToRender,
                "LightBigBox"
              )
            }
          >
            CREATE LightBigBox COMPONENT
          </Button>
        </Flex>
        {components.map((component, i) => {
          return (
            <GridItem w="100%">
              <CreateComponent
                key={i}
                componentName={component.componentName}
                componentToRenderStatic={component.componentName}
                componentInfo={data}
              />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}

export default Index;
