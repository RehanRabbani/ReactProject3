import React from 'react';


class AddItem extends React.Component{
    state={
        content:''
    }
    handleChange = (e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
      this.props.addTodo(this.state);
    }
    render(){
       return(
           <div>
           <form onSubmit={this.handleSubmit}>
           <div class="input-group input-group-lg">
          
           <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={this.handleChange} />
         </div>
  </form>
         
           </div>
       )
    }
}
export default AddItem;