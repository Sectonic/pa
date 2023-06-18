
export const createQueryString = (name, value, params) => {
    const newParams = new URLSearchParams(params);
    if (value === '') {
        newParams.delete(name);
    } else {
        newParams.set(name, value);
    }
    if (name === 'filters') {
        newParams.set('page', '1');
        newParams.delete('popup_id');
    }
 
    return newParams.toString();
}