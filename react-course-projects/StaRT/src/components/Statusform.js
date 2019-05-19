import React from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "react-dates/initialize";
import moment from "moment";

export default class StatusForm extends React.Component {
  constructor(props) {
    super(props);
    this.userText = "";
    this.state = {
      createdAt: moment(),
      calFocussed: false,
      category: "Miscellaneous",
      text: "",
      fullData: "",
      categoryCnt: 1
    };
  }

  Submit = e => {
    e.preventDefault();
  };

  render() {
    return (
		<div className="main">
			<div className="create">
				<form className="myForm" onSubmit={this.Submit}>
					<div className="addRepDiv">
						<SingleDatePicker
							date={this.state.createdAt}
							onDateChange={createdAt => {
								createdAt && this.setState({ createdAt });
							}}
							focused={this.state.calFocussed}
							onFocusChange={({ focused }) => {
								this.setState({ calFocussed: focused });
							}}
							numberOfMonths={1}
							isOutsideRange={() => false}
						/>

						<select
							className="options"
							onChange={e => {
								if (e.target.value != 'Category') {
									this.setState({
										category: e.target.value,
									});
								}
							}}
						>
							<option value="React">React</option>
							<option value="Javascript">Javascript</option>
							<option value="Resume">Resume</option>
							<option value="Css animation">Css animation</option>
							<option value="Category" selected>
								Category
							</option>
						</select>

						<textarea
							className="textarea1"
							placeholder="ENTER STATUS REPORT"
							value={this.state.text}
							onInput={e => {
								this.setState({
									text: e.target.value,
								});
								e.target.value = '';
							}}
						/>
						<button
							className="btn1"
							onClick={() => {
								console.log(JSON.stringify(this.state.fullData, null, 4));
								if (this.state.text.length > 0) {
									this.setState({
										categoryCnt: this.state.categoryCnt + 1,

										fullData:
											this.state.fullData +
											this.state.categoryCnt +
											']' +
											this.state.category +
											':--' +
											this.state.text +
											'\n\n',
									});

									this.setState({
										text: '',
									});
								} else {
									alert('NO STATUS REPORT ENTERED');
								}
							}}
						>
							{' '}
							+
						</button>
					</div>

					<div className="submitRepDiv">
						<textarea disabled className="textarea2" value={this.state.fullData.toUpperCase()} />

						<div className="btn2">
							<button
								onClick={() => {
									this.props.onSubmit({
										createdAt: this.state.createdAt,
										category: this.state.category,
										text: this.state.text,
										fullData: this.state.fullData,
										categoryCnt: this.state.categoryCnt,
									});
								}}
							>
								Submit Report
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
  }
}
