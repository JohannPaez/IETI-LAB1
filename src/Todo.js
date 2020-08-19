import React from 'react';
import {CardLab} from './CardLab'

export class Todo extends React.Component {


    render() {
        return (  
            
            <div>
            <CardLab 
                content = {
                <div>
                    <h2> {this.props.text} </h2>
                    <h2> {this.props.priority} </h2>
                    <h2> {this.props.dueDate.toString()} </h2>
                </div>
                }
            >
            </CardLab>
            <br />
            </div>
        );
    }

}

