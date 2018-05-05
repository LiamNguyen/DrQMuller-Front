import UserConstants from '../constants/UserConstants';

const { GET_OWN_INFO } = UserConstants;

export const getOwnInfo = () => ({
  type: `${GET_OWN_INFO}_REQUEST`
});

export default {
  getOwnInfo
};
