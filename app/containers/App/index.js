import React from 'react';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Home from '../Home';
import ModalRouter from '../ModalRouter';
import * as modalActions from '../ModalRouter/actions';

export class AppComp extends React.Component {
  render() {
    return (
      <div>
        <ModalRouter history={this.props.history} />
        <div style={this.getStyle()}>
          <Navbar />
          <Home openModal={this.props.openModal} />
          <Footer openModal={this.props.openModal} />
        </div>
      </div>
    );
  }

  getStyle() {
    return {
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      top: 0,
      right: 0,
      left: 0,
    };
  }
}

export const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {dispatch} = dispatchProps;

  return {
    ...stateProps,
    ...ownProps,
    openModal: (path) => {
      dispatch(
        push({
          pathname: path,
        }),
      );
      dispatch(modalActions.show());
      document.body.classList.add('has-modal');
      document.documentElement.classList.add('has-modal');
    },
  };
};

export default connect(mapStateToProps, undefined, mergeProps)(AppComp);
