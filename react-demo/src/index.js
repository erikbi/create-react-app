import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// class Header extends Component {
//   render () {
//     return (
//       <div>
//         <h1>React 小书</h1>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Header />,
//   document.getElementById('root')
// )

// class Title extends Component{
   
//     handleClick(word,e){
//         console.log(this,word) 
//     };
//     render(){
//         let word = 'okok';
//         let isgood = false;
//         return(
//             <div className = {word}>
//                 <div>KONG</div>
//                 <h1>
//                     Erik demo{ isgood ? <strong> good </strong> : null }
//                 </h1>
//                 <button onClick ={this.handleClick.bind(this,"Hello world")} >Click me </button>
//             </div>
//         )
//     }
// }

// class Header extends Component{
//     render(){
//         return(
//         <div>
//             <h2>This is Header</h2>
//             <Title/>
//         </div>
//         )
//     }
// }
// class Index extends Component{
//     render(){
//         return(
//             <div>
//                 <h2>This is Index</h2>
//                 <Header/>
//             </div>
//         )
//     }
// }

class Dog extends Component {
    constructor(){
        super()
        this.state={
            isRunning : false,
            isBarking : false
        }
    }
    bark () {
        this.setState({
            isBarking:true
        }
        )
         setTimeout(()=>this.setState({
            isBarking:false
        }), 1000);
        this.run();

    }
    
    run () {
        this.setState({
            isRunning:true
        })
        setTimeout(()=>this.setState({
            isRunning:false
        }), 5000);
    }
    
    render () {
        return (
        <div onClick={this.bark.bind(this)}>{this.state.isBarking?'    isBarking':'    StopBarking'}{this.state.isRunning?'    isRunning':'    StopRunning' }  </div>
        )
    }
}

// class LikeButton extends Component {
//   constructor () {
//     super()
//     this.state = { 
//         name : '点赞',
//         isLiked: false }
//   }

//   handleClickOnLikeButton () {
//     this.setState({
//       name: this.state.name === '点赞'?'取消':'点赞',
//       isLiked: !this.state.isLiked
//     })
//   }

//   render () {
//     return (
//       <button onClick={this.handleClickOnLikeButton.bind(this)}>
//         {this.state.name} 👍
//       </button>
//     )
//   }
// }

// class Index extends Component {
//   render () {
//     return (
//       <div>
//         <LikeButton />
//       </div>
//     )
//   }
// }

ReactDOM.render(
    //<Index/>,
    <Dog/>,
    document.getElementById('root')
)