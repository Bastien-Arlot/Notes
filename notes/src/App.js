import {useState} from "react";
import uuid from "react-uuid";
import './App.css';
import Sidebar from './Sidebar'
import Main from './Main'
import {useEffect} from "react";


function App() {

    const [notes, setNotes] = useState(localStorage.notes? JSON.parse(localStorage.notes): []);
    const [activeNote, secActiveNote] = useState(false);

    useEffect(() =>{
        localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes]);

    const onAddNote = () => {
        const newNote = {
            id: uuid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now(),
        };

        setNotes([newNote, ...notes]);
    }

    const onDeleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));

    }

    const getActiveNote = () => {
        return notes.find((note) => note.id === activeNote);
    }

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            if (note.id === activeNote) {
                return updatedNote
            }

            return note;
        });
        setNotes(updatedNotesArray);
    }

    return (
        <div className="App">
            <Sidebar notes={notes}
                     onAddNote={onAddNote}
                     onDeleteNote={onDeleteNote}
                     activeNote={activeNote}
                     setActiveNote={secActiveNote}/>
            <Main activeNote={getActiveNote()}
                  onUpdateNote={onUpdateNote}/>
        </div>
    );
}

export default App;
