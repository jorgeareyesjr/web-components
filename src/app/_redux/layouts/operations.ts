import {
	getAllLayoutsRequest,
	setActiveLayoutRequest,
} from './actions';

// TODO: Add types.ts

const getAllLayouts = () => getAllLayoutsRequest();
const setActiveLayout = (layout: any) => setActiveLayoutRequest(layout);

export {
	getAllLayouts,
	setActiveLayout,
};
