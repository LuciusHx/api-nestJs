import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.Dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}
  async create(data: ProductDto) {
    const product = await this.prismaService.product.create({ data });
    return product;
  }
}
