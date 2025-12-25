// UTILS
import { ModelPreset } from '@/types/models';
import db from '@/utils/database';
// LOGGER
import logger from '@/utils/logger';

class ModelsController {
  async getModels(c: any) {
    try {
      logger.debug('[DEBUG LOG] Getting models');
      const { rows } = await db.query<ModelPreset>(
        'SELECT * FROM model_presets'
      );
      console.log(rows);
      return c.json(rows, 200);
    } catch (error: unknown) {
      logger.error('[ERROR LOG]', { error });
      return c.json(
        {
          error: 'Failed to get models',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
        500
      );
    }
  }
  async createModel(c: any) {
    try {
      logger.debug('[DEBUG LOG] Creating model');
      const {
        display_name,
        description,
        note,
        icon,
        provider,
        provider_model,
        is_enabled,
        is_default,
        sort_order,
        show_in_ui,
      } = await c.request.json();

      if (!display_name || !provider || !provider_model) {
        return c.json(
          {
            error: 'Failed to create model',
            message: 'display_name, provider, and provider_model are required',
          },
          400
        );
      }

      const { rows } = await db.query<ModelPreset>(
        'INSERT INTO model_presets (display_name, description, note, icon, provider, provider_model, is_enabled, is_default, sort_order, show_in_ui) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
        [
          display_name,
          description,
          note,
          icon,
          provider,
          provider_model,
          is_enabled,
          is_default,
          sort_order,
          show_in_ui,
        ]
      );

      if (rows.length === 0) {
        return c.json(
          {
            error: 'Failed to create model',
            message: 'No model was created',
          },
          500
        );
      }

      return c.json(rows[0], 201);
    } catch (error: unknown) {
      logger.error('[ERROR LOG]', { error });
      return c.json(
        {
          error: 'Failed to create model',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
        500
      );
    }
  }
  async updateModel(c: any) {
    try {
      logger.debug('[DEBUG LOG] Updating model');
      const {
        id,
        display_name,
        description,
        note,
        icon,
        provider,
        provider_model,
        is_enabled,
        is_default,
        sort_order,
        show_in_ui,
      } = await c.request.json();

      if (!id) {
        return c.json(
          {
            error: 'Failed to update model',
            message: 'ID is required',
          },
          400
        );
      }

      const { rows } = await db.query<ModelPreset>(
        'UPDATE model_presets SET display_name = $1, description = $2, note = $3, icon = $4, provider = $5, provider_model = $6, is_enabled = $7, is_default = $8, sort_order = $9, show_in_ui = $10 WHERE id = $11 RETURNING *',
        [
          display_name,
          description,
          note,
          icon,
          provider,
          provider_model,
          is_enabled,
          is_default,
          sort_order,
          show_in_ui,
          id,
        ]
      );

      if (rows.length === 0) {
        return c.json(
          {
            error: 'Failed to update model',
            message: 'Model not found',
          },
          404
        );
      }

      return c.json(rows[0], 200);
    } catch (error: unknown) {
      logger.error('[ERROR LOG]', { error });
      return c.json(
        {
          error: 'Failed to update model',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
        500
      );
    }
  }
  async deleteModel(c: any) {
    try {
      logger.debug('[DEBUG LOG] Deleting model');
      const { id } = await c.request.json();

      if (!id) {
        return c.json(
          {
            error: 'Failed to delete model',
            message: 'ID is required',
          },
          400
        );
      }

      const { rows } = await db.query<ModelPreset>(
        'DELETE FROM model_presets WHERE id = $1 RETURNING *',
        [id]
      );

      if (rows.length === 0) {
        return c.json(
          {
            error: 'Failed to delete model',
            message: 'Model not found',
          },
          404
        );
      }

      return c.json(rows[0], 200);
    } catch (error: unknown) {
      logger.error('[ERROR LOG]', { error });
      return c.json(
        {
          error: 'Failed to delete model',
          message: error instanceof Error ? error.message : 'Unknown error',
        },
        500
      );
    }
  }
}

const modelsController = new ModelsController();

export default modelsController;
