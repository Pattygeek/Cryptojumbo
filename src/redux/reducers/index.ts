import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { PersistPartial } from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer as auth, AuthStore } from './auth';
import {
  loadingIndicatorsReducer as loadingIndicators,
  LoadingIndicatorStore,
} from './loadingIndicators';
import { ajaxStatuses, AjaxStatusesStore } from './ajaxStatuses';
import { ProfileStore, profileReducer as profile } from './profile';
import { TransactionStore, transactionReducer as transaction } from './transactions';
import { WalletStore, walletReducer as wallet } from './wallet';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

declare type AppState = {
  auth: AuthStore & PersistPartial;
  loadingIndicators: LoadingIndicatorStore;
  ajaxStatuses: AjaxStatusesStore;
  profile: ProfileStore;
  transaction: TransactionStore;
  wallet: WalletStore;
};

const allReducers = combineReducers<AppState>({
  auth: persistReducer(authPersistConfig, auth),
  loadingIndicators,
  ajaxStatuses,
  profile,
  transaction,
  wallet,
});

export default allReducers;
