import { ApiService } from '.';
import { AGENT_BASE_URL } from '@repo/utils/constants';
import type { ModelPreset } from '@/src/types/models';

export class ModelsService {
  private apiService: ApiService;

  constructor() {
    this.apiService = new ApiService(`${AGENT_BASE_URL}/models`);
  }
  async getModels(): Promise<ModelPreset[]> {
    const { data } = await this.apiService.get<ModelPreset[]>('');
    return data as ModelPreset[];
  }
}

const modelsService = new ModelsService();

export default modelsService;
