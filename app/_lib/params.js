
export const createQueryString = (name, value, params) => {
    const newParams = new URLSearchParams(params);
    newParams.set(name, value);
    if (name === 'filters') {
        newParams.set('high', '50');
        newParams.set('popup_id', '');
    }
 
      return newParams.toString();
}