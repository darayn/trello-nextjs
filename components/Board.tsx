"use client";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useEffect } from "react";
import { getTodosGroupedByColumns } from "@/lib/getTodosGroupedByColumn";
import { useBoardStore } from "./store/BoardStore";

function Board() {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);
  return (
    <h1>Hello</h1>
    // <DragDropContext>
    //   <Droppable droppableId="board" direction="horizontal" type="column">
    //     {(provided) => <div>{/* {rendering all the columns} */}</div>}
    //   </Droppable>
    // </DragDropContext>
  );
}

export default Board;
