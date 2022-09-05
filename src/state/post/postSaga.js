import {put, call, takeEvery, all, delay} from 'redux-saga/effects'
import {fetchPostData} from "../../services/postApi";
import {getPostDataSuccess} from "./postSlice";


export function* postWatcher() {
    yield takeEvery('post/getPostData', getPostDataSaga)
}

function* getPostDataSaga(action) {
    const response = yield call(fetchPostData, action.payload);
    yield delay(2000)

    if(response) {
        yield put(getPostDataSuccess(response))
    }
}

export default function* postSaga() {
    yield all([
        postWatcher()
    ])
}