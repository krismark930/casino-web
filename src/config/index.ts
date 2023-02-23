const config = {
  api: {
    SIGN_IN: "http://127.0.0.1:8000/api/users/login",
    BANK_LIST: "http://127.0.0.1:8000/api/deposit/getBank",
    DEPOSIT : "http://127.0.0.1:8000/api/deposit/addMoney",
    TRANSFER : "http://127.0.0.1:8000/api/transfer/transferMoney",
    GET_SYSCONFIG: "http://127.0.0.1:8000/api/transfer/getSysConfig"
  },
};

export default config;
