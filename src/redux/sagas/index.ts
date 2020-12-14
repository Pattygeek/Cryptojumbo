import { spawn } from "redux-saga/effects";
import authSagas from "./auth";
import profileSagas from "./profile";
import transactionSagas from "./transaction";
import walletSagas from "./wallet";

export default function* rootSaga(): IterableIterator<any> {
  yield spawn(authSagas);
  yield spawn(profileSagas);
  yield spawn(transactionSagas);
  yield spawn(walletSagas);
}
