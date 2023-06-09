import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Board = () => {
    // const reorder = (list, startIndex, endIndex) => {
    //     const result = Array.from(list);
    //     const [removed] = result.splice(startIndex, 1);
    //     result.splice(endIndex, 0, removed);
    //     return result;
    // };

    const Arr = [
        {
            name: "North",
            key: "12353",
        },
        {
            name: "South",
            key: "23463",
        },
        {
            name: "East",
            key: "54643",
        },
        {
            name: "West",
            key: "4435",
        },
    ]

    const [project, setProject] = useState(Arr)

    // const onDragEnd = (result) => {
    //     debugger
    //     console.log(result);
    //     if (!result.destination) return;
    //     if (result.destination.index === result.source.index) return;

    //     const projects = reorder(
    //         project,
    //         result.source.index,
    //         result.destination.index
    //     );
    //     //store reordered state.
    //     setProject(projects)
    // }

    const onDragEnd = (result) => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]


        // this is the logic behind sorting state , you have to do it by your self
        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }

            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }

            setProject(newState)
            return
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="list">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {project && project.map((item, index) =>
                            // draggableId should be string, index is also require, key props should be unique to prevent from unnecassary re-rendering  
                            <Draggable draggableId={item.key} key={item.key} index={index}>
                                {(provided) => (
                                    <div
                                        className='box'
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <p style={{ color: "green" }}>{item.name}</p>
                                    </div>
                                )}
                            </Draggable>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default Board