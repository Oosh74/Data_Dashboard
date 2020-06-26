import React from 'react';
import {VictoryPie, VictoryTheme, VictoryTooltip} from 'victory';
import {Container} from '@material-ui/core';

export default function EthnicityChart(props) {
  const data = [];
  console.log(props);

  for (let key in props.ethnicityData) {
    if (
      props.ethnicityData[key] !== null &&
      Math.ceil(props.ethnicityData[key] * 100) > 0
    ) {
      data.push({x: key, y: Math.ceil(props.ethnicityData[key] * 100)});
    }
  }

  return (
    <Container>
      <VictoryPie
        innerRadius={100}
        padAngle={2}
        data={data}
        theme={VictoryTheme.material}
        labels={({datum}) => `${datum.x}: ${datum.y}%`}
        labelComponent={
          <VictoryTooltip
            constrainToVisibleArea
            style={{
              fill: 'white',
              fontSize: 11,
              fontWeight: 'bold',
              fontFamily: 'Roboto',
              color: 'white',
            }}
            cornerRadius={0}
            flyoutStyle={{
              fill: '#3f51b5',
              stroke: 'white',
              strokeWidth: 1,
            }}
          />
        }
      />
    </Container>
  );
}
