export interface Draggable {
  dragStartHandler: (event: React.DragEvent) => void;
  dragEndHandler: (event: React.DragEvent) => void
}

export interface DragTarget {
  dragOverHandler: (event: React.DragEvent) => void;
  dragHandler: (event: React.DragEvent) => void;
  dragLeaveHandler: (event: React.DragEvent) => void;
}