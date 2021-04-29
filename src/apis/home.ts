import axios from '@/utils/axios';
import { IResponseData } from '@/common/types/response';
import { List } from '@/common/types/home';

class HomeApi {
  async getData(): Promise<IResponseData<List[]>> {
    const res = await axios.get('/users/XPoet');
    return res;
  }
}

export default new HomeApi();
