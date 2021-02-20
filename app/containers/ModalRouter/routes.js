import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';

import RoadMarkings from '../../components/Modals/RoadMarkings';
import HighFriction from '../../components/Modals/HighFriction';
import TempMarkings from '../../components/Modals/TempMarkings';
import RoadStuds from '../../components/Modals/RoadStuds';
import LineRemoval from '../../components/Modals/LineRemoval';
import CarParks from '../../components/Modals/CarParks';
import Playground from '../../components/Modals/Playground';
import Recovery from '../../components/Modals/Recovery';
import Depot from '../../components/Modals/Depot';
import PreFormed from '../../components/Modals/PreFormed';
import JoinSealing from '../../components/Modals/JoinSealing';
import SpecialistVehicles from '../../components/Modals/SpecialistVehicles';
import Policy from '../../components/Modals/Policy';

const PageRouter = (props) => (
  <ConnectedRouter history={props.history}>
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}>
      <Switch>
        <Route
          exact
          path='/policy'
          render={(routeProps) => <Policy {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/road_markings'
          render={(routeProps) => <RoadMarkings {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/high_friction'
          render={(routeProps) => <HighFriction {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/temporary_markings'
          render={(routeProps) => <TempMarkings {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/road_studs'
          render={(routeProps) => <RoadStuds {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/line_removal'
          render={(routeProps) => <LineRemoval {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/car_parks'
          render={(routeProps) => <CarParks {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/playgrounds'
          render={(routeProps) => <Playground {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/recovery'
          render={(routeProps) => <Recovery {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/depot_and_factory'
          render={(routeProps) => <Depot {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/pre_formed'
          render={(routeProps) => <PreFormed {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/joint_sealing'
          render={(routeProps) => <JoinSealing {...routeProps} {...props} />}
        />
        <Route
          exact
          path='/specialist_vehicles'
          render={(routeProps) => (
            <SpecialistVehicles {...routeProps} {...props} />
          )}
        />
      </Switch>
    </div>
  </ConnectedRouter>
);

export const mapStateToProps = (state) => ({
  ...state,
});

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...ownProps,
});

export default connect(mapStateToProps, undefined, mergeProps)(PageRouter);
