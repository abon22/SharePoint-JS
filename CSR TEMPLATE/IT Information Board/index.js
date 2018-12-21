// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   componentDidMount (){
    
//   }

//   render() {
//     return (
//       <div>
//         <div className="ui top attached tabular menu">
//           <a className="item">Dashboard</a>
//           <a className="item">Asset Type</a>
//           <a className="item">Reports</a>
//           <div className="right menu">
//             <div className="item">
//               <div className="ui transparent icon input">
//                 <input type="text" placeholder="Search users..." />
//                 <i className="search link icon" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="ui bottom attached segment">
//         </div>
//       </div>
//     );
//   }
// }



const App = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label image={imageSrc} />
      <Feed.Content>
        <Feed.Date>3 days ago</Feed.Date>
        <Feed.Summary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
);



ReactDOM.render(<App />, document.getElementById("root"));
