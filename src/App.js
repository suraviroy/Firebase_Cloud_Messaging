
import './App.css';
import Notification22 from './Notification22';
// import Notificationn from './Notification';
import MyComponent from './component';
import OnlineStatus from './onlineStaus';
import Prescription from './pages/Prescription';
import Profile from './pages/Profile';
import Tree from './pages/Treee';
import Precip from './pages/precip';


function App() {
  return (
    <div className="App">
      <div className='headings'>Notification</div>
      <div>
        {/* <Tree /> */}
        {/* <Notificationn />  */}
         {/* <MyComponent /> */}
       {/* <Profile /> */}
        {/* <OnlineStatus /> */}
        {/* <Prescription /> */}
         <Notification22 /> 
        </div>
    </div>
  );
}

export default App;


// import React, {useState,useEffect} from 'react'
// import './App.css';

// const treeData = [
//     {
//         id : '1',
//         text : 'xdbcjhsdvjcsdf',
//         diamond: false,
//         children:[
//             {
//                 id:'2',
//                 text:'dvdfjvbfd',
//                 diamond: false,
//                 children:[
//                     {
//                         id:'3',
//                         text:'jkvbdfhv',
//                         diamond: false,
//                         children:[
//                             {
//                                 id:'4',
//                                 text:'dbvhd',
//                                 diamond: false,
//                             }
//                         ]
//                     },
//                     {
//                         id:'5',
//                         text:'grgrgrefg',
//                         diamond: false,
//                         children:[
//                             {
//                                 id:'4',
//                                 text:'dbvhd',
//                                 diamond: false,
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
// ]

// const App = () => {
    
//     const [state, setstate] = useState([]);
   
//     return (
// <div className="tree">
//     {
//         treeRendering(treeData)
//     }
	
// </div>
//     )
// }

// const treeRendering = (treeData) => {
    
//     return (
//         <>
//                 <ul>
//             {
//                 treeData.map((item)=>                
//                     <li className={item.text+item.id}>
//                         <div>{ item.id}</div>
//                         {
//                             item.children && item.children.length ?
//                             treeRendering(item.children)
//                             :''
//                         }
//                     </li>
//                 )            
                
//             }
//             </ul>
//         </>
//     )
// }


// export default App;