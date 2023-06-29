import { meals } from "../data";

const get = async (url: string) => ({ data: { meals } });

const axios = { get };

export default axios;
