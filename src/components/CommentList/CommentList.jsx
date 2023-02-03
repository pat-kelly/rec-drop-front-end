import CommentCard from "../CommentCard/CommentCard";

const CommentList = () => {
  return ( 
    <>  
      <h1>Comment List</h1>
      {/* map over comment list */}
      <CommentCard/>
    </>
  );
}

export default CommentList;