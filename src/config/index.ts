const SERVER_API = "http://localhost:8000"

const config = {
  api: {
    SIGN_IN: SERVER_API + "/api/users/login",
    SIGN_UP: SERVER_API + "/api/users/register",
    BANK_LIST: SERVER_API + "/api/deposit/getBank",
    DEPOSIT : SERVER_API + "/api/deposit/addMoney",
    QUICK_WITHDRAW: SERVER_API + "/api/withdraw/quick-withdraw",
    GET_TRANSACTION_HISTORY: SERVER_API + "/api/withdraw/get-transaction-history",
    TRANSFER : SERVER_API + "/api/transfer/transferMoney",
    ADD_CRYPTO_ACCOUNT : SERVER_API + "/api/account/add-crypto-account",
    Edit_CRYPTO_ACCOUNT : SERVER_API + "/api/account/edit-crypto-account",
    GET_BANK_LIST_BY_USER_ID: SERVER_API + "/api/account/get-bank-list",
    GET_SYSCONFIG: SERVER_API + "/api/transfer/getSysConfig",
    GET_SPORTS_DATA: SERVER_API + "/api/get_item_date"
  },
};

export default config;
