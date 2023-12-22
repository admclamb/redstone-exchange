import {
  FindOptionsOrder,
  FindOptionsWhere,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';
import { PaginationDto } from './dtos/pagination-dto';
import { PaginationResponse } from './dtos/pagination-response.dto';

export class Pagination {
  public static async paginate<T>(
    { page, size }: PaginationDto,
    findOptions: FindOptionsWhere<T>,
    orderOptions: FindOptionsOrder<T>,
    repository: Repository<T>,
  ): Promise<PaginationResponse<T>> {
    const results = await repository.find({
      ...findOptions,
      ...orderOptions,
      skip: (page - 1) * size,
      take: size,
    });

    const total = await repository.count(findOptions);
    return {
      page,
      size,
      results,
      totalPages: Pagination.calculatePageTotal(size, total),
      total,
      isEnd: page * size >= total,
    };
  }

  public static calculatePageTotal(size: number, total: number): number {
    if (total === 0) {
      return 0;
    }
    return Math.ceil(total / size);
  }
}
