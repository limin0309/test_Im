import React from 'react';
import {Button,List} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
class App extends React.Component{
  render(){
    const boss="李云龙";
    return (
      <div>
        <h2>独立团 团长{boss}</h2>
        <YiYing 老大="张大彪1"> </YiYing>
        <Qbl 老大="孙德胜"></Qbl>
      </div>
    )
  }
}

function Qbl(props){
  return <h3>骑兵连连长{props.老大},冲啊</h3>
}

// 开发中是不允许用中文当类名组件名的 这里是为了方便理解
class YiYing extends React.Component{
  constructor(props){
    super(props)
    this.state={
      soliders:['胡子','珠子','狗子']
    }
  }

  componentWillMount(){
    console.log('组件马上就要加载了')
  }
  componentDidMount(){
    console.log('组件加载完毕')
  }


  addSolider=()=>{
    this.setState({
      soliders:[...this.state.soliders,'新兵蛋子'+Math.random()]
    })
    console.log('add solider')
  }
  render(){
    console.log('组件正在加载了')
    return (
      <div>
      <h2>一营长,{this.props.老大}</h2>
      <Button type="primary" onClick={this.addSolider}>新兵入伍</Button>
      <List
      renderHeader={()=>'士兵列表'}
      >
       {this.state.soliders.map(v=>{
          return <List.Item key={v}>{v}</List.Item>
        })}
      </List>

        </div>
    )

  }
}
export default App

