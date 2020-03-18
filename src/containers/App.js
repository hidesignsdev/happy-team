import React, { Component } from 'react'
import './App.css'

import Button from '../components/Button/Button'
import Display from '../components/Display/Display'

import * as action from '../redux/actions/actions'
import {connect} from 'react-redux'
import CalculatorMethods from '../calculator/CaculatorMethods'
const calculator = new CalculatorMethods()
class App extends Component {

  render() {
    return (
      <div className="container">
        <div id="result">
          <Display display={this.props.expression} />
          <Display  display={this.props.value}/>
        </div>

        <div className="keypad">
          <Button id="add" icon="+" func={this.props.onPressAdd}/>
          <Button  id="subtract" icon="-" func={this.props.onPressSubtract}/>
          <Button id="multiply" icon="x" func={this.props.onPressMutiply} />
          <Button  id="divide" icon="/" func={this.props.onPressDivide} />
    
          <Button  id="one" icon="1" func={this.props.onPressInput}/>
          <Button  id="two" icon="2" func={this.props.onPressInput}/>
          <Button  id="three" icon="3"func={this.props.onPressInput} />
    
          <Button  id="clearIteam" icon="C" func={this.props.onPressClearItem}/>
          <Button  id="four" icon="4" func={this.props.onPressInput}/>
          <Button  id="five" icon="5" func={this.props.onPressInput}/>
          <Button  id="six" icon="6" func={this.props.onPressInput}/>
         
          <Button  id="seven" icon="7" func={this.props.onPressInput}/>
          <Button  id="eight" icon="8" func={this.props.onPressInput}/>
          <Button  id="nine" icon="9" func={this.props.onPressInput}/>
          <Button  id="zero" icon="0" func={this.props.onPressInput}/>
      
          <Button id="decimal" icon="." func={this.props.onPressDecimal}/>
          <Button  id="clear" icon="AC" func={this.props.onPressClearAll}/>
          <Button id="equals" icon="=" func={this.props.onPressEqual}/>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({


    onPressInput:(event) => {
      calculator.inputNumber(event.target.value)
      calculator.getValue()
      dispatch(action.input())

    } ,
    onPressAdd: () => dispatch(action.add()),
    onPressSubtract:()=>dispatch(action.subtract()),
    onPressMutiply:()=>dispatch(action.multiply()),
    onPressDivide:()=>dispatch(action.divide()),
    onPressClearAll:()=>dispatch(action.clear()),
    onPressClearItem:()=>dispatch(action.clearItem()),
    onPressDecimal:()=>dispatch(action.decimal()),
    onPressEqual:()=>dispatch(action.equal())

}
)
const mapStateToProps = (state) => ({
  value:state.value,
  expression:state.expression
})




export default connect(mapStateToProps,mapDispatchToProps)(App)