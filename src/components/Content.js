import React from 'react';

const Content = (props) => {
    
    return(
                <div className="post">
                    <div className="postImage"><img src={props.data.titleImg} onError={(e)=>{e.target.onerror = null; e.target.src="./data/img/no-image.png"}}/></div>
                    <div className="postTitle">{props.data.title}</div>
                    <div className="postInfo">
                        <div className="postCreator">{props.data.creator}</div>
                        <div className="postCreatedAt">{props.data.created_at}</div>
                    </div>
                    <div className="postDescription">
                    <div className="postContent" dangerouslySetInnerHTML={{ __html: props.data.content.substring(0,100)+"..."}}/><div className="postShowMore" onClick={() => {props.selectedId(props.data.id)}}>Show More</div>
                    
                    </div>
                </div>  
    )
}

export default Content;