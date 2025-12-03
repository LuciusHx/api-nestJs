import { Body, Controller, Post } from '@nestjs/common';
import type { ProductDto } from './product.Dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() data: ProductDto) {
    return this.productService.create(data);
  }
}
