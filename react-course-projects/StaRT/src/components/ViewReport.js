import React from 'react';

export default class ViewReport extends React.Component {
    constructor(props) {
        super(props)
    }
    displayReport=()=>{
            console.log('this.props.report.category:-' + JSON.stringify(this.props.report.category));
            return (this.props.report.fullData ? JSON.stringify(this.props.report) : '')
    }
	render() {
       console.log('4:-' + JSON.stringify(this.props.report));

		return (
			<div className="mainView">
				<div className="createView">
					<div className="myformView">
						<input type="text" placeholder="SEARCH REPORT" value="" />
						<select className="optionsView">
							<option value="sort_date">SORT_BY_DATE</option>
							<option value="sort_category">SORT_BY_CATEGORY</option>
						</select>
						<textarea className="textAreaView" value={this.displayReport()}/>
                        }}/>
					</div>
				</div>
			</div>
		);
	}
}
