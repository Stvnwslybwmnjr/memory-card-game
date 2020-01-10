import React from 'react';
import './App.css';
import Card from "./components/Card"
import carddata from "./card.json"


class App extends React.Component {
  
  state={
    clicked:[],
    carddata
    // should I store wins and loses here?
  }

  getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  shuffle = (arr) => {
    console.log(arr.length)
    var n = arr.length;              
    for(var i=0 ; i<n ; i++) {
      var j = this.getRandomInt(0,n);       // Get random of [0, n-1]
      
      var temp = arr[i];             
      arr[i] = arr[j];
      arr[j] = temp;

    }
    
    return arr;                     
  }
  

  // shuffle=()=>{}
  // swap=(a,b)=>{
  //   temp=a
  //   a=b
  //   b=temp
  // }

  handleClick = (data) => {
    console.log(data)
    let temp= this.state.clicked

    if(temp.includes(data)){
      console.log("------all ready been clicked-----")//loss logic
      alert("That has already been selected! GAME OVER!!!")
      document.location.reload();
      // this.setState({clicked: this.state.clicked.filter(item => item === false)})

    }else if(this.state.clicked.length === 8) {
      alert("YOU WON!! You must know how to count!")
      document.location.reload();
    }

    //WIN CONDITION HERE!-- temp.length==data.length?WIN:keep playing

    temp.push(data)
    this.setState({clicked:temp}, ()=>console.log(this.state))
  const tempcarddata = this.shuffle(this.state.carddata);
  console.log(this.state.carddata)
  console.log(tempcarddata)
  
  this.setState({carddata:tempcarddata});
  }

  render(){
  return (
    <div className="red" style={{display: "flex"}}>

  
      {
      this.state.carddata.map((value,index)=>{
        return <Card image= {value.image} key={index} handler={this.handleClick}/>
      }
      )}


    </div>
  );
  }
};

export default App;
