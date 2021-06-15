import React, { useState } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

const Dragdrop = ({
  setshowAnswer,
  score,
  setScore,
  showAnswer,
  currentIndex,
  nextQuestion,
  data: { question, correct_answer, answers },
}) => {
  const itemsFromBackend = answers.map((answer) => {
    return { id: uuid(), content: answer };
  });

  const columnsFromBackend = {
    [uuid()]: {
      name: "Your Answer",
      items: [],
    },
    [uuid()]: {
      name: "",
      items: itemsFromBackend,
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);

  console.log(correct_answer);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      if (destItems[0].content === correct_answer) {
        setScore(score + 1);
        setshowAnswer(true);
        }
        if(destColumn.name === "Your Answer" && destItems.length >= 2){
          return
        }
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    }
    else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div>
      <div className="normalquestion__letter">
        <p>Q</p>
      </div>
      <div className="normalquestion__feature">
        <div className="normalquestion__header-relative">
          <p>QUIZ</p>
          <Link to="/programowanie">
            <p className="normalquestion__arrow">&lt;</p>
          </Link>
          <Link to="/">
            <p>&Chi;</p>
          </Link>
        </div>
        <div className="normalquestion__subheader">
          <p>SELECT THE CORRECT ANSWER</p>
          <p>
            {currentIndex + 1}/<span>10</span>
          </p>
        </div>
        <div className="normalquestion__question">
          <p dangerouslySetInnerHTML={{ __html: question }} />
          <button onClick={() => console.log("check")}>Check answer</button>
        </div>
        <div className="normalquestion__dragndrop">
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([id, column, className]) => {
              return (
                <div>
                  <h2>{column.name}</h2>
                  <Droppable droppableId={id} key={id}>
                    {(provided) => {
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          className={className}
                        >
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided) => {
                                  return (
                                    <div
                                      key={index}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      className="bgcolor"
                                    >
                                      {item.content}
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              );
            })}
          </DragDropContext>
        </div>
        {showAnswer && (
          <button onClick={nextQuestion} className="normalquestion__button">
            Next question
          </button>
        )}
      </div>
    </div>
  );
};
export default Dragdrop;
