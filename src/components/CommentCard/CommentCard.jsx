import OwnerDate from "../OwnerDate/OwnerDate";

const CommentCard = ({comment}) => {
  console.log(comment.owner)
  return ( 
    <>  
      <h4>{comment.content}</h4>
      {/* <h5>{comment.createdAt.slice(0, 10)}</h5>
      <h5>{comment.owner.name}</h5> */}
      <OwnerDate authorInfo={comment}/>
    </>
  );
}

export default CommentCard;