import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
     <h1>comments:</h1>
     <ApprovalCard>
     <div>
      <h4>Warning!</h4>
      Are you sure want to do this
     </div>
     </ApprovalCard>
     <ApprovalCard>
    <CommentDetail
     author="Sam"
     timeAgo="Today at 10:00AM"
      commentText="Hello"
      avatar={faker.image.avatar()}
       />
       </ApprovalCard>

       <ApprovalCard>
    <CommentDetail
     author="henk"
     timeAgo="Today at 2:57PM"
      commentText="Nice body"
        avatar={faker.image.avatar()}
       />
       </ApprovalCard>

      <ApprovalCard>
    <CommentDetail
     author="Alex"
      timeAgo="Today at 10:03PM"
       commentText="Boring"
         avatar={faker.image.avatar()}
        />
        </ApprovalCard>

      <ApprovalCard>
    <CommentDetail
     author="Chris"
      timeAgo="Yesterday at 4:27AM"
       commentText=":)"
         avatar={faker.image.avatar()}
        />
</ApprovalCard>

      <ApprovalCard>
    <CommentDetail
     author="Sytse"
      timeAgo="Yesterday at 3:00AM"
       commentText="Cool Blog post, with the dress "
         avatar={faker.image.avatar()}
        />
        </ApprovalCard>

        <ApprovalCard>
    <CommentDetail
     author="Max"
      timeAgo= "Moonday at 2:00PM "
       commentText="Nice picture"
         avatar={faker.image.avatar()}
       />
       </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))
