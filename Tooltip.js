import React from 'react';
import { G, Rect, Text } from 'react-native-svg';

const Tooltip = ({
  x,
  y,
  tooltipX,
  tooltipY,
  limit,
  unit,
  index,
  dataLength,
}) => {
  let xAxis = 4;
  let negation = 40;

  if (dataLength > 4) {
    if (index < 2) {
      xAxis = 35;
    } else if (index > dataLength - 2) {
      xAxis = -20;
    } else {
      xAxis = 4;
    }
  }

  if (tooltipX == null) {
    tooltipX = 0;
  }

  if (tooltipY == null || tooltipY === 0) {
    tooltipY = 0;
    negation = 10;
  }

  if (tooltipX === 0 && tooltipY === 0) {
    return null;
  } else {
    return (
      <G x={x(tooltipX) - negation} y={y(tooltipY)}>
        <G y={tooltipY > limit ? 10 : -29} x={xAxis}>
          <Rect
            height={22}
            width={70}
            stroke={'#9b9b9b'}
            fill={'#FFFFFF'}
            ry={10}
            rx={10}
          />
          <Text
            x={70 / 2}
            dy={13}
            alignmentBaseline={'middle'}
            textAnchor={'middle'}>
            {`${tooltipY + unit}`}
          </Text>
        </G>
      </G>
    );
  }
};

export default Tooltip;
