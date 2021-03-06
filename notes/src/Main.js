import ReactMarkdown from "react-markdown";

function Main({activeNote, onUpdateNote}) {
    const handleChangeEdit = (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key]: value,
            lastModified: Date.now(),
        })
    };

    if (!activeNote) return <div className="no-active-note">No note selected</div>;
    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input className={'app-main-input'} type='text' id='title' value={activeNote.title}
                       onChange={(e) => handleChangeEdit("title", e.target.value)} autoFocus/>
                <textarea className={'app-main-input'} id='body' placeholder='Write your note here' value={activeNote.body}
                          onChange={(e) => handleChangeEdit("body", e.target.value)}/>
            </div>

            <div className='app-main-note-preview'>
                <h1 className='preview-title'>{activeNote.title}</h1>
                <ReactMarkdown className='markdown-preview'>{activeNote.body}</ReactMarkdown>

            </div>
        </div>
    );
}

export default Main