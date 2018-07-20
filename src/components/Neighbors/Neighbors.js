import React, { Component } from 'react';
import { actions, connect } from '../../store';
import NodeInfo from './NodeInfo';
import {
  getMinimumAtKey,
  getMaximumAtKey,
  logNormalize,
} from '../../lib/utils';
import './Neighbors.css';

/**
 * Log-normalizes current debt, total route metric to exit node, and link cost
 * neigbors in neighbor data.
 */
const normalizeNeighbors = (neighborData) => {
  const minCurrentDebt = getMinimumAtKey('currentDebt', neighborData);
  const maxCurrentDebt = getMaximumAtKey('currentDebt', neighborData);
  const minRouteMetricToExit = getMinimumAtKey('routeMetricToExit', neighborData);
  const maxRouteMetricToExit = getMaximumAtKey('routeMetricToExit', neighborData);
  const minLinkCost = getMinimumAtKey('linkCost', neighborData);
  const maxLinkCost = getMaximumAtKey('linkCost', neighborData);

  return neighborData.map(neighbor => ({
    ...neighbor,
    normalizedCurrentDebt: logNormalize(
      Math.abs(neighbor.currentDebt),
      minCurrentDebt,
      maxCurrentDebt,
    ),
    normalizedRouteMetricToExit: logNormalize(
      neighbor.routeMetricToExit,
      minRouteMetricToExit,
      maxRouteMetricToExit,
    ),
    normalizedLinkCost: logNormalize(
      neighbor.linkCost,
      minLinkCost,
      maxLinkCost,
    ),
  }));
};

class Neighbors extends Component {
  componentDidMount() {
    actions.getNeighborData();
  }

  render() {
    const { neighborData } = this.props.state;
    const normNeighbors = normalizeNeighbors(neighborData);

    return (
      <div>
        <h1>
          Neighbors
        </h1>
        <div>
          {normNeighbors.map(neigh => <NodeInfo {...neigh} />)}
        </div>
      </div>
    );
  }
}

export default connect(['neighborData'])(Neighbors);
