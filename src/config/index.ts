
export const BASE_URL = configStatic.VITE_BASE_URL;
export const HOST_URL = configStatic.VITE_HOST_URL;
export const SOCKET_URL = configStatic.VITE_SOCKET_URL;
export const FILE_BASE_URL = configStatic.VITE_FILE_BASE_URL;
export const SERVICE_URL = configStatic.VITE_SERVICE_URL;
export const LY_PAY_URL = configStatic.VITE_LY_PAY_URL;


// export const BASE_URL = import.meta.env.VITE_BASE_URL;
// export const FILE_BASE_URL = import.meta.env.VITE_FILE_BASE_URL;
// export const HOST_URL = import.meta.env.VITE_HOST_URL;
// export const LY_PAY_URL = import.meta.env.VITE_LY_PAY_URL;

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
export const GET_BK_RESULT = "/user/result/get_result_bk";
export const SINGLE_BK_BETTING_INPLAY = "/user/betting/single-bk-play";
export const SINGLE_BK_BETTING_TODAY = "/user/betting/single-bk-today";
export const SINGLE_BK_BETTING_CHAMPION = "/user/betting/single-bk-champion";
export const SINGLE_BK_BETTING_PARLAY = "/user/betting/single-bk-parlay";
export const BK_BET_HISTORY = "/user/betting/bk-bet-history";
export const BK_BET_SLIP = "/user/betting/bk-bet-slip";
export const ADD_TEMP = "/sport/add_temp";
export const GET_PROFILE = "/users/view-profile";
export const NOT_BET_SCORE = "/user/betting/not-bet-score";

// hong kong six mark
export const KATAN_SAVE = "/user/ka-tan/save";
export const KATAN_PARLAY_SAVE = "/user/ka-tan/parlay/save";
export const KATAN_EVEN_SAVE = "/user/ka-tan/even-code/save";
export const KATAN_ZODAIC_EVEN_SAVE = "/user/ka-tan/zodaic-even/save";
export const KATAN_MANTISSA_EVEN_SAVE = "/user/ka-tan/mantissa-even/save";
export const KATAN_MISS_ALL_SAVE = "/user/ka-tan/miss-all/save";
export const KATAN_COMPATIBLE_SAVE = "/user/ka-tan/compatible/save";
export const MAIN_BET_RESULT = "/user/ka-tan/bet-result/main";
export const SUB_BET_RESULT = "/user/ka-tan/bet-result/sub";

export const GET_KABL = "/user/ka-bl/get";
export const GAME_STATUS = "/user/ka-kithe/game-status";
export const GAME_VERSION = "/user/ka-kithe/game-version";
export const GAME_RESULT = "/user/ka-kithe/game-result";
export const BIRTH_HISTORY = "/user/ka-kithe/birth-history";

// macao six mark
export const MACAO_KATAN_SAVE = "/user/macao-ka-tan/save";
export const MACAO_KATAN_PARLAY_SAVE = "/user/macao-ka-tan/parlay/save";
export const MACAO_KATAN_EVEN_SAVE = "/user/macao-ka-tan/even-code/save";
export const MACAO_KATAN_ZODAIC_EVEN_SAVE = "/user/macao-ka-tan/zodaic-even/save";
export const MACAO_KATAN_MANTISSA_EVEN_SAVE = "/user/macao-ka-tan/mantissa-even/save";
export const MACAO_KATAN_MISS_ALL_SAVE = "/user/macao-ka-tan/miss-all/save";
export const MACAO_KATAN_COMPATIBLE_SAVE = "/user/macao-ka-tan/compatible/save";
export const MACAO_MAIN_BET_RESULT = "/user/macao-ka-tan/bet-result/main";
export const MACAO_SUB_BET_RESULT = "/user/macao-ka-tan/bet-result/sub";

export const GET_MACAO_KABL = "/user/macao-ka-bl/get";
export const MACAO_GAME_STATUS = "/user/macao-ka-kithe/game-status";
export const MACAO_GAME_VERSION = "/user/macao-ka-kithe/game-version";
export const MACAO_GAME_RESULT = "/user/macao-ka-kithe/game-result";
export const MACAO_BIRTH_HISTORY = "/user/macao-ka-kithe/birth-history";

// always color

export const GET_B5_SCHEDULE = "/user/lottery-schedule/b5";
export const GET_B3_SCHEDULE = "/user/lottery-schedule/b3";
export const GET_GD11_SCHEDULE = "/user/lottery-schedule/gd11";
export const GET_AZXY10_SCHEDULE = "/user/lottery-schedule/azxy10";
export const GET_CQSF_SCHEDULE = "/user/lottery-schedule/cqsf";
export const GET_GDSF_SCHEDULE = "/user/lottery-schedule/gdsf";
export const GET_GXSF_SCHEDULE = "/user/lottery-schedule/gxsf";
export const GET_TJSF_SCHEDULE = "/user/lottery-schedule/tjsf";
export const GET_BJPK_SCHEDULE = "/user/lottery-schedule/bjpk";
export const GET_XYFT_SCHEDULE = "/user/lottery-schedule/xyft";
export const GET_LOTTERY_STATUS = "/user/lottery-schedule/status";

export const GET_B5_RESULT = "/user/lottery-result/b5";
export const GET_B3_RESULT = "/user/lottery-result/b3";
export const GET_OTHER_RESULT = "/user/lottery-result/other";

export const B5_BIRTH_HISTORY = "/user/lottery-result/b5-birth-history";
export const B3_BIRTH_HISTORY = "/user/lottery-result/b3-birth-history";
export const OTHER_BIRTH_HISTORY = "/user/lottery-result/other-birth-history";

export const GET_B5_ODDS = "/user/lottery-odds/b5";
export const GET_B3_ODDS = "/user/lottery-odds/b3";
export const GET_OTHER_ODDS = "/user/lottery-odds/other";

export const SAVE_B5 = "/user/lottery-save/b5";
export const SAVE_B3 = "/user/lottery-save/b3";
export const SAVE_OTHER = "/user/lottery-save/other";

export const TOTAL_BET_RESULT = "/user/lottery-result/total-bet";
export const ALWAYS_COLOR_SUB_BET_RESULT = "/user/lottery-result/sub-bet";

export const GET_CHESS_ALL = "/user/other-game/chess-all";
export const GET_AG_ALL = "/user/other-game/ag-all";
export const GET_BBIN_ALL = "/user/other-game/bbin-all";
export const GET_MG_ALL = "/user/other-game/mg-all";
export const GET_PT_ALL = "/user/other-game/pt-all";
export const GET_KY_URL = "/user/other-game/ky-url";
export const GET_OG_URL = "/user/other-game/og-url";
export const GET_AG_URL = "/user/other-game/ag-url";
export const GET_BBIN_URL = "/user/other-game/bbin-url";
export const GET_MG_URL = "/user/other-game/mg-url";
export const GET_PT_URL = "/user/other-game/pt-url";

export const GET_CRYPTO = "/deposit/get-crypto";

export const SYSTEM_SMS_ALL = "/user/message/system-sms-all";
export const GET_SYSTEM_SMS = "/user/message/get-system-sms";
export const DELETE_SYSTEM_SMS = "/user/message/delete-system-sms";

export const LOTTERY_USER_CONFIG = "/user/lottery-config/item";
export const LOTTERY_USER_CONFING_ADD = "/user/lottery-config/add";

export const GET_PAYMENT_METHOD = "/user/payment-method";

export const LY_PAY = "/user/third-party-payment/ly-pay";

export const POST_ALL = "/user/post/all";
export const ADD_POST = "/user/post/add";
export const GET_POST = "/user/post/item";

export const WEB_SYSTEM_DATA = "/user/web-system-data/item";

export const GET_DISCOUNT = "/user/discount/all";

export const PASSWORD_CHANGE = "/users/password-change";

const config = {
  api: {
    SIGN_IN: BASE_URL + "/users/login",
    SIGN_UP: BASE_URL + "/users/register",
    BANK_LIST: BASE_URL + "/deposit/getBank",
    ADMIN_BANK_LIST: BASE_URL + "/deposit/get-admin-bank",
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
    GET_CONFIG: BASE_URL + "/user/home/config",
    BET_FT: BASE_URL + "/sport/bet_ft",
    MULTI_BET_FT: BASE_URL + "/sport/multi_bet_ft",
    GET_BETTING_RECORDS: BASE_URL + "/sport/get_betting_records",
    GET_TEMPS: BASE_URL + "/sport/get_temps",
    DELETE_TEMPS: BASE_URL + "/sport/delete_temps",
  },
};

export default config;
