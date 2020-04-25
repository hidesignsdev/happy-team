import { call, put, takeLatest } from "redux-saga/effects";
import { UPDATE_PROFILE_REQUEST } from "./constants";
import moment from "moment";
import request from "../../common/api";
import { updateProfileFailure, updateProfileSuccess } from "./action";

function* callUpdateProfile(action) {
  try {
    let { gender, dateOfBirth, file } = action.payload;
    const formdata = new FormData();

    formdata.append("file", file);
    formdata.set("type", "AVATAR");

    dateOfBirth = moment(dateOfBirth).format("YYYY/MM/DD");

    let imageResults = yield call(
      request,
      "upload/uploadImage",
      formdata,
      "POST"
    );
 
    let dataUpdate = yield call(
      request,
      "functions/updateProfileTesting",
      { gender, dateOfBirth, avatarId: imageResults.objectId },
      "POST"
    );
  
    yield put(updateProfileSuccess(dataUpdate.result));
  } catch (error) {
    console.log("error", error);
    yield put(updateProfileFailure(error));
  }
}

export default function* updateProfileWatcher() {
  yield takeLatest(UPDATE_PROFILE_REQUEST, callUpdateProfile);
}
