import "./card.css"

const card = (props) => {
    console.log(props)
    return (
        <div className="card">
            <img src={props.src} alt=""/>
            <h1>Look at that^^</h1>
            <p>Isn't it cool?</p>
            <div className="flex">
                <a href="# ">SHARE</a>
                <a href="# ">COMMENT</a>
            </div>
        </div>
    )

}

export default card;