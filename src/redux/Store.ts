import { applyMiddleware, createStore } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';

import logger from 'redux-logger';

// import epicsRoot from './Root.epic';
import reducersRoot from './Root.reducer';

// const epicMiddleware = createEpicMiddleware();
const configureStore = createStore(reducersRoot, applyMiddleware(/* epicMiddleware, */logger));
// epicMiddleware.run(epicsRoot);

/* const epicMiddleware = createEpicMiddleware();
const createStoreWithMiddleware = applyMiddleware(logger, epicMiddleware)(createStore);
epicMiddleware.run(epicsRoots); */


export default configureStore;