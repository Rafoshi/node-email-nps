import { EntityRepository, Repository } from "typeorm";
import { Surveys } from "../models/Survey";

@EntityRepository(Surveys)
class SurveysRespository extends Repository<Surveys> {}

export { SurveysRespository };
