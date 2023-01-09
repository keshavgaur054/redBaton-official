export const configuration = () => ({
    environment: process.env.NODE_ENV,
    api: {
      host: process.env.HOST || '127.0.0.1',
      port: parseInt(process.env.PORT || '4000', 10),
      limit: parseInt(process.env.LIMIT || '15', 10),
    },
    db: {
      url: process.env.DATABASE_URL,
      host: process.env.DB_HOST || '127.0.0.1',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      user: process.env.DB_USER || 'mysql',
      password: process.env.DB_PASSWORD || '',
      name: process.env.DB_NAME || 'redbaton',
      reset:
        (process.env.DB_RESET || false) &&
        process.env.DB_RESET.toLowerCase() === 'true',
    },
    disk: {
      path: process.env.FILES_PATH || '',
      serveRoot: process.env.FILES_SERVE_ROOT || '',
      baseUrl: process.env.FILES_BASE_URL || '',
    },
    log: {
      level: process.env.LOG_LEVEL || 'info',
      fileNameFormat: process.env.LOG_FILE_NAME_FORMAT || 'YYYY-MM-DD',
      path: process.env.LOG_PATH || '',
    },
    storage: process.env.STORAGE || 'S3',
    image: {
      small: process.env.IMAGE_WIDTH_SMALL || '500',
      medium: process.env.IMAGE_WIDTH_MEDIUM || '1000',
      large: process.env.IMAGE_WIDTH_LARGE || '2000',
    },
    video: {
      thumbnail: process.env.VIDEO_THUMBNAIL || 'true',
      tempPath: process.env.VIDEO_TEMP_PATH || '',
    },
  });
  