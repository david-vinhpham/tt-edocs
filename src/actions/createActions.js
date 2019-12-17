/*
 * Create Redux Action
 * @param: {String} type - Redux action type
 * @param: {Boolean} data - Action with payload
 * @return: {Object} action
 */
export const createActionType = (type, data = false) => {
  if (data) {
    return payload => ({
      type,
      payload,
    });
  }
  return () => ({
    type,
  });
};

export default null;
