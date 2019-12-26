const CONFIGER = {
  "development": {
    "EM_LOCATION": "https://www.easy-mock.com/mock/5df8b43f78735c4dfa20271a/onlineMarket/v1"
    // "EM_LOCATION": "http://192.168.0.57:9999/casus/test"
  }
};

const CUR_CONFIGER = CONFIGER[process.env.NODE_ENV]

export default CUR_CONFIGER;