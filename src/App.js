import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Welcome To Craig's Contact Page, {props.name}</h1>;
}
function Sites(sites) {
  return <a> {sites.link}: </a>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Welcome name="Friend"/>
      <div className="App">
    </div>
        <p className="paragraph">
          Feel free to click any of the links to get in contact with me. But if you REALLY want to overachieve, send a courier pigeon!
        </p>      
        <img src= "https://media-exp1.licdn.com/dms/image/C5603AQGn_rCNo7N6Zg/profile-displayphoto-shrink_800_800/0/1517085487734?e=1661385600&v=beta&t=ABZj2LcnjP6twORRPkhfZygjp_oGh61eFS5yynSODk8" className="Me"/>
        <Sites link = "Twitter"/>
        <a className="App-link"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here!
        </a>
        <Sites link = "Facebook"/>
        <a
          className="App-link"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Or Here!
        </a>
        <Sites link = "Instagram"/>
        <a
          className="App-link"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Or This One!
        </a>
        <Sites link = "Github"/>
        <a
          className="App-link"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Great Code, here!
        </a>
        <Sites link = "Email"/>
        <a
          className="App-link"
          href="https://outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          I've got mail?
        </a>
      </header>
    </div>
  );
}

export default App;
