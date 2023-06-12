
export const createQueryString = (name, value, params) => {
    const newParams = new URLSearchParams(params);
    newParams.set(name, value);
    if (name === 'filters') {
        newParams.set('page', '1');
        newParams.set('popup_id', '');
    }
 
      return newParams.toString();
}