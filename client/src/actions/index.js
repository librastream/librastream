export const  SET_TRANSACTION= 'SET_TRANSACTION';

export function transaction(title) {
  return {
    type: SET_TRANSACTION,
    transaction: {
      _id: (new Date().getTime()).toString(),
      title
    }
  };
}
