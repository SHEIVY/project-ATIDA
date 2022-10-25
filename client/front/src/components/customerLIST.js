
    function CustomerLIST () {
        state = {
           data: [],
        }
    //const arr = props.todos.filter(t => t.completed === false && t.title.includes(searchWord) === true)
      ///alert("dddd")

      


      getDataFromDb = () => {
        fetch('http://localhost:3000/api/getCustomers')
          .then((list) => list.json())
          .then((res) => this.setState({ data: res.list }));
      };

     const arr = this.state.data
    return (<div style={{textAlign:"center"}} className='divLIST'>
        <h1 className='titel' style={{marginTop:"25px"}}>חברי קופת החולים</h1>
        <br />
        {arr.map(item=>{
            return <div className="theLIST"style={{textAlign:"center",backgroundColor:"green"}} ><label>the cust</label><ToDo key={item.id} todo={item} /></div>
        })}
    </div>);
}
const mapStateToProps = (state) => {
    return {
        todos: state.todo
    }
}
export default CustomerLIST 