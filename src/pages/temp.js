/*import axios from 'axios';
import { useEffect } from 'react';

function Temp() {
    const [data, setData] = useState([]);

    const getNews = async () => {
        const url = "/v1/search/news.json";
        
        const options = {
            header: {
                "X-Naver-Client-Id": "eLFtCBjwNEgrrufyiyF_",
                "X-Naver-Client-Secret": "9b1HjJJgx4",
            }
        }
        const response = await axios.get(url, options);
        console.log(response.data);
    }
    useEffect(() => {
        getNews();
    }, []);
}

export default Temp;*/