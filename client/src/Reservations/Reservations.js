import React from 'react';
import { Table, Button,
		Container, Row, Col } from 'reactstrap';
import homeImage from './homeImage.jpg';
import "./Reservations.css";

var pageStyle = {
	width: "100%",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "center center",
	backgroundImage: `url(${homeImage})`,

};

class Reservations extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			history: []
		}
	}

	render() {
		return (
			<div className="col-lg-12 reservations-container col-auto" style={pageStyle}>
				<div className="reservations-form-container col-lg-12">
					<br/>
					<br/>
					<br/>
					<br/>         
					<br/> 
					<div>
						<Container>
							<Row>
								<Col>
									<div className="reservations-card">
										<div className="reservations-card-body reservations-inner-card">
											<br/>
											<div className="reservations-center-title"> <h2> My Reservations </h2> </div>
											<br />
											<div className="reservations-table-wrapper-scroll-y reservations-scrollbar">
												<Table hover>
								    				<thead>
								      					<tr>
								       						<th>Booking ID</th>
								        					<th>Date In</th>
								        					<th>Date Out</th>
								        					<th>Hotel</th>
								        					<th>Room Type, Quantity</th>
								        					<th>Total Price</th>
								        					<th>Modify/Cancel</th>
								        					<th>Status</th>
								      					</tr>
								    				</thead>
								    				<tbody>
								    					<tr>
													     		<td> holder </td>
													     		<td> holder </td>
													        	<td> holder </td>
													        	<td> 
													        		holder
													        		<br />
													        		holder
													        	</td>
													        	<td> 
													        		holder, 3
													        		<br />
													        		holder, 2
													        	</td>
													        	<td> holder </td>
													        	<td> <Button color ="warning"> Modify </Button> <Button color="danger"> Cancel </Button> </td>
													        	<td> holder </td>
											        	</tr>
								    					<tr>
													     		<td> holder </td>
													     		<td> holder </td>
													        	<td> holder </td>
													        	<td> holder </td>
													        	<td>
													        		holder, 3
													        	</td>
													        	<td> holder </td>
													        	<td> <Button color ="warning"> Modify </Button> <Button color="danger"> Cancel </Button> </td>
													        	<td> holder </td>
											        	</tr>
								    					<tr>
													     		<td> holder </td>
													     		<td> holder </td>
													        	<td> holder </td>
													        	<td> holder </td>
													        	<td> 
													        		holder, 3
													        	</td>
													        	<td> holder </td>
													        	<td> <Button color ="warning"> Modify </Button> <Button color="danger"> Cancel </Button> </td>
													        	<td> holder </td>
											        	</tr>
								    					<tr>
													     		<td> holder </td>
													     		<td> holder </td>
													        	<td> holder </td>
													        	<td> holder </td>
													        	<td> 
													        		holder, 3
													        	</td>
													        	<td> holder </td>
													        	<td> <Button color ="warning"> Modify </Button> <Button color="danger"> Cancel </Button> </td>
													        	<td> holder </td>
											        	</tr>
								    				</tbody>
								    			</Table>
							    			</div>
								    	</div>
								    </div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</div>
		);
	}
}

export default Reservations;