import './App.css';
import {Container} from "@mui/material";

import ReposList from './components/ReposList'
import {initLocalStorage} from "./helpers/localStorage";

function App() {
    initLocalStorage()

    return (
        <div className="App">
            <Container maxWidth="sm">
                <header className="App-header">
                    Most popular repos
                </header>

                <ReposList />
            </Container>
        </div>
    );
}

export default App;
