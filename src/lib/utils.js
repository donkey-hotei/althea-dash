export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function clamp(num, min, max) {
  if (num === Infinity || num === -Infinity) {
    return num;
  }

  if (num < min) {
    return min;
  }

  if (num > max) {
    return max;
  }

  return num;
}

export function metric2word(metric) {
  if (metric > 1) {
    return 'None';
  }

  if (metric > 0.75) {
    return '●○○○';
  }

  if (metric > 0.5) {
    return '●●○○';
  }

  if (metric > 0.25) {
    if (metric > 3) {
      return '●●●○';
    }
  }

  return '●●●●';
}

function normalize(current, smallest, greatest) {
  return greatest && (current - smallest) / (greatest - smallest);
}

function logNormalize(current, smallest, greatest) {
  if (current === Infinity || current === -Infinity) {
    return current;
  }
  return (
    Math.log(Math.abs(normalize(current, smallest, greatest) * 10) + 1)
    / Math.log(11)
  );
}

function getGreatestAtKey(key, arr) {
  return arr.reduce((acc, item) => {
    if (Math.abs(item[key]) > acc) {
      return Math.abs(item[key]);
    }
    return acc;
  }, -Infinity);
}

function getSmallestAtKey(key, arr) {
  return arr.reduce((acc, item) => {
    if (Math.abs(item[key]) < acc) {
      return Math.abs(item[key]);
    }
    return acc;
  }, Infinity);
}

export function normalizeNeighbors(neighborData) {
  const greatestCurrentDebt = getGreatestAtKey('currentDebt', neighborData);
  const smallestCurrentDebt = getSmallestAtKey('currentDebt', neighborData);

  const smallestRouteMetricToExit = getSmallestAtKey(
    'routeMetricToExit',
    neighborData,
  );
  const greatestRouteMetricToExit = getGreatestAtKey(
    'routeMetricToExit',
    neighborData,
  );

  const smallestLinkCost = getSmallestAtKey('linkCost', neighborData);
  const greatestLinkCost = getGreatestAtKey('linkCost', neighborData);

  const n = neighborData.map(neighbor => ({
    ...neighbor,
    normalizedCurrentDebt: logNormalize(
      Math.abs(neighbor.currentDebt),
      smallestCurrentDebt,
      greatestCurrentDebt,
    ),
    normalizedRouteMetricToExit: logNormalize(
      neighbor.routeMetricToExit,
      smallestRouteMetricToExit,
      greatestRouteMetricToExit,
    ),
    normalizedLinkCost: logNormalize(
      neighbor.linkCost,
      smallestLinkCost,
      greatestLinkCost,
    ),
  }));

  return n;
}
