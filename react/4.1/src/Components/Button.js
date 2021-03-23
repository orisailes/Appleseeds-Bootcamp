const myBtn = (props) => {
    console.log(props)
    return (
    <button style={{height:"50px",width:"100px",fontWeight:props.fontWeight}}>{props.content}</button>
    )
}

export default myBtn;