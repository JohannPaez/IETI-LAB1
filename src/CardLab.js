import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';


export class CardLab extends React.Component {
    render () {
        return (
            <Card>
              <CardActionArea>
                <CardContent>
                    {this.props.content}
                </CardContent>
              </CardActionArea>
            </Card>
          );      
    }
  
}