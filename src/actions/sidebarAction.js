export const toggleProvinceSidebar = isOpen => {
  return {
    type: 'SET_TOGGLE_PROVINCE_SIDEBAR',
    isOpen : isOpen 
  };
};
export const setProvinceData = provinceData => {
  return {
    type: 'SET_PROVINCE',
    provinceData: provinceData
  };
};