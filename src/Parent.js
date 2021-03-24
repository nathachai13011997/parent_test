import React from 'react'
const Child = (props) => {
    return <>
        <h1>{props.value}</h1>
        <h2>{props.name}</h2>
    </>
}
function Parent() {
    return (
        <div>
            <Child value='Test' name='Bank' />
        </div>
    )
}
export default Parent


