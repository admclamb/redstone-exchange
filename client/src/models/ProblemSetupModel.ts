import { LanguageModel } from "./LanguageModel";

export interface ProblemSetupModel {
  id: number;
  language: LanguageModel;
  codeSetup: string;
  anonymousTest: string;
}
