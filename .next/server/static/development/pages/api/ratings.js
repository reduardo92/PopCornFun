module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/ratings.js":
/*!******************************!*\
  !*** ./pages/api/ratings.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server_middleware_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server/middleware/auth */ "./server/middleware/auth.js");
/* harmony import */ var _server_config_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../server/config/db */ "./server/config/db.js");
/* harmony import */ var _server_Validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../server/Validation */ "./server/Validation.js");
/* harmony import */ var _server_models_Ratings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../server/models/Ratings */ "./server/models/Ratings.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(_server_middleware_auth__WEBPACK_IMPORTED_MODULE_0__["default"])(async (req, res) => {
  await Object(_server_config_db__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    method,
    query
  } = req;
  const {
    media_id,
    rating
  } = req.body;
  const {
    error
  } = Object(_server_Validation__WEBPACK_IMPORTED_MODULE_2__["RatingValidation"])(req.body);

  switch (method) {
    // @route   GET api/ratings
    // @desc    Get all Ratings Media
    // @access  Private
    case 'GET':
      try {
        const ratings = await _server_models_Ratings__WEBPACK_IMPORTED_MODULE_3__["default"].find({
          user: req.user.id
        }).sort({
          date: -1
        });
        res.json(ratings);
      } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
      }

      break;

    case 'POST':
      // @route   POST api/ratings
      // @desc    add new ratings
      // @access  Private
      if (error) return res.status(400).json({
        msg: error.details[0].message
      });

      try {
        const newRating = new _server_models_Ratings__WEBPACK_IMPORTED_MODULE_3__["default"]({
          media_id,
          rating,
          user: req.user.id
        });
        const ratings = await newRating.save();
        res.json(ratings);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

      break;

    case 'PUT':
      // @route   PUT api/ratings/:id
      // @desc    Update ratings
      // @access  Private
      // Build ratings object
      if (error) return res.status(400).json({
        msg: error.details[0].message
      });
      const ratingsFields = {};
      if (media_id) ratingsFields.media_id = media_id;
      if (rating) ratingsFields.rating = rating;

      try {
        let ratings = await _server_models_Ratings__WEBPACK_IMPORTED_MODULE_3__["default"].findById(query.id);
        if (!ratings) return res.status(400).json({
          msg: 'Ratings not found'
        }); // Make sure user owns ratings

        if (ratings.user.toString() !== req.user.id) {
          return res.status(401).json({
            msg: 'Not authorized'
          });
        }

        ratings = await _server_models_Ratings__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndUpdate(query.id, {
          $set: ratingsFields
        }, {
          new: true
        });
        res.json({
          ratings,
          msg: 'Rating updated'
        });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

      break;

    case 'DELETE':
      // @route   DELETE api/ratings/:id
      // @desc    Delete ratings
      // @access  Private
      try {
        let ratings = await _server_models_Ratings__WEBPACK_IMPORTED_MODULE_3__["default"].findById(query.id);
        if (!ratings) return res.status(400).json({
          msg: 'Ratings not found'
        }); // Make sure user owns ratings

        if (ratings.user.toString() !== req.user.id) {
          return res.status(401).json({
            msg: 'Not authorized'
          });
        }

        await _server_models_Ratings__WEBPACK_IMPORTED_MODULE_3__["default"].findByIdAndRemove(query.id);
        res.json({
          msg: 'Ratings removed'
        });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }

      break;

    default:
      console.log('defa', method, query);
      return res.status(405).end(`Method ${method} Not Allowed`);
  }
}));

/***/ }),

/***/ "./server/Validation.js":
/*!******************************!*\
  !*** ./server/Validation.js ***!
  \******************************/
/*! exports provided: registerValidation, loginValidation, mediaValidation, RatingValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerValidation", function() { return registerValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginValidation", function() { return loginValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaValidation", function() { return mediaValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingValidation", function() { return RatingValidation; });
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hapi/joi */ "@hapi/joi");
/* harmony import */ var _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hapi_joi__WEBPACK_IMPORTED_MODULE_0__);

const registerValidation = data => {
  const schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({
    userName: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(3).required(),
    email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).required().email({
      minDomainSegments: 2,
      tlds: {
        allow: ['com', 'net']
      }
    }),
    password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).required()
  });
  return schema.validate(data);
};
const loginValidation = data => {
  const schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({
    email: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(3).required().email({
      minDomainSegments: 2,
      tlds: {
        allow: ['com', 'net']
      }
    }),
    password: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().min(6).required()
  });
  return schema.validate(data);
};
const mediaValidation = data => {
  const schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({
    media_id: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().required(),
    media: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object().required()
  });
  return schema.validate(data);
};
const RatingValidation = data => {
  const schema = _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.object({
    media_id: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.string().required(),
    rating: _hapi_joi__WEBPACK_IMPORTED_MODULE_0___default.a.number().max(10).required()
  });
  return schema.validate(data);
};

/***/ }),

/***/ "./server/config/db.js":
/*!*****************************!*\
  !*** ./server/config/db.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// const mongoose = require('mongoose');

/* harmony default export */ __webpack_exports__["default"] = (async () => {
  if (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connections[0].readyState) return; // Using new database connection

  try {
    await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
});

/***/ }),

/***/ "./server/middleware/auth.js":
/*!***********************************!*\
  !*** ./server/middleware/auth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cors */ "./server/middleware/cors.js");


 // Initializing the cors middleware

const cors = cors__WEBPACK_IMPORTED_MODULE_1___default()({
  methods: ['GET', 'HEAD']
});

const auth = fn => async (req, res) => {
  await Object(_cors__WEBPACK_IMPORTED_MODULE_2__["runMiddleware"])(req, res, cors);
  const {
    cookies,
    method,
    url
  } = req;

  if (method === 'POST' && url === '/api/auth') {
    return await fn(req, res);
  }

  try {
    Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["verify"])(cookies.auth, process.env.jwtSecret, async (err, decoded) => {
      if (!err && decoded) {
        req.user = decoded.user;
        return await fn(req, res);
      }

      return res.status(401).json({
        msg: 'No token, authorization denied'
      });
    });
  } catch (error) {
    res.status(401).json({
      msg: 'token is not valid'
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (auth); // const auth = (fn) => async(req, res) => {
//   // Get token from header
//   const token = req.headers['x-auth-token'];
//   // Check if not token
//   if (!token) {
//     return res.status(401).json({ msg: 'No token, authorization denied' });
//   }
//   try {
//     const decoded = jwt.verify(token, process.env.jwtSecret);
//     req.user = decoded.user;
//     return await fn(req, res);
//   } catch (err) {
//     res.status(401).json({ msg: 'token is not valid' });
//   }
// };
// export default auth;

/***/ }),

/***/ "./server/middleware/cors.js":
/*!***********************************!*\
  !*** ./server/middleware/cors.js ***!
  \***********************************/
/*! exports provided: runMiddleware */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runMiddleware", function() { return runMiddleware; });
// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, result => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

/***/ }),

/***/ "./server/models/Ratings.js":
/*!**********************************!*\
  !*** ./server/models/Ratings.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const RatingsSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  user: {
    type: mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types.ObjectId,
    ref: 'users'
  },
  media_id: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
const Ratings = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.Ratings || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Ratings', RatingsSchema);
/* harmony default export */ __webpack_exports__["default"] = (Ratings);

/***/ }),

/***/ 11:
/*!************************************!*\
  !*** multi ./pages/api/ratings.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eduardo Rivas\Desktop\react_Study\popcornFun\pages\api\ratings.js */"./pages/api/ratings.js");


/***/ }),

/***/ "@hapi/joi":
/*!****************************!*\
  !*** external "@hapi/joi" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@hapi/joi");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

/******/ });
//# sourceMappingURL=ratings.js.map