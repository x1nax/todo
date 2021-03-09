import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from "./InputItem.module.css";
import classnames from 'classnames'

class InputItem extends React.Component {
  state = {
    values: '',
    InputValue: '',
    isError:" ",
    isEmpty: false,
  }

  onButtonClick = () => {
    this.setState({
      InputValue: ''
    });

    if(this.state.InputValue===''){
      this.setState({isError: "ПОЛЕ НЕ ДОЛЖНО БЫТЬ ПУСТЫМ!"})
      this.setState({isEmpty: true})
    }
    else if(this.state.values.indexOf(this.state.InputValue)===-1){
        this.props.onClickAdd(this.state.InputValue)
    }

    else {
      this.setState({isEmpty: true})
      this.setState({isError: "ЭТО ДЕЛО УЖЕ ДОБАВЛЕНО"})
    }
  }

  render () {
    const { count } = this.props;
    return (
      <div className={ classnames({[styles.empty]: this.state.isEmpty, [styles.input]: true})}>
          <TextField
            id="standard-full-width"
            color="primary"
            fullWidth
            label={this.state.isError}
            value={this.state.InputValue}
            onChange={event => this.setState({ InputValue: event.target.value, isError:" ", isEmpty: false, values:this.props.items.map(item=> item.value)})}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {this.props.items.length < 7 ? 
            <Button variant="contained" color="default" disabled={false} onClick={this.onButtonClick} >  
            Добавить дело 
            </Button> : <Button variant="contained" color="default" disabled={true}>  
            Удали хотя бы 1 дело
            </Button>
          }
          
      </div>
    );
  }
  
}

export default InputItem;


