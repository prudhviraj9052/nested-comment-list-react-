import React, { useState } from 'react';
import './styles.css';

const Comment = ({ id, text, replies }) => {
  const [newReplyText, setNewReplyText] = useState('');
  const [nestedReplies, setNestedReplies] = useState(replies || []);

  const handleReplyChange = (event) => {
    setNewReplyText(event.target.value);
  };

  const handleReplySubmit = (event) => {
    event.preventDefault();
    const newReply = {
      id: Date.now(),
      text: newReplyText,
      replies: []
    };

    setNestedReplies((prevReplies) => [...prevReplies, newReply]);
    setNewReplyText('');
  };

  return (
    <div className='main' style={{ marginLeft: '20px', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
      <p>{text}</p>

      {/* Display existing replies */}
      {nestedReplies.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          {nestedReplies.map((reply) => (
            <Comment key={reply.id} {...reply} />
          ))}
        </div>
      )}

      {/* Form to add a new reply */}
      <form onSubmit={handleReplySubmit}>
        <input type="text" value={newReplyText} onChange={handleReplyChange} placeholder="Reply to this comment" />
        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

const NestedComment = () => {
  const comments = [
    {
      id: 1,
      text: ' Add a public comment',
      replies: [
       
      ]
    },
   
  ];

  return (
    <div className='Main'>
      <h1>Nested Comment List</h1>
      {comments.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default NestedComment;