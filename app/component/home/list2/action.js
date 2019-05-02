import { makeActionCreator } from 'appPath/lib/public';
import * as types from './type';


export const increaseAction = makeActionCreator(types.increase, 'data');
export const changeData = makeActionCreator(types.changeData, 'data');
