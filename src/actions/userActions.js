import {data} from '../dummyData.json'

const MESSAGE_PENDING = 'MESSAGE_PENDING'
const MESSAGE_SUCCESS = 'MESSAGE_SUCCESS';
const MESSAGE_ERROR = 'MESSAGE_ERROR';

export function testData(data) {
    return { type:'MESSAGE_SUCCESS', data}
}
