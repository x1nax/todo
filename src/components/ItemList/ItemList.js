import React from 'react';
import Item from "../Item/Item";
import Checkbox from '@material-ui/core/Checkbox';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import classnames from 'classnames'
import styles from "./ItemList.module.css"

const ItemList = ({items, onClickDone, onClickDelete, dragStartHandler, dragLeaveHandler, dragEndHandler, dragOverHandler, dragDropHandler, sortCards}) => (<ul className={styles.list}>
  {items.sort(sortCards).map(item => <li key={item.id} 
                         className ={classnames({[styles.item]: true,[styles.hidden]: item.isHidden,})} 
                         draggable={true}
                         onDragStart={(e)=> dragStartHandler(e, item)}
                         onDragLeave={(e)=> dragLeaveHandler(e)}
                         onDragEnd={(e)=> dragEndHandler(e)}
                         onDragOver={(e)=> dragOverHandler(e)}
                         onDrop={(e)=> dragDropHandler(e, item)}>
    <Checkbox
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        onClick={() => onClickDone(item.id)}
    />
    <Item value={item.value} isDone={item.isDone} id={item.id} items={items}/>
    <IconButton aria-label="delete"  onClick={()=> onClickDelete(item.id)}>
        <DeleteIcon/>
    </IconButton>
  </li>)}
</ul>);

  export default ItemList;