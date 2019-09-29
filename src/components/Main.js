import React from 'react';
import AddItem from './AddItem';
import del from '../assets/recycle-bin.png';
class Main extends React.Component{
    state={
        lists:[
            {id:1,content:"one"}
        ],
    }
    addTodo= (todo)=>{
        todo.id = Math.random();
        let lists = [...this.state.lists,todo];
        this.setState({
            lists:lists
        }) 
    }
    delete = (id)=>{
        const lists = this.state.lists.filter(list=>{
            return list.id !== id;
        })
        this.setState({
            lists:lists
        })
    }
    render(){
        return(
            
  
 

            <div className="main">
            {this.state.lists.length > 0 ? (this.state.lists.map(list=>{
                return(
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item" key={list.id}>{list.content} <img src={del} height="20px" width="20px"
                    
                    onClick={()=>{this.delete(list.id)}}
                    /></li>
                  
                   
                    </ul>
                )
            })
 ):(
    <div class="alert alert-danger" role="alert">
   Please Add Items
  </div>
 )}
                       <AddItem addTodo={this.addTodo}/>
        
            </div>
            )

    }
}
export default Main;