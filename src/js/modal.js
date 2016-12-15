import React from 'react';

export default class Modal extends React.Component {

	static propTypes = {
		modalStyles: React.PropTypes.object,
		overlayStyles: React.PropTypes.object,
		isOpen: React.PropTypes.bool
	};

	static defaultProps = {
		modalStyles: {},
		overlayStyles: {},
		isOpen: false
	};

	constructor() {

		super();
		this.closeModal = this.closeModal.bind(this);
		this.renderModal = this.renderModal.bind(this);
		this.state = {
			isOpen: true
		}
	}

	closeModal() {

		this.setState({ isOpen: false });
		console.log(this.state.isOpen);
	}

	renderModal() {

		const { modalStyles, overlayStyles} = this.props;
		const _modalStyles = this.state.isOpen ? modalStyles.mdl : modalStyles.fade_out;
		const _overlayStyles = this.state.isOpen ? overlayStyles : modalStyles.fade_out_overlay;

		return (
			<div className="mdl-overlay" style={ _overlayStyles } onClick={() => this.closeModal()}>
				<div className="mdl" style={ _modalStyles }>
					{this.props.children}
				</div>
			</div>
			);
	}

	render() {

		return (
			// this.state.isOpen?this.renderModal():null
			this.renderModal()
		);
	}
}
