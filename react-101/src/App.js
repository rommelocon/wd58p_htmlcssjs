import Invoice from "./Invoice";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import EmployeesList from "./EmployeesList";

function App() {
	return (
		<div className="App">
			<EmployeesList />
			<Invoice />
		</div>
	);
}

export default App;
