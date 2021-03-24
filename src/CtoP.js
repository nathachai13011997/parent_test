import React, { useState } from 'react'
const Child = (props) => {
    return <>
        <h1>{props.name('Nathachai')}</h1>
    </>
}
function Parent() {
    const [name, setName] = useState('')
    const myName = (name) => {
        setName(name)
    }
    return (
        <div>
            <h1>{name}</h1>
            <Child name={myName} />
        </div>
    )
}
export default Parent
