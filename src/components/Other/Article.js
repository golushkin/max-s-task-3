import {Link} from "react-router-dom";
import React from "react";
import propTypes from 'prop-types';
import { Icon, Popconfirm, message } from 'antd';
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
                                <Link to={PATH+`/${info._id}/edit`}><Icon type="edit" /></Link>
                                <Popconfirm title={"Вы действительно хотите это удалить?"}
                                            okText="Да" cancelText="Нет"
                                            onConfirm={()=>{
                                                delNews(info._id)
                                                message.success("Удалено")
                                            }}
                                           >
                                    <Icon type="delete"/>
                                </Popconfirm>
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