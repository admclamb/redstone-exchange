import { Account } from './entities/account.entity';
import { Category } from './entities/category.entity';
import { Image } from './entities/image.entity';
import { Question } from './entities/question.entity';

const entities = [Account, Category, Question, Image];

export { Account, Category, Question, Image };
export default entities;
