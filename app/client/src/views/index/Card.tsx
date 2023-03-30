import type { Identifier, XYCoord } from "dnd-core";
import {
  PageComponentDocument,
  useUpdateOrderInComponentsMutation,
} from "generated";
import { useDrag, useDrop } from "react-dnd";

import { Box } from "@chakra-ui/react";
import type { FC } from "react";
import _ from "lodash";
import { useRef } from "react";

const style = {
  cursor: "move",
  padding: "0px",
  border: "1px dashed transparent",
  userSelect: "none", // This will prevent text selection during dragging
};

export interface CardProps {
  id: any;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  componentsOrderForCards: Array<any>;
  isAdmin: boolean;

  isDraggable: boolean;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const Card: FC<CardProps> = ({
  id,
  text,
  index,
  moveCard,
  componentsOrderForCards,
  isDraggable,
}: any): any => {
  const ref = useRef<HTMLDivElement>(null);
  const [
    addUpdateOrderInComponents,
    { data: ___data, loading: ___loading, error: ___error },
  ] = useUpdateOrderInComponentsMutation();
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    drop: (item, monitor) => {
      try {
        addUpdateOrderInComponents({
          variables: {
            componentsToRender: _.map(componentsOrderForCards, (obj) =>
              _.omit(obj, "__typename")
            ) as any,
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
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: "card",
    canDrag: isDraggable,
    item: () => {
      return { id, index };
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.2 : 1;
  drag(drop(ref));
  return (
    <Box position="relative">
      <Box
        ref={ref}
        style={isDraggable ? { ...style, opacity } : {}}
        _hover={
          isDraggable && {
            backgroundColor: "#9393932b",
            border: "1px dashed gray !important",
          }
        }
        data-handler-id={handlerId}
      >
        {text}
      </Box>
    </Box>
  );
};
