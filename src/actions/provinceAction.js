export const setProvince = provinceData => {
    return {
      type: 'SET_PROVINCE',
      provinceData: provinceData
    };
};
export const setGeojson = geojsonData => {
  return {
    type: 'SET_GEOJSON',
    geojsonData: geojsonData
  };
};