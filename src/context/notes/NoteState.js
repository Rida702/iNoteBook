import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    let initialNotes = [
    {
      "_id": "66f69bfff45d8f24fe6dd70f",
      "user": "66f684aad4571ed9ea2a99a1",
      "title": "Furniture List",
      "description": "Buy milk, eggs, and bread from the supermarket.",
      "tag": "Personal",
      "date": "2024-09-27T11:50:23.603Z",
      "__v": 0
    },
    {
      "_id": "66f6ce805f59011af5442951",
      "user": "66f684aad4571ed9ea2a99a1",
      "title": "Furniture List",
      "description": "Buy milk, eggs, and bread from the supermarket.",
      "tag": "Personal",
      "date": "2024-09-27T15:25:52.057Z",
      "__v": 0
    },
    {
      "_id": "66f6ce965f59011af5442953",
      "user": "66f684aad4571ed9ea2a99a1",
      "title": "Shopping List",
      "description": "Buy milk, eggs, and bread from the supermarket.",
      "tag": "Home",
      "date": "2024-09-27T15:26:14.786Z",
      "__v": 0
    },
    {
      "_id": "66f6ceb45f59011af5442955",
      "user": "66f684aad4571ed9ea2a99a1",
      "title": "To do List",
      "description": "Do all Tasks",
      "tag": "task",
      "date": "2024-09-27T15:26:44.059Z",
      "__v": 0
    },
    {
        "_id": "66f6ce965f59011af5442953",
        "user": "66f684aad4571ed9ea2a99a1",
        "title": "Shopping List",
        "description": "Buy milk, eggs, and bread from the supermarket.",
        "tag": "Home",
        "date": "2024-09-27T15:26:14.786Z",
        "__v": 0
      },
      {
        "_id": "66f6ceb45f59011af5442955",
        "user": "66f684aad4571ed9ea2a99a1",
        "title": "To do List",
        "description": "Do all Tasks",
        "tag": "task",
        "date": "2024-09-27T15:26:44.059Z",
        "__v": 0
      },
      {
        "_id": "66f6ce965f59011af5442953",
        "user": "66f684aad4571ed9ea2a99a1",
        "title": "Shopping List",
        "description": "Buy milk, eggs, and bread from the supermarket.",
        "tag": "Home",
        "date": "2024-09-27T15:26:14.786Z",
        "__v": 0
      },
      {
        "_id": "66f6ceb45f59011af5442955",
        "user": "66f684aad4571ed9ea2a99a1",
        "title": "To do List",
        "description": "Do all Tasks",
        "tag": "task",
        "date": "2024-09-27T15:26:44.059Z",
        "__v": 0
      }
  ]
    const[notes, setNotes] = useState(initialNotes);
    return (
        <NoteContext.Provider value={{notes, setNotes}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;