import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams();

    return (
        <div>
            <h1>{props.newsdata[id].title}</h1>
            <p>{props.newsdata[id].content}</p>
        </div>
    )
}

export default Detail;