import Api from "../utils/api";
import { handleApi } from "../utils/apiHandler";
import { API_CONSTANTS } from "../utils/constants";

export const getTopHeadlines = async (params) => {
  const res = await Api.get(API_CONSTANTS.getTopHeadlines, params);
  return handleApi(res);
}
