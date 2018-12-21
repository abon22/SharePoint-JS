class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="ui top attached tabular menu">
          <a className="item">Dashboard</a>
          <a className="item">Asset Type</a>
          <a className="item">Reports</a>
          <div className="right menu">
            <div className="item">
              <div className="ui transparent icon input">
                <input type="text" placeholder="Search users..." />
                <i className="search link icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="ui bottom attached segment">
          <p />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

//----------------------------------------------------------------------------------------------------------

// const Router = window.ReactRouterDOM.BrowserRouter;
// const Route = window.ReactRouterDOM.Route;
// const Link = window.ReactRouterDOM.Link;
// const NavLink = window.ReactRouterDOM.NavLink;
// const Prompt = window.ReactRouterDOM.Prompt;
// const Switch = window.ReactRouterDOM.Switch;
// const Redirect = window.ReactRouterDOM.Redirect;

// const App = () => (
//   <Router>
//     <div>
//       <div className="ui top attached tabular menu">
//         <NavLink exact to="/" className="item" >
//           Dasboard
//         </NavLink>
//         <NavLink to="/about" className="item">
//           Assets
//         </NavLink>
//         <NavLink to="/topics" className="item">
//           Reports
//         </NavLink>
//       </div>
//       <div className="ui bottom attached segment">
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </div>
//   </Router>
// );

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// );

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("root"));

//------------------------------------------------------------------------------------------
