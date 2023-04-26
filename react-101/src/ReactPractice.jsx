import React from "react";

const ReactPractice = () => {
	// Adding Event
	function AddEventFootball() {
		const shoot = () => {
			alert("Great Shot!");
		};
		return (
			<button onClick={shoot} className="btn btn-dark uppercase">
				Take the shot!
			</button>
		);
	}

	// Passing Argument
	function PassArgFootball() {
		const shoot = (a) => {
			alert(a);
		};
		return (
			<button onClick={() => shoot("Goal!")} className="btn btn-dark uppercase">
				Take the shot!
			</button>
		);
	}

	// React Event Object
	function EventObjectFootball() {
		const shoot = (a, b) => {
			alert(b.type);
		};

		return (
			<button
				onClick={(event) => shoot("Goal!", event)}
				className="btn btn-dark"
			>
				Take the shot!
			</button>
		);
	}

	// React Conditional Rendering
	function MissedGoal() {
		return <h1>MISSED!</h1>;
	}

	function MadeGoal() {
		return <h1>GOAL!!</h1>;
	}

	function Goal(props) {
		const isGoal = props.isGoal;
		if (isGoal) {
			return <MadeGoal />;
		}
		return <MissedGoal />;
	}

	// Logical && Operator
	const cars = ["Ford", "BMW", "Audi"];
	function Garage(props) {
		const cars = props.cars;
		return (
			<>
				<h1>Garage</h1>
				{cars.length > 0 && (
					<h2>You have {cars.length} cars in your garage.</h2>
				)}
			</>
		);
	}

	return (
		<>
			<PassArgFootball />
			<AddEventFootball />
			<EventObjectFootball />
			<Goal isGoal={false} />
			<Garage cars={cars} />
		</>
	);
};
export default ReactPractice;
