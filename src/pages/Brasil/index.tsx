import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table';

import {getDataBrasil, getDataBrasilState} from '../../services/api';
import {Container, Header, Cards, Card, TableState} from './styles';
import formatValue from '../../utils/formatValue';

interface BrasilCard {
  confirmed: number;
  recovered: number;
  deaths: number;
  updated_at: string;
}

interface BrasilState {
  uid: number;
  uf: string;
  state: string;
  cases: string;
  deathes: number;
  refuses: number;
}

const AppBrasil: React.FC = () => {

  const[brasilCard, setbrasilCard] = useState<BrasilCard | null>(null);
  const[brasilState, setBrasilState] = useState<BrasilState[]>([]);

  useEffect(() => {
    async function getDataBrasilCard() {
      const response = await getDataBrasil();
      console.log('Card: ', response.data.data);
      setbrasilCard(response.data.data);
    }
    getDataBrasilCard();
  }, []);

  useEffect(() => {
    getDataBrasilState().then((response) => {
      console.log('State: ', response.data);
      setBrasilState(response.data);
    });
  }, []);

  return (
    <>
      <Header>
        <h1>Brasil</h1>
        <h4>Data Atualização: {brasilCard?.updated_at}</h4>
      </Header>

      {brasilCard &&
        <Container>
          <Cards>
            <Card>
              <strong>Infectados</strong>
              <p> {formatValue(brasilCard.confirmed)}</p>
              <p>Número de casos ativos</p>
            </Card>

            <Card color="green">
              <strong>Curados</strong>
              <p> {formatValue(brasilCard.recovered)}</p>
              <p>Número de casos curados</p>
            </Card>

            <Card color="red">
              <strong>Mortes</strong>
              <p> {formatValue(brasilCard.deaths)}</p>
              <p>Número de mortes</p>
            </Card>
          </Cards>

          <TableState>
            <MaterialTable style={{ background: '#B0C4DE' }}
              title=""
              columns={[
                { title: 'UF', field: 'uf'},
                { title: 'Estado', field: 'state'},
                { title: 'Confirmados', field: 'cases', type: "numeric" },
                { title: 'Curados', field: 'refuses', type: 'numeric' },
                { title: 'Mortes', field: 'deaths', type: 'numeric' },
              ]}
              data={brasilState}

              options={{
                headerStyle: {
                  backgroundColor: '#B0C4DE',
                  color: '#000',
                  fontFamily: 'bold',
                  fontSize: '24px'
                },
              }}

              localization={{
                toolbar: {
                    exportTitle: "Exportar",
                    searchPlaceholder: "Pesquisar"
                  }
              }}

            />
          </TableState>

        </Container>
      }
    </>
  );
};

export default AppBrasil;
