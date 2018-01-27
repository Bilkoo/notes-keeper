import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NotesGrid from './NotesGrid';
import NotesStore from '../store/NoteStore'
import NotesActions from '../actions/NotesActions';

import './App.less';

function getStateFromFlux() {
    return({
        isLoading: NotesStore.isLoading(),
        notes: NotesStore.getNotes()
    });
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: NotesStore.isLoading(),
            notes: NotesStore.getNotes()
        };
        this._onChange = this._onChange.bind(this);
    }

    componentWillMount() {
        NotesActions.loadNotes();
    }

    componentDidMount() {
        NotesStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        NotesStore.removeChangeListener(this._onChange);
    }

    handleNoteDelete(note) {
        NotesActions.deleteNote(note.id);
    }

    handleNoteAdd(noteData) {
        NotesActions.createNote(noteData);
    }
    _onChange() {
        this.setState(getStateFromFlux());
    }
    render() {
        return (
            <div className="App">
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrid notes={this.state.notes} onNoteDelete={this.handleNoteDelete}/>
            </div>
    );
    }
}

export default App;
