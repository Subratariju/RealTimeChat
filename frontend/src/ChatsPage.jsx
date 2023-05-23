// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//   return 
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <PrettyChatWindow
//         projectId="dec42218-5cc8-43a7-8448-0e1aac69a977"
//         username={props.user.username} // adam
//         secret={props.user.secret} // pass1234
//         style={{ height: "100%" }}
//       />
      
//     </div>
  
// };

// export default ChatsPage;

import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <PrettyChatWindow
        projectId='dec42218-5cc8-43a7-8448-0e1aac69a977'
        username={props.user.username} // adam
        secret={props.user.secret} // pass1234
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ChatsPage;