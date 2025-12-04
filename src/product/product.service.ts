import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.Dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async findAllProducts() {
    const products = await this.prismaService.product.findMany();
    return products;
  }

  async findProductById(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new Error('Product not exists.');
    }
    return product;
  }

  async createProduct(data: ProductDto) {
    const product = await this.prismaService.product.create({ data });
    return product;
  }

  async updateProduct(id: number, data: ProductDto) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new Error('Product not exists.');
    }
    await this.prismaService.product.update({ data, where: { id } });
  }

  async deleteProduct(id: number) {
    const product = await this.prismaService.product.findUnique({
      where: { id },
    });
    if (!product) {
      throw new Error('Product not exists.');
    }
    await this.prismaService.product.delete({ where: { id } });
  }
}
