import axios from "axios";
import { call, takeEvery, put, all } from "redux-saga/effects";
import { loginFailure, loginSuccess } from "../actions";
import jwt from "jsonwebtoken";

function* loginRequested(action) {
  console.log(`Inside loginRequested ${JSON.stringify(action)}`);
  try {
    let response;
    try{
      response = yield call(callApiLogin, action.payload.credentials);
    }catch(error){
      alert(JSON.stringify(error.response.data.error));
    }
    const decodedPayload = jwt.verify(response.data.jwt, "xyz123@j"); 
    delete decodedPayload.iat;
    decodedPayload.token = response.data.jwt;
    yield put(loginSuccess(decodedPayload));
    action.payload.navigate("/");
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* callApiLogin(credentials) {
  console.log(`credentials: ${JSON.stringify(credentials)}`);

  return yield axios.post("/login", credentials, {
    "Content-Type": "application/json",
  });
}

function* rootSaga() {
  console.log(`inside rootSaga`);

  yield all([takeEvery("LOGIN_REQUESTED", loginRequested)]);
}

export default rootSaga;
