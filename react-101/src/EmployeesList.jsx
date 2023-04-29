import { useEffect, useState } from 'react';
import ApiService from './ApiService';
import EmployeesInfo from './EmployeesInfo';
import EmployeesInfoEdit from './EmployeesInfoEdit';
import { Modal } from 'react-bootstrap';

function EmployeesList() {
	const [list, setList] = useState([]);

	const getEmployeesList = () => {
		ApiService('/employees', null, (data) => {
			setList(data);
		});
	};

	useEffect(() => {
		getEmployeesList();
	}, []);

	const [employeeDetails, setEmployeeDetails] = useState({});

	const onEditHandler = (data) => {
		ApiService('/employees/' + data.id, null, (data) => {
			setEmployeeDetails(data);
		});
	};
	const onEmployeesSaveHandler = (formData) => {
		ApiService(
			'/employees/' + formData.id,
			formData,
			(data) => {
				getEmployeesList();
			},
			formData.id === 0 ? 'POST' : 'PUT'
		);
	};

	const onClickAddHandler = () => {
		setEmployeeDetails({ id: 0 });
	};

	const onDeleteHandler = (formData) => {
		setEmployeeDetails(formData);
		setConfirmOpen(true);
	};

	const [confirmOpen, setConfirmOpen] = useState(false);

	const doConfirmedDeleteHandler = () => {
		doCloseConfirmHandler();
		ApiService(
			'/employees/' + employeeDetails.id,
			employeeDetails,
			(data) => {
				getEmployeesList();
			},
			'DELETE'
		);
	};

	const doCloseConfirmHandler = () => {
		setConfirmOpen(false);
	};
	return (
		<>
			<div className='container'>
				<h3>Employees List</h3>
				<button
					className='btn btn-primary mb-2'
					onClick={onClickAddHandler}
					data-bs-toggle='modal'
					data-bs-target='#myModal'
				>
					Add Employee
				</button>
				<div className='row'>
					{list.map((employeesData) => (
						<EmployeesInfo
							data={employeesData}
							onEditHandler={onEditHandler}
							onDeleteHandler={onDeleteHandler}
						/>
					))}
				</div>
			</div>
			<div
				id='myModal'
				className='modal fade'
				data-bs-backdrop='static'
				data-bs-keyboard='false'
			>
				<div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h4>Student Info</h4>
							<button
								type='button'
								className='btn-close btn-sm'
								data-bs-dismiss='modal'
							></button>
						</div>

						<div className='modal-body'>
							<EmployeesInfoEdit
								data={employeeDetails}
								onSaveHandler={onEmployeesSaveHandler}
							/>
						</div>
					</div>
				</div>
			</div>
			<Modal show={confirmOpen}>
				<Modal.Header>
					<Modal.Title>Confirm Delete</Modal.Title>
					<button
						type='button'
						className='btn-close btn-sm'
						onClick={doCloseConfirmHandler}
					></button>
				</Modal.Header>
				<Modal.Body>
					<h4 className='text-center mb-5'>
						Are you sure you want to DELETE this record?
					</h4>
					<div className='text-center'>
						<button
							className='btn btn-primary me-3 px-5'
							onClick={doCloseConfirmHandler}
						>
							No
						</button>
						<button
							className='btn btn-success px-5'
							onClick={doConfirmedDeleteHandler}
						>
							Yes
						</button>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default EmployeesList;
