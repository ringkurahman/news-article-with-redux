import React from 'react'


const LikesCounter = ({ likes, dislikes, addLikes }) => (
  <div className="addlikes-wrapper">
    <h3>How Do You Feel About This</h3>
    <div className="addlikes-container">
      <div className="btn like" onClick={() => addLikes("ADD")}>
        <div className="hits">{likes}</div>
        <div className="icon">
          <i className="fa fa-thumbs-up"></i>
        </div>
      </div>
      <div className="btn dislike" onClick={() => addLikes("REMOVE")}>
        <div className="hits">{dislikes}</div>
        <div className="icon">
          <i className="fa fa-thumbs-down"></i>
        </div>
      </div>
    </div>
  </div>
)

export default LikesCounter