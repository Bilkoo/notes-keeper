import React, { Component } from 'react'

import ColorChooser from './ColorChooser';

import './NoteEditor.less';

class NoteEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
            color: ''
        };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleTextChange(e) {
        this.setState( {text: e.target.value} );
    }
    handleTitleChange(e) {
        this.setState( {title: e.target.value} );
    }
    handleColorChange(color) {
        //console.log(color);
        this.setState( {color: color} );
    }
    handleNoteAdd() {
        const Note = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };
        this.props.onNoteAdd(Note);
        this.setState({text: '', title: '', color: '#FFFFFF'});
    }
    render() {
        return (
            <div className="NoteEditor">
                <input type='text' className='NoteEditor__title' placeholder='Enter title'
                value={this.state.title} onChange={this.handleTitleChange}/>
                <textarea placeholder='Enter note text' rows={5} className='NoteEditor__text'
                value={this.state.text} onChange={this.handleTextChange} />
                <div className='NoteEditor__footer'>
                    <ColorChooser onColorChange={this.handleColorChange}/>
                    <button className='NoteEditor__button' disabled={!this.state.text}
                    onClick={this.handleNoteAdd}> Add</button>
                </div>
            </div>
        );
    }
}

export default NoteEditor;
