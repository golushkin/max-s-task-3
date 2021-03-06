import {Link} from "react-router-dom";
import React from "react";
import propTypes from 'prop-types';
import { Icon, Popconfirm, message, Avatar } from 'antd';
import {configDate} from "./helpers";
const PATH = "/news";

export function Article(props){
        const { info, name, delNews, img } = props;
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
                <div className="info">
                    <Avatar size={"small"} src={img}/>
                    <p>{info.creator.displayName}</p>
                </div>
                <div className="text">
                    {info.content}
                </div>
                <div className="date">
                    {configDate(info.createDate)}
                </div>
            </article>
        )

}

Article.propTypes = {
    img: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    delNews: propTypes.func.isRequired,
    info: propTypes.object.isRequired,
};