import axios from 'axios';

const urlWorld = 'https://covid19.mathdro.id/api';
const urlBrasil = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
const urlBrasilState = 'https://covid19-brazil-api.now.sh/api/report/v1';

export const getDataWorld = async () => {
  try {
    const response = await axios.get(urlWorld);

    return response;
  } catch (error) {
    return error;
  }
};

interface DailyDataDTO {
  confirmed: {
    total: number
  },
  deaths: {
    total: number
  },
  recovered: {
    total: number
  }
  reportDate: string
}

export const getDailyDataWorld = async () => {
  try {

    const { data } = await axios.get(`${urlWorld}/daily`);

    console.log('data: ', data);

    return data.map(({ confirmed, deaths, reportDate, recovered }: DailyDataDTO) => (
      {
        confirmed: confirmed.total,
        deaths: deaths.total,
        reportDate,
        recovered: recovered.total }
    ));

  } catch (error) {
    return error;
  }
};

export const getDataBrasil = async () => {
  try {
    const response = await axios.get(urlBrasil);

    return response;
  } catch (error) {
    return error;
  }
};

export const getDataBrasilState = async () => {
  try {
    const {data} = await axios.get(urlBrasilState);

    return data;
  } catch (error) {
    return error;
  }
};



