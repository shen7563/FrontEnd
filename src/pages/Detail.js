import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams();

    return (
        <div>
            <h1>{props.news_data[id].title}</h1>
            <p>{props.news_data[id].content}</p>
        </div>
    )
}

export default Detail;