import { Router } from 'express';
import NaverController from '../Controllers/NaveController';

const naversRouter = Router();

naversRouter.get('/', async (request, response) => {
  const findNavers = new NaverController();

  const navers = await findNavers.Index();

  return response.json(navers);
});

naversRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const findOneNaver = new NaverController();

  const project = await findOneNaver.Show(id);

  return response.json(project);
});

naversRouter.post('/', async (request, response) => {
  const { name, birthdate, admission_date, job_role, projects } = request.body;

  const createNave = new NaverController();

  const naver = await createNave.Store({
    name,
    birthdate,
    admission_date,
    job_role,
    projects,
  });

  return response.json(naver);
});

export default naversRouter;
