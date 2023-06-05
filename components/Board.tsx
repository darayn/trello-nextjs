import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Client } from "appwrite";

function Board() {
  return (
    <DragDropContext>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => <div>{/* {rendering all the columns} */}</div>}
      </Droppable>
    </DragDropContext>
  );
}

export default Board;
