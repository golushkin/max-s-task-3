import {Link} from "react-router-dom";
import React from "react";
import propTypes from 'prop-types';

const PATH = "/news";

export function Article(props){
        const { info, name, delNews } = props;
        return(
            <article>
                <div className="title">
                    <div className="link"><Link to={PATH+`/${info._id}`}>{info.title}</Link></div>
                    {
                        name === info.creator.displayName
                            ?
                            <div className="edit">
                                <Link to={PATH+`/${info._id}/edit`}><i className="fal fa-pencil-alt"></i></Link>
                                <i onClick={()=>{delNews(info._id)}} className="fal fa-times"></i>
                            </div>
                            :""
                    }
                </div>
                <div className="info">{info.creator.displayName}</div>
                <div className="text">
                    {info.content}
                </div>
            </article>
        )

}

Article.propTypes = {
    name: propTypes.string.isRequired,
    delNews: propTypes.func.isRequired,
    info: propTypes.object.isRequired,
};