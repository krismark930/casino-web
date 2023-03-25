const config = {
  api: {
    SIGN_IN: "http://localhost:8088/api/users/login",
    SIGN_UP: "http://localhost:8088/api/users/register",
    BANK_LIST: "http://127.0.0.1:8088/api/deposit/getBank",
    DEPOSIT : "http://127.0.0.1:8088/api/deposit/addMoney",
    TRANSFER : "http://127.0.0.1:8088/api/transfer/transferMoney",
    GET_SYSCONFIG: "http://127.0.0.1:8088/api/transfer/getSysConfig",
    GET_SPORTS_DATA: "http://127.0.0.1:8088/api/get_item_date"
  },
};

export default config;
