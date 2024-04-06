import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div>
            <Navbar></Navbar>
            <h1>{id}</h1>
        </div>
    );
};

export default News;