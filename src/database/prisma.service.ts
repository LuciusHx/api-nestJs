import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'src/generated/prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const adapter = new PrismaMariaDb({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'admin',
      database: 'products',
      connectionLimit: 10,
    });
    super({ adapter });
  }
}
