import React, { Component } from 'react';
import Note from './Note'

import './NoteGrid.less'

import Masonry from 'react-masonry-component';

class NotesGrid extends Component {
    render() {
        const Option = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        };
        return (
            <Masonry
                className='NotesGrid'
                options={Option}>
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onNoteDelete.bind(null, note)}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        );
    }
}

export default NotesGrid;
