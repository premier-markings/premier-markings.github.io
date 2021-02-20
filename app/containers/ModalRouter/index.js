import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Motion, spring} from 'react-motion';
import {replace} from 'react-router-redux';

import * as modalActions from './actions';
import Routes from './routes';

class ModalRouter extends Component {
  constructor(props) {
    super(props);
    this.getStyle = this.getStyle.bind(this);
    this.getDisplay = this.getDisplay.bind(this);
  }

  getDisplay(x) {
    const {isVisible} = this.props;
    return !isVisible && x < 0.25 ? 'none' : 'block';
  }

  getStyle() {
    return {
      x: this.props.isVisible ? spring(0.7) : spring(0),
    };
  }

  render() {
    return (
      <Motion defaultStyle={{x: 0}} style={this.getStyle()}>
        {({x}) => (
          <div
            style={{
              position: 'fixed',
              zIndex: 2,
              display: this.getDisplay(x),
              backgroundColor: `rgba(0, 0, 0, ${x})`,
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
              overflow: 'scroll',
            }}
            onClick={this.props.closeModal}
            className='modal'>
            <Routes
              history={this.props.history}
              closeModal={this.props.closeModal}
            />
          </div>
        )}
      </Motion>
    );
  }
}

export const mapStateToProps = (state) => ({
  isVisible: state.modalRouter.isVisible,
});

export const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {dispatch} = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    closeModal: () => {
      dispatch(
        replace({
          pathname: '/',
        }),
      );
      dispatch(modalActions.reset());
      document.body.classList.remove('has-modal');
      document.documentElement.classList.remove('has-modal');
    },
  };
};

export default connect(mapStateToProps, undefined, mergeProps)(ModalRouter);
