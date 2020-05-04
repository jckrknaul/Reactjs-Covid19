import React, {useState, useEffect} from 'react';
import { Line, Bar } from 'react-chartjs-2';

import {Container, Header, Cards, Card, Chart} from './styles';

import {getDataWorld, getDailyDataWorld} from '../../services/api';
import formatValue from '../../utils/formatValue';

interface WorldState {
  confirmed: {
    value: number,
    detail: string
  }
  recovered: {
    value: number,
    detail: string
  }
  deaths: {
    value: number,
    detail: string
  }
  lastUpdate: string;
}

interface DailyDataDTO {
  confirmed: {
    total: number
  },
  deaths: {
    total: number
  },
  recovered: {
    total: number
  },
  reportDate: string
}

const AppWorld: React.FC = () => {
  const[worldState, setWorldState] = useState<WorldState | null>(null);
  const [dailyData, setDailyData] = useState<DailyDataDTO[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await getDataWorld();
      setWorldState(response.data);
    }
    getData();
  }, []);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const response = await getDailyDataWorld();
      console.log('Daily: ', response);
      setDailyData(response);
    };

    fetchMyAPI();
  }, []);

  const barChart = (
    worldState?.confirmed ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [worldState.confirmed.value, worldState.recovered.value, worldState.deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in []` },
        }}
      />
    ) : null
  );

  const lineChart = (
    dailyData[0] ? (
      <Line
        data={{
          labels: dailyData.map(({reportDate}) => reportDate),
          datasets: [{
            data: dailyData.map((data) => data.confirmed),
            label: 'Infectados',
            borderColor: '#ADD8E6',
            fill: true,
          }, {
            data: dailyData.map((data) => data.deaths),
            label: 'Mortes',
            borderColor: '#CD853F',
            //backgroundColor: '#CD853F',
            fill: true,
          }
          ],
        }}
      />
    ) : null
  );

  return (
    <>
      <Header>
        <h1>Mundo </h1>
        <h4>Data Atualização: {worldState?.lastUpdate}</h4>
      </Header>

      {worldState &&
        <Container>
          <Cards>
            <Card>
              <strong>Infectados</strong>
              <p>{formatValue(worldState.confirmed.value)}</p>
              <p>Número de casos ativos</p>
            </Card>

            <Card color="green">
              <strong>Curados</strong>
              <p>{formatValue(worldState.recovered.value)}</p>
              <p>Número de casos curados</p>
            </Card>

            <Card color="red">
              <strong>Mortes</strong>
              <p>{formatValue(worldState.deaths.value)}</p>
              <p>Número de mortes</p>
            </Card>
          </Cards>

          <Chart>
            <div>
              {lineChart}
            </div>
          </Chart>

        </Container>
      }

    </>
  );
};

export default AppWorld;
