import {useState} from "react";
import uuid from "react-uuid";
import './App.css';
import Sidebar from './Sidebar'
import Main from './Main'


function App() {

    const [notes, setNotes] = useState([]);
    const [activeNote, secActiveNote] = useState(false);

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
    return (
        <div className="App">
            <Sidebar notes={notes}
                     onAddNote={onAddNote}
                     onDeleteNote={onDeleteNote}
                     activeNote={activeNote}
                     setActiveNote={secActiveNote}/>
            <Main/>
        </div>
    );
}

export default App;
