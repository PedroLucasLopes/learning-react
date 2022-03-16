import ReactDOM from 'react-dom';

function App() {
    return React.createElement('a', {
        href: 'https://www.origamid.com'
    },
        'Origamid')
}

ReactDOM.render(<App />, document.querySelector("#root"));
