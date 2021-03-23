import "./card.css"
const card = (props) => {
    return (
        <div className="card">
            <img src={props.src} alt="" />
            <h1>Look at that^^</h1>
            <p>Isn't it cool?</p>
            <div className="flex">
                <a href="# ">{props.link1}</a>
                <a href="# ">{props.link2}</a>
            </div>
        </div>

    )
}

export default card;