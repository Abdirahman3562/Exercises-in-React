// import RenderingListinReact from "./1-Rendering-List-in-React";
// import Brackets from "./2-difference-betwen-brackets";
// import HandelingEmptyOrUndefinedList from "./3-Handeling-Empty-or-undefined-list";

import UserList from "./UserList";

const App = () => {

  const users = [
    { id: 1, name: 'Abdirahmaan', email: 'abdirahmaanmoha2022@gmail.com' },
    { id: 2, name: 'MCHamouda', email: 'mc@gmail.com' },
  ];
  return (
    // <RenderingListinReact />

    // <Brackets />

    // <HandelingEmptyOrUndefinedList/>

    <UserList users={users} />  
  );
};

export default App;
