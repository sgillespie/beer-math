import React from 'react';

export default function GristCalculator () {
	return (
		<div className="container">	
			<div className="panel panel-default" >
				<div className="panel-heading" >
					<h3 className="panel-title" >Original Grain Bill</h3>
				</div>
				<div className="panel-heading">
					<div className="row" >
						<div className="col-sm-3" >
							<div className="form-group" >
								<label className="control-label" >
								<span >Preboil Gravity (SG)</span>
								</label>
								<input label="Preboil Gravity (SG)" type="text" className="form-control" value="1.055" />
								<span className="glyphicon form-control-feedback" ></span>
							</div>
						</div>
						<div className="col-sm-3" >
							<div className="form-group" >
								<label className="control-label" >
								<span >Preboil Volume (Gallons)</span>
								</label>
								<input label="Preboil Volume (Gallons)" type="text" className="form-control" value="5" />
								<span className="glyphicon form-control-feedback" ></span>
							</div>
						</div>
						<div className="col-sm-3" >
							<div className="form-group" >
								<label className="control-label" >
								<span >Extract Efficiency</span>
								</label>
								<input type="text" label="Extract Efficiency" className="form-control" value="70" />
								<span className="glyphicon form-control-feedback" ></span>
							</div>
						</div>
					</div>
				</div>
				<div className="panel-body" >
					<table className="table" >
						<thead >
							<tr >
								<th >Grain</th>
								<th >Max PPG</th>
								<th >Percentage</th>
								<th >Weight (lbs/oz)</th>
								<th className="text-right" >Actions</th>
							</tr>
						</thead>
						<tbody >
							<tr >
								<td >Two Row (US)</td>
								<td >36</td>
								<td >
									<span >2.2</span>
									<span >%</span>
								</td>
								<td >
									<span >12</span>
									<span >/</span>
									<span >2</span>
								</td>
								<td className="text-right" >
									<button type="button" className="btn btn-default" >
										<span className="glyphicon glyphicon-remove" >
										</span>
									</button>
								</td>
							</tr>
						</tbody>
					</table>
					<form >
						<div className="row" >
							<div className="col-sm-3" >
								<div className="form-group" >
									<input type="text" placeholder="Grain/Malt Type" className="form-control" />
								</div>
							</div>
							<div className="col-sm-3" >
								<div className="form-group" >
									<input type="text" placeholder="Max PPG" className="form-control" />
								</div>
							</div>
							<div className="col-sm-3" >
								<div className="form-group" >
									<input type="text" placeholder="Percentage" className="form-control" />
								</div>
							</div>
							<div className="col-sm-3 text-right" >
								<button type="button" className="btn btn-default" >
									<span className="glyphicon glyphicon-plus" ></span>
								</button>
								<button type="reset" className="btn btn-default" >
									<span className="glyphicon glyphicon-remove" ></span>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className="panel-footer">
					<div className="row">
						<div className="col-sm-3" >
							<div className="form-group" >
								<label className="control-label" >
									<span >Total weight (lbs/oz)</span>
								</label>
								<input label="Total Weight (lbs/oz)" type="text" className="form-control" value="" />
								<span className="glyphicon form-control-feedback" ></span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
