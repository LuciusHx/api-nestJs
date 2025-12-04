import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import type { ProductDto } from './product.Dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return this.productService.findAllProducts();
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.productService.findProductById(Number(id));
  }

  @Post()
  async create(@Body() data: ProductDto) {
    return this.productService.createProduct(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: ProductDto) {
    return await this.productService.updateProduct(Number(id), data);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.productService.deleteProduct(Number(id));
  }
}
