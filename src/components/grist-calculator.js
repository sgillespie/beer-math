import React from 'react';

import RecipeTargets from './recipe-targets';
import RecipeTotals from './recipe-totals';

export default function GristCalculator () {
	return (
		<div className="container">	
			<div className="panel panel-default" >
				<div className="panel-heading" >
					<h3 className="panel-title" >Original Grain Bill</h3>
				</div>

				<div className="panel-heading">
          <RecipeTargets />
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
          <RecipeTotals />
				</div>
			</div>
		</div>
	);
}
