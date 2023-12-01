import { AccountModel } from "./AccountModel";
import { CategoryModel } from "./CategoryModel";
import { ProblemSetupModel } from "./ProblemSetupModel";

export interface ProblemModel {
  id: number;
  createdBy: AccountModel;
  title: string;
  question: string;
  likes: number;
  dislikes: number;
  categories: CategoryModel[];
  createdAt: Date;
  updatedAt: Date;
  problemSetups?: ProblemSetupModel[];
}
