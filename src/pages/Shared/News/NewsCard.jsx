import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const NewsCard = ({aNews}) => {
    const {image_url, title, details,_id} = aNews;
    // console.log(aNews)
  return (
    <div className="card  bg-base-100 shadow-xl pt-4">
        <h2 className="card-title">{title}</h2>
      <figure>
        <img
          src={image_url}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        {
            details.length > 200 ? <p>{details.slice(0,200)}... <Link to={`/news/${_id}`} className="text-blue-600">Read More</Link> </p> :
            <p>{details}</p>

        } 
        
        
      </div>
    </div>
  );
};

export default NewsCard;
