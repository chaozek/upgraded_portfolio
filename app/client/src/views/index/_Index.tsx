import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import {
  Element,
  Events,
  Link,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
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
      return (
        <Element name={card.componentName}>
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
        </Element>
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
    </>
  );
}

export default Index;
