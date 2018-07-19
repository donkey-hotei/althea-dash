import React, { Component } from 'react';
import { actions, connect } from '../../store';
import NodeInfo from './NodeInfo';
import { normalizeNeighbors } from '../../lib/utils';
import './Neighbors.css';

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
