function Main({activeNote, onUpdateNote}) {
    const handleChangeEdit = (key, value) => {
        onUpdateNote({
            id: activeNote.id,
            [key]: value,
        lastModified: Date.now(),
        })
    };

    if(!activeNote) return <div className="no-active-note">No note selected</div>;
    return (
        <div className='app-main'>
            <div className='app-main-note-edit'>
                <input type='text' id='title' value={activeNote.title} onChange={(e) => handleChangeEdit("title", e.target.value)} autoFocus/>
                <textarea id='body' placeholder='Write your note here' value={activeNote.body} onChange={(e) => handleChangeEdit("body", e.target.value)}/>
            </div>

            <div className='app-main-note-preview'>
                <h1 className='preview-title'>{activeNote.title}</h1>
                <div className='markdown-preview'>{activeNote.body}</div>

            </div>
        </div>
    );
}

export default Main