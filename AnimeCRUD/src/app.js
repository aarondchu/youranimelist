import * as React from "react";
import { AppRouter } from "./components/appRouter";

class App extends React.Component {
    render() {
        return (
            <div id="app">
                <AppRouter />
            </div>
        )
    }
}
export default App;