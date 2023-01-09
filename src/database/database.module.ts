import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { models } from './models';

@Module({
    imports: [
        SequelizeModule.forRootAsync({
            imports: [],
            useFactory: (config: ConfigService) => {
                return {
                    dialect: 'mysql',
                    host: config.get('MYSQL_HOST') || '127.0.0.1',
                    port: config.get('MYSQL_PORT') || 3306,
                    username: config.get('MYSQL_USERNAME') || 'keshav',
                    password: config.get('MYSQL_PASSWORD') || '',
                    database: config.get('MYSQL_NAME') || 'redbaton',
                    autoLoadModels: true,
                    synchronize: true,
                    models,
                    define: {
                        timestamp: true,
                        createdAt: 'created_at',
                        updatedAt: 'updated_at',
                        deletedAt: false,
                        underscored: true,
                    },
                };
            },
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule { }
