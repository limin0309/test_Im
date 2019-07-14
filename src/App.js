import React from 'react';

class App extends React.Component{
  render(){
    const boss="李云龙";
    return (
      <div>
        <h2>独立团 团长{boss}</h2>
        <一营 老大="张大彪1"> </一营>
        <骑兵连 老大="孙德胜"></骑兵连>
      </div>
    )
  }
}

function 骑兵连(props){
  return <h3>骑兵连连长{props.老大},冲啊</h3>
}

// 开发中是不允许用中文当类名组件名的 这里是为了方便理解
class 一营 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      soliders:['胡子','珠子','狗子']
    }
  }
  render(){
    return (
      <div>
      <h2>一营长,{this.props.老大}</h2>
      <ul>
        {this.state.soliders.map(v=>{
          return <li key={v}>{v}</li>
        })}
      </ul>
        </div>
    )

  }
}
export default App

