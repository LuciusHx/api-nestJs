import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectionLimit: 10,
    });
    super({
      adapter,
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
