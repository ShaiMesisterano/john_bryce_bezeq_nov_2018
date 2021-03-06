var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var mysql = require('promise-mysql');
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var conn, queryMessages, messages, i, queryUsers, users, i, _i, users_1, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, mysql.createConnection({
                        host: 'localhost',
                        user: 'root',
                        password: '123456',
                        database: 'chatapp'
                    })];
                case 1:
                    conn = _a.sent();
                    queryMessages = "select * from messages";
                    return [4 /*yield*/, conn.query(queryMessages)];
                case 2:
                    messages = _a.sent();
                    for (i = 0; i < messages.length; i++) {
                        console.log(messages[i].message);
                    }
                    queryUsers = "select * from users";
                    return [4 /*yield*/, conn.query(queryUsers)];
                case 3:
                    users = _a.sent();
                    // for-loop
                    for (i = 0; i < users.length; i++) {
                        console.log(users[i].firstname + " " + users[i].lastname);
                    }
                    // for-of
                    for (_i = 0, users_1 = users; _i < users_1.length; _i++) {
                        user = users_1[_i];
                        console.log(user.firstname + " " + user.lastname);
                    }
                    // forEach
                    users.forEach(function (user) {
                        console.log(user.firstname + " " + user.lastname);
                    });
                    // map
                    users.map(function (user) {
                        console.log(user.firstname + " " + user.lastname);
                    });
                    // SQL Update
                    // const updateUser = "update users set firstname='moshe' where firstname='avi'";
                    // const result = await conn.query(updateUser);
                    // console.log(`RESULT: ${JSON.stringify(result)}`);
                    conn.end();
                    return [2 /*return*/];
            }
        });
    });
})();
