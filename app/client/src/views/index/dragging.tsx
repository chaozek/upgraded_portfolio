import { useDragLayer } from "react-dnd";

export function CustomDragLayer() {
  const { isDragging, currentOffset, item } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 100,
        left: 0,
        top: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          transform: `translate(${currentOffset.x}px, ${currentOffset.y}px)`,
        }}
      >
        {/* Render your custom dragging component here */}
        <div
          style={{
            height: "100px",
            padding: "10px",
            border: "1px solid black",
          }}
        >
          {item.name}
        </div>
      </div>
    </div>
  );
}
