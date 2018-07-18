import React, { Component } from 'react';
import { actions, connect } from '../store';
import '../styles/BasicScroll.css';
import NodeInfo from './NodeInfo';
import { normalizeNeighbors } from '../libs/utility';

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
