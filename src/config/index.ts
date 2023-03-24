export const BASE_URL = "http://localhost:8000/api";
export const HOST_URL = "http://127.0.0.1:5173"
export const SOCKET_URL = "http://localhost:3000";
// export const SOCKET_URL = "http://27.126.187.127";
export const MATCH_SPORT = "/user/match-sport";
export const GET_FT_DATA = "/ft-data";
export const GET_SPORTS_COUNT_DATA = "/user/match-sport/get-count";
export const GET_IN_PLAY_DATA = "/third-party/match-sport/ft-in-play-data";
export const GET_SCORE_IN_PLAY_DATA = "/third-party/match-sport/ft-correct-score-inplay-data"
export const SINGLE_FT_BETTING_INPLAY = "/user/betting/single-ft-play";
export const SINGLE_FT_BETTING_TODAY = "/user/betting/single-ft-today";
export const SINGLE_FT_BETTING_CHAMPION = "/user/betting/single-ft-champion";
export const SINGLE_FT_BETTING_PARLAY = "/user/betting/single-ft-parlay";
export const MULTI_BETTING_PARLAY = "/user/betting/multi-parlay";
export const FT_BET_HISTORY = "/user/betting/ft-bet-history";
export const FT_BET_SLIP = "/user/betting/ft-bet-slip";
export const GET_FT_RESULT = "/user/result/get_result_ft";
export const SINGLE_BK_BETTING_INPLAY = "/user/betting/single-bk-play";
export const SINGLE_BK_BETTING_TODAY = "/user/betting/single-bk-today";
export const SINGLE_BK_BETTING_CHAMPION = "/user/betting/single-bk-champion";
export const SINGLE_BK_BETTING_PARLAY = "/user/betting/single-bk-parlay";
export const BK_BET_HISTORY = "/user/betting/bk-bet-history";
export const BK_BET_SLIP = "/user/betting/bk-bet-slip";
export const ADD_TEMP = "/sport/add_temp";

const config = {
  api: {
    SIGN_IN: BASE_URL + "/users/login",
    SIGN_UP: BASE_URL + "/users/register",
    BANK_LIST: BASE_URL + "/deposit/getBank",
    DEPOSIT: BASE_URL + "/deposit/addMoney",
    QUICK_WITHDRAW: BASE_URL + "/withdraw/quick-withdraw",
    GET_TRANSACTION_HISTORY: BASE_URL + "/withdraw/get-transaction-history",
    TRANSFER: BASE_URL + "/transfer/transferMoney",
    ADD_CRYPTO_ACCOUNT: BASE_URL + "/account/add-crypto-account",
    ADD_BANK_ACCOUNT: BASE_URL + "/account/add-bank-account",
    Edit_CRYPTO_ACCOUNT: BASE_URL + "/account/edit-crypto-account",
    Edit_BANK_ACCOUNT: BASE_URL + "/account/edit-bank-account",
    DELETE_BANK_ACCOUNT: BASE_URL + "/account/delete-bank-account",
    DELETE_CRYPTO_ACCOUNT: BASE_URL + "/account/delete-crypto-account",
    GET_CRYPTO_ACCOUNT_LIST_BY_USER_ID: BASE_URL + "/account/get-crypto-list",
    GET_BANK_ACCOUNT_LIST_BY_USER_ID: BASE_URL + "/account/get-bank-list",
    GET_SYSCONFIG: BASE_URL + "/transfer/getSysConfig",
    BET_FT: BASE_URL + "/sport/bet_ft",
    MULTI_BET_FT: BASE_URL + "/sport/multi_bet_ft",
    GET_BETTING_RECORDS: BASE_URL + "/sport/get_betting_records",
    GET_TEMPS: BASE_URL + "/sport/get_temps",
    DELETE_TEMPS: BASE_URL + "/sport/delete_temps",
  },
};

export default config;
