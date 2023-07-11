import express from 'express';
import { saveSentEmails } from '../controller/email-controller.js';
import { getEmails,saveDraftemails,moveEmailsBin,toggleStarredEmails,deleteEmails } from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save',saveSentEmails);
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveDraftemails);
routes.post('/bin',moveEmailsBin);
routes.post('/starred',toggleStarredEmails);
routes.delete('/delete',deleteEmails);
// routes.post('/save-draft',saveDraftemails);

export default routes;