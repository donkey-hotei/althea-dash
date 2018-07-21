import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import { PropTypes } from 'prop-types';
import LabelUnit from './LabelUnit';
import ConnectionLine from './ConnectionLine';
import { clamp, metric2word } from '../../lib/utils';

const NodeInfo = ({
  nickname,
  // linkCost,
  normalizedLinkCost,
  routeMetricToExit,
  normalizedRouteMetricToExit,
  priceToExit,
  currentDebt,
  normalizedCurrentDebt,
  totalDebt,
}) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      marginBottom: 30,
    }}
  >
    <h3 style={{ marginBottom: 0, marginRight: 10 }}>
Me
    </h3>
    {/* linkCost: {linkCost} normalizedLinkCost: {normalizedLinkCost} */}
    <ConnectionLine
      thickness={10}
      dash={clamp(normalizedLinkCost * 100, 4, 96)}
      scrollDirection={currentDebt}
      scrollSpeed={(1.1 - normalizedCurrentDebt) * 30}
    />
    <div>
      <Card
        style={{
          border: '3px solid black',
        }}
      >
        <CardBody
          style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 15 }}
        >
          <CardTitle style={{ marginLeft: 10, marginRight: 10 }}>
            {nickname}
          </CardTitle>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <LabelUnit
              label="Link to me"
              content={metric2word(normalizedLinkCost)}
            />
            <LabelUnit
              label="Link to internet"
              content={metric2word(normalizedRouteMetricToExit)}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            {(currentDebt < 0 && (
            <LabelUnit
              label="They are paying me"
              content={`${-currentDebt} ¢/sec.`}
            />
            ))
                || (currentDebt > 0 && (
                  <LabelUnit
                    label="I am paying them"
                    content={`${currentDebt} ¢/sec.`}
                  />
                ))}
            {routeMetricToExit < 10 && (
            <LabelUnit
              label="Bandwidth price"
              content={`${priceToExit} ¢/gb`}
            />
            )}
            {(totalDebt < 0 && (
            <LabelUnit label="Total earned" content={`$${-totalDebt}`} />
            ))
                || (totalDebt > 0 && (
                  <LabelUnit label="Total paid" content={`$${totalDebt}`} />
                ))}
          </div>
        </CardBody>
      </Card>
    </div>
    <ConnectionLine
      thickness={!(currentDebt < 0) ? 10 : 0}
      dash={clamp(normalizedRouteMetricToExit * 100, 4, 96)}
      scrollDirection={currentDebt}
      scrollSpeed={(1.1 - normalizedCurrentDebt) * 30}
    />
    <h3 role="img" style={{ marginBottom: 0, marginLeft: 10 }}>
      <span role="img" aria-label="emoji">
            🌎
      </span>
    </h3>
  </div>
);

NodeInfo.propTypes = {
  nickname: PropTypes.string.isRequired,
  // linkCost: PropTypes.number.isRequired,
  normalizedLinkCost: PropTypes.number.isRequired,
  routeMetricToExit: PropTypes.number.isRequired,
  normalizedRouteMetricToExit: PropTypes.number.isRequired,
  priceToExit: PropTypes.number.isRequired,
  currentDebt: PropTypes.number.isRequired,
  normalizedCurrentDebt: PropTypes.number.isRequired,
  totalDebt: PropTypes.number.isRequired,
};

export default NodeInfo;
