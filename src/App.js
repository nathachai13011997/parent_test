import React, { useState } from 'react'
import Parent from './CtoPtoC'
import './App.css';

// const Seemore = (props) => {
//   return<>
//   {props.child}
//   </>
// }

// const Child = (props) => {
//   props.parentCallback('Child Data')
//   return <>
//       {/* <h1>test</h1> */}
//   </>
// }

//  Coponent Parent
const App = () => {
  // const [post, setPost] = useState('')
  // const handle = data => {
  //   setPost(data)
  // }

  return <>
    <Parent />
    {/* <div className="App">
      <Child parentCallback={handle} val={post} />
      {post}
      ----------child to child ----------
      <Seemore child={post} />
    </div> */}
  </>
}

export default App;

