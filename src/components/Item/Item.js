import React from 'react';
import classnames from 'classnames'
import styles from './Item.module.css';
import { string } from 'prop-types';


class Item extends React.Component {
    state = {
        editMode: false,
        InputValue: this.props.value,
        Error:' ',
        isEmpty:true,
        values:'',
    }
    
    onEnterClick = (e) => {
        if (e.key === 'Enter') {
            if(this.state.InputValue===''){
                this.setState({Error: "ПОЛЕ НЕ ДОЛЖНО БЫТЬ ПУСТЫМ!"})
                this.setState({isEmpty: false})
              }

            else if(this.state.values.indexOf(this.state.InputValue)===-1){
                this.setState({editMode: false})
                this.setState({isEmpty: true})
            }
        
            else {
              this.setState({isEmpty: false})
              this.setState({Error: "ЭТО ДЕЛО УЖЕ ДОБАВЛЕНО"})
            }
          }
      }

    render() {
        const {isDone} = this.props;
        return (
            <span className ={
                classnames({
                    [styles.done]: isDone,
                })
            } onDoubleClick={() => this.setState({editMode: true})}>
            {this.state.editMode ?
                <div>
                <input value={this.state.InputValue} onKeyPress={this.onEnterClick} onChange={event => this.setState({ InputValue: event.target.value, values:this.props.items.map(item=> item.value)})}></input>
                <div className ={classnames({[styles.empty]: this.state.isEmpty, [styles.text]:true})}>{this.state.Error}</div>
                </div> :
                <div>{this.state.InputValue}</div>
            }      
            </span>
            
        )
    }
}

Item.defaultProps = {
    value:"Добавить дел"
}   

Item.propTypes = {
    value: string
}

export default Item;