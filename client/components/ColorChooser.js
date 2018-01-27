import React, { Component } from 'react';

import './ColorChooser.less'

class ColorChooser extends Component {
    render() {
        return (
            <div>
                <button className='button' onClick={this.props.onColorChange.bind(null, '#FFFFFF')}
                        style={{backgroundColor: '#FFFFFF'}} />
                <button className='button' onClick={this.props.onColorChange.bind(null, '#FAFAD2')}
                        style={{backgroundColor: '#FAFAD2'}} />
                <button className='button' onClick={this.props.onColorChange.bind(null, '#FFA500')}
                        style={{backgroundColor: '#FFA500'}} />
                <button className='button' onClick={this.props.onColorChange.bind(null, '#FF0000')}
                        style={{backgroundColor: '#FF0000'}} />
            </div>
        );
    }
}

export default ColorChooser;
