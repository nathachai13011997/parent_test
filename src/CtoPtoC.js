import React, { useState } from 'react'

const Child = ({ myData }) =>{
    myData('Hi')
    return<>
    </>
} 
const Child2 = ({ data }) => <h1>Child2 : {data}</h1>
const Parent = () => {
    const [data, setData] = useState('')
    const myData = (data_child) => {
        setData(data_child)
    }
    return <>
        <div>
            <Child myData={myData} />
            <Child2 data={data} />
        </div>
    </>
}

export default Parent
