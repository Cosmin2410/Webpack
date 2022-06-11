(() => {
  var e = {
      669: (e, t, r) => {
        e.exports = r(609);
      },
      448: (e, t, r) => {
        'use strict';
        var n = r(867),
          o = r(26),
          i = r(372),
          s = r(327),
          a = r(97),
          c = r(109),
          u = r(985),
          f = r(874),
          p = r(648),
          l = r(644),
          d = r(205);
        e.exports = function (e) {
          return new Promise(function (t, r) {
            var h,
              A = e.data,
              m = e.headers,
              g = e.responseType;
            function v() {
              e.cancelToken && e.cancelToken.unsubscribe(h),
                e.signal && e.signal.removeEventListener('abort', h);
            }
            n.isFormData(A) &&
              n.isStandardBrowserEnv() &&
              delete m['Content-Type'];
            var y = new XMLHttpRequest();
            if (e.auth) {
              var b = e.auth.username || '',
                x = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : '';
              m.Authorization = 'Basic ' + btoa(b + ':' + x);
            }
            var E = a(e.baseURL, e.url);
            function C() {
              if (y) {
                var n =
                    'getAllResponseHeaders' in y
                      ? c(y.getAllResponseHeaders())
                      : null,
                  i = {
                    data:
                      g && 'text' !== g && 'json' !== g
                        ? y.response
                        : y.responseText,
                    status: y.status,
                    statusText: y.statusText,
                    headers: n,
                    config: e,
                    request: y,
                  };
                o(
                  function (e) {
                    t(e), v();
                  },
                  function (e) {
                    r(e), v();
                  },
                  i
                ),
                  (y = null);
              }
            }
            if (
              (y.open(
                e.method.toUpperCase(),
                s(E, e.params, e.paramsSerializer),
                !0
              ),
              (y.timeout = e.timeout),
              'onloadend' in y
                ? (y.onloadend = C)
                : (y.onreadystatechange = function () {
                    y &&
                      4 === y.readyState &&
                      (0 !== y.status ||
                        (y.responseURL &&
                          0 === y.responseURL.indexOf('file:'))) &&
                      setTimeout(C);
                  }),
              (y.onabort = function () {
                y &&
                  (r(new p('Request aborted', p.ECONNABORTED, e, y)),
                  (y = null));
              }),
              (y.onerror = function () {
                r(new p('Network Error', p.ERR_NETWORK, e, y, y)), (y = null);
              }),
              (y.ontimeout = function () {
                var t = e.timeout
                    ? 'timeout of ' + e.timeout + 'ms exceeded'
                    : 'timeout exceeded',
                  n = e.transitional || f;
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  r(
                    new p(
                      t,
                      n.clarifyTimeoutError ? p.ETIMEDOUT : p.ECONNABORTED,
                      e,
                      y
                    )
                  ),
                  (y = null);
              }),
              n.isStandardBrowserEnv())
            ) {
              var w =
                (e.withCredentials || u(E)) && e.xsrfCookieName
                  ? i.read(e.xsrfCookieName)
                  : void 0;
              w && (m[e.xsrfHeaderName] = w);
            }
            'setRequestHeader' in y &&
              n.forEach(m, function (e, t) {
                void 0 === A && 'content-type' === t.toLowerCase()
                  ? delete m[t]
                  : y.setRequestHeader(t, e);
              }),
              n.isUndefined(e.withCredentials) ||
                (y.withCredentials = !!e.withCredentials),
              g && 'json' !== g && (y.responseType = e.responseType),
              'function' == typeof e.onDownloadProgress &&
                y.addEventListener('progress', e.onDownloadProgress),
              'function' == typeof e.onUploadProgress &&
                y.upload &&
                y.upload.addEventListener('progress', e.onUploadProgress),
              (e.cancelToken || e.signal) &&
                ((h = function (e) {
                  y &&
                    (r(!e || (e && e.type) ? new l() : e),
                    y.abort(),
                    (y = null));
                }),
                e.cancelToken && e.cancelToken.subscribe(h),
                e.signal &&
                  (e.signal.aborted
                    ? h()
                    : e.signal.addEventListener('abort', h))),
              A || (A = null);
            var R = d(E);
            R && -1 === ['http', 'https', 'file'].indexOf(R)
              ? r(
                  new p('Unsupported protocol ' + R + ':', p.ERR_BAD_REQUEST, e)
                )
              : y.send(A);
          });
        };
      },
      609: (e, t, r) => {
        'use strict';
        var n = r(867),
          o = r(849),
          i = r(321),
          s = r(185),
          a = (function e(t) {
            var r = new i(t),
              a = o(i.prototype.request, r);
            return (
              n.extend(a, i.prototype, r),
              n.extend(a, r),
              (a.create = function (r) {
                return e(s(t, r));
              }),
              a
            );
          })(r(546));
        (a.Axios = i),
          (a.CanceledError = r(644)),
          (a.CancelToken = r(972)),
          (a.isCancel = r(502)),
          (a.VERSION = r(288).version),
          (a.toFormData = r(675)),
          (a.AxiosError = r(648)),
          (a.Cancel = a.CanceledError),
          (a.all = function (e) {
            return Promise.all(e);
          }),
          (a.spread = r(713)),
          (a.isAxiosError = r(268)),
          (e.exports = a),
          (e.exports.default = a);
      },
      972: (e, t, r) => {
        'use strict';
        var n = r(644);
        function o(e) {
          if ('function' != typeof e)
            throw new TypeError('executor must be a function.');
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var r = this;
          this.promise.then(function (e) {
            if (r._listeners) {
              var t,
                n = r._listeners.length;
              for (t = 0; t < n; t++) r._listeners[t](e);
              r._listeners = null;
            }
          }),
            (this.promise.then = function (e) {
              var t,
                n = new Promise(function (e) {
                  r.subscribe(e), (t = e);
                }).then(e);
              return (
                (n.cancel = function () {
                  r.unsubscribe(t);
                }),
                n
              );
            }),
            e(function (e) {
              r.reason || ((r.reason = new n(e)), t(r.reason));
            });
        }
        (o.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (o.prototype.subscribe = function (e) {
            this.reason
              ? e(this.reason)
              : this._listeners
              ? this._listeners.push(e)
              : (this._listeners = [e]);
          }),
          (o.prototype.unsubscribe = function (e) {
            if (this._listeners) {
              var t = this._listeners.indexOf(e);
              -1 !== t && this._listeners.splice(t, 1);
            }
          }),
          (o.source = function () {
            var e;
            return {
              token: new o(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = o);
      },
      644: (e, t, r) => {
        'use strict';
        var n = r(648);
        function o(e) {
          n.call(this, null == e ? 'canceled' : e, n.ERR_CANCELED),
            (this.name = 'CanceledError');
        }
        r(867).inherits(o, n, { __CANCEL__: !0 }), (e.exports = o);
      },
      502: (e) => {
        'use strict';
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      321: (e, t, r) => {
        'use strict';
        var n = r(867),
          o = r(327),
          i = r(782),
          s = r(572),
          a = r(185),
          c = r(97),
          u = r(875),
          f = u.validators;
        function p(e) {
          (this.defaults = e),
            (this.interceptors = { request: new i(), response: new i() });
        }
        (p.prototype.request = function (e, t) {
          'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
            (t = a(this.defaults, t)).method
              ? (t.method = t.method.toLowerCase())
              : this.defaults.method
              ? (t.method = this.defaults.method.toLowerCase())
              : (t.method = 'get');
          var r = t.transitional;
          void 0 !== r &&
            u.assertOptions(
              r,
              {
                silentJSONParsing: f.transitional(f.boolean),
                forcedJSONParsing: f.transitional(f.boolean),
                clarifyTimeoutError: f.transitional(f.boolean),
              },
              !1
            );
          var n = [],
            o = !0;
          this.interceptors.request.forEach(function (e) {
            ('function' == typeof e.runWhen && !1 === e.runWhen(t)) ||
              ((o = o && e.synchronous), n.unshift(e.fulfilled, e.rejected));
          });
          var i,
            c = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              c.push(e.fulfilled, e.rejected);
            }),
            !o)
          ) {
            var p = [s, void 0];
            for (
              Array.prototype.unshift.apply(p, n),
                p = p.concat(c),
                i = Promise.resolve(t);
              p.length;

            )
              i = i.then(p.shift(), p.shift());
            return i;
          }
          for (var l = t; n.length; ) {
            var d = n.shift(),
              h = n.shift();
            try {
              l = d(l);
            } catch (e) {
              h(e);
              break;
            }
          }
          try {
            i = s(l);
          } catch (e) {
            return Promise.reject(e);
          }
          for (; c.length; ) i = i.then(c.shift(), c.shift());
          return i;
        }),
          (p.prototype.getUri = function (e) {
            e = a(this.defaults, e);
            var t = c(e.baseURL, e.url);
            return o(t, e.params, e.paramsSerializer);
          }),
          n.forEach(['delete', 'get', 'head', 'options'], function (e) {
            p.prototype[e] = function (t, r) {
              return this.request(
                a(r || {}, { method: e, url: t, data: (r || {}).data })
              );
            };
          }),
          n.forEach(['post', 'put', 'patch'], function (e) {
            function t(t) {
              return function (r, n, o) {
                return this.request(
                  a(o || {}, {
                    method: e,
                    headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: r,
                    data: n,
                  })
                );
              };
            }
            (p.prototype[e] = t()), (p.prototype[e + 'Form'] = t(!0));
          }),
          (e.exports = p);
      },
      648: (e, t, r) => {
        'use strict';
        var n = r(867);
        function o(e, t, r, n, o) {
          Error.call(this),
            (this.message = e),
            (this.name = 'AxiosError'),
            t && (this.code = t),
            r && (this.config = r),
            n && (this.request = n),
            o && (this.response = o);
        }
        n.inherits(o, Error, {
          toJSON: function () {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status:
                this.response && this.response.status
                  ? this.response.status
                  : null,
            };
          },
        });
        var i = o.prototype,
          s = {};
        [
          'ERR_BAD_OPTION_VALUE',
          'ERR_BAD_OPTION',
          'ECONNABORTED',
          'ETIMEDOUT',
          'ERR_NETWORK',
          'ERR_FR_TOO_MANY_REDIRECTS',
          'ERR_DEPRECATED',
          'ERR_BAD_RESPONSE',
          'ERR_BAD_REQUEST',
          'ERR_CANCELED',
        ].forEach(function (e) {
          s[e] = { value: e };
        }),
          Object.defineProperties(o, s),
          Object.defineProperty(i, 'isAxiosError', { value: !0 }),
          (o.from = function (e, t, r, s, a, c) {
            var u = Object.create(i);
            return (
              n.toFlatObject(e, u, function (e) {
                return e !== Error.prototype;
              }),
              o.call(u, e.message, t, r, s, a),
              (u.name = e.name),
              c && Object.assign(u, c),
              u
            );
          }),
          (e.exports = o);
      },
      782: (e, t, r) => {
        'use strict';
        var n = r(867);
        function o() {
          this.handlers = [];
        }
        (o.prototype.use = function (e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (o.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (o.prototype.forEach = function (e) {
            n.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = o);
      },
      97: (e, t, r) => {
        'use strict';
        var n = r(793),
          o = r(303);
        e.exports = function (e, t) {
          return e && !n(t) ? o(e, t) : t;
        };
      },
      572: (e, t, r) => {
        'use strict';
        var n = r(867),
          o = r(527),
          i = r(502),
          s = r(546),
          a = r(644);
        function c(e) {
          if (
            (e.cancelToken && e.cancelToken.throwIfRequested(),
            e.signal && e.signal.aborted)
          )
            throw new a();
        }
        e.exports = function (e) {
          return (
            c(e),
            (e.headers = e.headers || {}),
            (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = n.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            n.forEach(
              ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || s.adapter)(e).then(
              function (t) {
                return (
                  c(e),
                  (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  i(t) ||
                    (c(e),
                    t &&
                      t.response &&
                      (t.response.data = o.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      185: (e, t, r) => {
        'use strict';
        var n = r(867);
        e.exports = function (e, t) {
          t = t || {};
          var r = {};
          function o(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t)
              ? n.merge(e, t)
              : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
              ? t.slice()
              : t;
          }
          function i(r) {
            return n.isUndefined(t[r])
              ? n.isUndefined(e[r])
                ? void 0
                : o(void 0, e[r])
              : o(e[r], t[r]);
          }
          function s(e) {
            if (!n.isUndefined(t[e])) return o(void 0, t[e]);
          }
          function a(r) {
            return n.isUndefined(t[r])
              ? n.isUndefined(e[r])
                ? void 0
                : o(void 0, e[r])
              : o(void 0, t[r]);
          }
          function c(r) {
            return r in t ? o(e[r], t[r]) : r in e ? o(void 0, e[r]) : void 0;
          }
          var u = {
            url: s,
            method: s,
            data: s,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: c,
          };
          return (
            n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
              var t = u[e] || i,
                o = t(e);
              (n.isUndefined(o) && t !== c) || (r[e] = o);
            }),
            r
          );
        };
      },
      26: (e, t, r) => {
        'use strict';
        var n = r(648);
        e.exports = function (e, t, r) {
          var o = r.config.validateStatus;
          r.status && o && !o(r.status)
            ? t(
                new n(
                  'Request failed with status code ' + r.status,
                  [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                    Math.floor(r.status / 100) - 4
                  ],
                  r.config,
                  r.request,
                  r
                )
              )
            : e(r);
        };
      },
      527: (e, t, r) => {
        'use strict';
        var n = r(867),
          o = r(546);
        e.exports = function (e, t, r) {
          var i = this || o;
          return (
            n.forEach(r, function (r) {
              e = r.call(i, e, t);
            }),
            e
          );
        };
      },
      546: (e, t, r) => {
        'use strict';
        var n = r(867),
          o = r(16),
          i = r(648),
          s = r(874),
          a = r(675),
          c = { 'Content-Type': 'application/x-www-form-urlencoded' };
        function u(e, t) {
          !n.isUndefined(e) &&
            n.isUndefined(e['Content-Type']) &&
            (e['Content-Type'] = t);
        }
        var f,
          p = {
            transitional: s,
            adapter:
              (('undefined' != typeof XMLHttpRequest ||
                ('undefined' != typeof process &&
                  '[object process]' ===
                    Object.prototype.toString.call(process))) &&
                (f = r(448)),
              f),
            transformRequest: [
              function (e, t) {
                if (
                  (o(t, 'Accept'),
                  o(t, 'Content-Type'),
                  n.isFormData(e) ||
                    n.isArrayBuffer(e) ||
                    n.isBuffer(e) ||
                    n.isStream(e) ||
                    n.isFile(e) ||
                    n.isBlob(e))
                )
                  return e;
                if (n.isArrayBufferView(e)) return e.buffer;
                if (n.isURLSearchParams(e))
                  return (
                    u(t, 'application/x-www-form-urlencoded;charset=utf-8'),
                    e.toString()
                  );
                var r,
                  i = n.isObject(e),
                  s = t && t['Content-Type'];
                if (
                  (r = n.isFileList(e)) ||
                  (i && 'multipart/form-data' === s)
                ) {
                  var c = this.env && this.env.FormData;
                  return a(r ? { 'files[]': e } : e, c && new c());
                }
                return i || 'application/json' === s
                  ? (u(t, 'application/json'),
                    (function (e, t, r) {
                      if (n.isString(e))
                        try {
                          return (0, JSON.parse)(e), n.trim(e);
                        } catch (e) {
                          if ('SyntaxError' !== e.name) throw e;
                        }
                      return (0, JSON.stringify)(e);
                    })(e))
                  : e;
              },
            ],
            transformResponse: [
              function (e) {
                var t = this.transitional || p.transitional,
                  r = t && t.silentJSONParsing,
                  o = t && t.forcedJSONParsing,
                  s = !r && 'json' === this.responseType;
                if (s || (o && n.isString(e) && e.length))
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (s) {
                      if ('SyntaxError' === e.name)
                        throw i.from(
                          e,
                          i.ERR_BAD_RESPONSE,
                          this,
                          null,
                          this.response
                        );
                      throw e;
                    }
                  }
                return e;
              },
            ],
            timeout: 0,
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
            maxContentLength: -1,
            maxBodyLength: -1,
            env: { FormData: r(623) },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: {
              common: { Accept: 'application/json, text/plain, */*' },
            },
          };
        n.forEach(['delete', 'get', 'head'], function (e) {
          p.headers[e] = {};
        }),
          n.forEach(['post', 'put', 'patch'], function (e) {
            p.headers[e] = n.merge(c);
          }),
          (e.exports = p);
      },
      874: (e) => {
        'use strict';
        e.exports = {
          silentJSONParsing: !0,
          forcedJSONParsing: !0,
          clarifyTimeoutError: !1,
        };
      },
      288: (e) => {
        e.exports = { version: '0.27.2' };
      },
      849: (e) => {
        'use strict';
        e.exports = function (e, t) {
          return function () {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
              r[n] = arguments[n];
            return e.apply(t, r);
          };
        };
      },
      327: (e, t, r) => {
        'use strict';
        var n = r(867);
        function o(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',')
            .replace(/%20/g, '+')
            .replace(/%5B/gi, '[')
            .replace(/%5D/gi, ']');
        }
        e.exports = function (e, t, r) {
          if (!t) return e;
          var i;
          if (r) i = r(t);
          else if (n.isURLSearchParams(t)) i = t.toString();
          else {
            var s = [];
            n.forEach(t, function (e, t) {
              null != e &&
                (n.isArray(e) ? (t += '[]') : (e = [e]),
                n.forEach(e, function (e) {
                  n.isDate(e)
                    ? (e = e.toISOString())
                    : n.isObject(e) && (e = JSON.stringify(e)),
                    s.push(o(t) + '=' + o(e));
                }));
            }),
              (i = s.join('&'));
          }
          if (i) {
            var a = e.indexOf('#');
            -1 !== a && (e = e.slice(0, a)),
              (e += (-1 === e.indexOf('?') ? '?' : '&') + i);
          }
          return e;
        };
      },
      303: (e) => {
        'use strict';
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
        };
      },
      372: (e, t, r) => {
        'use strict';
        var n = r(867);
        e.exports = n.isStandardBrowserEnv()
          ? {
              write: function (e, t, r, o, i, s) {
                var a = [];
                a.push(e + '=' + encodeURIComponent(t)),
                  n.isNumber(r) &&
                    a.push('expires=' + new Date(r).toGMTString()),
                  n.isString(o) && a.push('path=' + o),
                  n.isString(i) && a.push('domain=' + i),
                  !0 === s && a.push('secure'),
                  (document.cookie = a.join('; '));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, '', Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      793: (e) => {
        'use strict';
        e.exports = function (e) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
        };
      },
      268: (e, t, r) => {
        'use strict';
        var n = r(867);
        e.exports = function (e) {
          return n.isObject(e) && !0 === e.isAxiosError;
        };
      },
      985: (e, t, r) => {
        'use strict';
        var n = r(867);
        e.exports = n.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement('a');
              function o(e) {
                var n = e;
                return (
                  t && (r.setAttribute('href', n), (n = r.href)),
                  r.setAttribute('href', n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, '') : '',
                    hash: r.hash ? r.hash.replace(/^#/, '') : '',
                    hostname: r.hostname,
                    port: r.port,
                    pathname:
                      '/' === r.pathname.charAt(0)
                        ? r.pathname
                        : '/' + r.pathname,
                  }
                );
              }
              return (
                (e = o(window.location.href)),
                function (t) {
                  var r = n.isString(t) ? o(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      16: (e, t, r) => {
        'use strict';
        var n = r(867);
        e.exports = function (e, t) {
          n.forEach(e, function (r, n) {
            n !== t &&
              n.toUpperCase() === t.toUpperCase() &&
              ((e[t] = r), delete e[n]);
          });
        };
      },
      623: (e) => {
        e.exports = null;
      },
      109: (e, t, r) => {
        'use strict';
        var n = r(867),
          o = [
            'age',
            'authorization',
            'content-length',
            'content-type',
            'etag',
            'expires',
            'from',
            'host',
            'if-modified-since',
            'if-unmodified-since',
            'last-modified',
            'location',
            'max-forwards',
            'proxy-authorization',
            'referer',
            'retry-after',
            'user-agent',
          ];
        e.exports = function (e) {
          var t,
            r,
            i,
            s = {};
          return e
            ? (n.forEach(e.split('\n'), function (e) {
                if (
                  ((i = e.indexOf(':')),
                  (t = n.trim(e.substr(0, i)).toLowerCase()),
                  (r = n.trim(e.substr(i + 1))),
                  t)
                ) {
                  if (s[t] && o.indexOf(t) >= 0) return;
                  s[t] =
                    'set-cookie' === t
                      ? (s[t] ? s[t] : []).concat([r])
                      : s[t]
                      ? s[t] + ', ' + r
                      : r;
                }
              }),
              s)
            : s;
        };
      },
      205: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
          return (t && t[1]) || '';
        };
      },
      713: (e) => {
        'use strict';
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      675: (e, t, r) => {
        'use strict';
        var n = r(867);
        e.exports = function (e, t) {
          t = t || new FormData();
          var r = [];
          function o(e) {
            return null === e
              ? ''
              : n.isDate(e)
              ? e.toISOString()
              : n.isArrayBuffer(e) || n.isTypedArray(e)
              ? 'function' == typeof Blob
                ? new Blob([e])
                : Buffer.from(e)
              : e;
          }
          return (
            (function e(i, s) {
              if (n.isPlainObject(i) || n.isArray(i)) {
                if (-1 !== r.indexOf(i))
                  throw Error('Circular reference detected in ' + s);
                r.push(i),
                  n.forEach(i, function (r, i) {
                    if (!n.isUndefined(r)) {
                      var a,
                        c = s ? s + '.' + i : i;
                      if (r && !s && 'object' == typeof r)
                        if (n.endsWith(i, '{}')) r = JSON.stringify(r);
                        else if (n.endsWith(i, '[]') && (a = n.toArray(r)))
                          return void a.forEach(function (e) {
                            !n.isUndefined(e) && t.append(c, o(e));
                          });
                      e(r, c);
                    }
                  }),
                  r.pop();
              } else t.append(s, o(i));
            })(e),
            t
          );
        };
      },
      875: (e, t, r) => {
        'use strict';
        var n = r(288).version,
          o = r(648),
          i = {};
        ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
          function (e, t) {
            i[e] = function (r) {
              return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
            };
          }
        );
        var s = {};
        (i.transitional = function (e, t, r) {
          function i(e, t) {
            return (
              '[Axios v' +
              n +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (r ? '. ' + r : '')
            );
          }
          return function (r, n, a) {
            if (!1 === e)
              throw new o(
                i(n, ' has been removed' + (t ? ' in ' + t : '')),
                o.ERR_DEPRECATED
              );
            return (
              t &&
                !s[n] &&
                ((s[n] = !0),
                console.warn(
                  i(
                    n,
                    ' has been deprecated since v' +
                      t +
                      ' and will be removed in the near future'
                  )
                )),
              !e || e(r, n, a)
            );
          };
        }),
          (e.exports = {
            assertOptions: function (e, t, r) {
              if ('object' != typeof e)
                throw new o(
                  'options must be an object',
                  o.ERR_BAD_OPTION_VALUE
                );
              for (var n = Object.keys(e), i = n.length; i-- > 0; ) {
                var s = n[i],
                  a = t[s];
                if (a) {
                  var c = e[s],
                    u = void 0 === c || a(c, s, e);
                  if (!0 !== u)
                    throw new o(
                      'option ' + s + ' must be ' + u,
                      o.ERR_BAD_OPTION_VALUE
                    );
                } else if (!0 !== r)
                  throw new o('Unknown option ' + s, o.ERR_BAD_OPTION);
              }
            },
            validators: i,
          });
      },
      867: (e, t, r) => {
        'use strict';
        var n,
          o = r(849),
          i = Object.prototype.toString,
          s =
            ((n = Object.create(null)),
            function (e) {
              var t = i.call(e);
              return n[t] || (n[t] = t.slice(8, -1).toLowerCase());
            });
        function a(e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return s(t) === e;
            }
          );
        }
        function c(e) {
          return Array.isArray(e);
        }
        function u(e) {
          return void 0 === e;
        }
        var f = a('ArrayBuffer');
        function p(e) {
          return null !== e && 'object' == typeof e;
        }
        function l(e) {
          if ('object' !== s(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        var d = a('Date'),
          h = a('File'),
          A = a('Blob'),
          m = a('FileList');
        function g(e) {
          return '[object Function]' === i.call(e);
        }
        var v = a('URLSearchParams');
        function y(e, t) {
          if (null != e)
            if (('object' != typeof e && (e = [e]), c(e)))
              for (var r = 0, n = e.length; r < n; r++)
                t.call(null, e[r], r, e);
            else
              for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) &&
                  t.call(null, e[o], o, e);
        }
        var b,
          x =
            ((b =
              'undefined' != typeof Uint8Array &&
              Object.getPrototypeOf(Uint8Array)),
            function (e) {
              return b && e instanceof b;
            });
        e.exports = {
          isArray: c,
          isArrayBuffer: f,
          isBuffer: function (e) {
            return (
              null !== e &&
              !u(e) &&
              null !== e.constructor &&
              !u(e.constructor) &&
              'function' == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t = '[object FormData]';
            return (
              e &&
              (('function' == typeof FormData && e instanceof FormData) ||
                i.call(e) === t ||
                (g(e.toString) && e.toString() === t))
            );
          },
          isArrayBufferView: function (e) {
            return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && f(e.buffer);
          },
          isString: function (e) {
            return 'string' == typeof e;
          },
          isNumber: function (e) {
            return 'number' == typeof e;
          },
          isObject: p,
          isPlainObject: l,
          isUndefined: u,
          isDate: d,
          isFile: h,
          isBlob: A,
          isFunction: g,
          isStream: function (e) {
            return p(e) && g(e.pipe);
          },
          isURLSearchParams: v,
          isStandardBrowserEnv: function () {
            return (
              ('undefined' == typeof navigator ||
                ('ReactNative' !== navigator.product &&
                  'NativeScript' !== navigator.product &&
                  'NS' !== navigator.product)) &&
              'undefined' != typeof window &&
              'undefined' != typeof document
            );
          },
          forEach: y,
          merge: function e() {
            var t = {};
            function r(r, n) {
              l(t[n]) && l(r)
                ? (t[n] = e(t[n], r))
                : l(r)
                ? (t[n] = e({}, r))
                : c(r)
                ? (t[n] = r.slice())
                : (t[n] = r);
            }
            for (var n = 0, o = arguments.length; n < o; n++)
              y(arguments[n], r);
            return t;
          },
          extend: function (e, t, r) {
            return (
              y(t, function (t, n) {
                e[n] = r && 'function' == typeof t ? o(t, r) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, r, n) {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: function (e, t, r) {
            var n,
              o,
              i,
              s = {};
            t = t || {};
            do {
              for (o = (n = Object.getOwnPropertyNames(e)).length; o-- > 0; )
                s[(i = n[o])] || ((t[i] = e[i]), (s[i] = !0));
              e = Object.getPrototypeOf(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: s,
          kindOfTest: a,
          endsWith: function (e, t, r) {
            (e = String(e)),
              (void 0 === r || r > e.length) && (r = e.length),
              (r -= t.length);
            var n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: function (e) {
            if (!e) return null;
            var t = e.length;
            if (u(t)) return null;
            for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
            return r;
          },
          isTypedArray: x,
          isFileList: m,
        };
      },
      144: (e, t, r) => {
        'use strict';
        r.d(t, { Z: () => a });
        var n = r(537),
          o = r.n(n),
          i = r(645),
          s = r.n(i)()(o());
        s.push([
          e.id,
          '*{box-sizing:border-box}body{background-color:#2fa8cc;font-family:"Roboto",sans-serif;display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;overflow:hidden;margin:0;padding:20px}.container{background-color:#f4f4f4;border-radius:10px;box-shadow:0 10px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:50px 20px;text-align:center;max-width:100%;width:800px}h3{margin:0;opacity:.5;letter-spacing:2px}img{width:100px;margin-bottom:20px}.joke{font-size:30px;letter-spacing:1px;line-height:40px;margin:50px auto;max-width:600px}.btn{background-color:#2fa8cc;color:#f4f4f4;border:0;border-radius:10px;box-shadow:0 5px 15px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:14px 40px;font-size:16px;cursor:pointer}.btn:active{transform:scale(0.98)}.btn:focus{outline:0}',
          '',
          {
            version: 3,
            sources: ['webpack://./src/styles/main.scss'],
            names: [],
            mappings:
              'AAMA,EACE,qBAAA,CAGF,KACE,wBATc,CAUd,+BAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,eAAA,CACA,QAAA,CACA,YAAA,CAGF,WACE,wBArBgB,CAsBhB,kBAAA,CACA,8DAtBW,CAuBX,iBAAA,CACA,iBAAA,CACA,cAAA,CACA,WAAA,CAGF,GACE,QAAA,CACA,UAAA,CACA,kBAAA,CAGF,IACE,WAAA,CACA,kBAAA,CAGF,MACE,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,gBAAA,CACA,eAAA,CAGF,KACE,wBAnDc,CAoDd,aAnDgB,CAoDhB,QAAA,CACA,kBAAA,CACA,6DAAA,CACA,iBAAA,CACA,cAAA,CACA,cAAA,CAEA,YACE,qBAAA,CAGF,WACE,SAAA',
            sourcesContent: [
              "// @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\r\n\r\n$primary-color: #2fa8cc;\r\n$secondary-color: #f4f4f4;\r\n$box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: $primary-color;\r\n  font-family: 'Roboto', sans-serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  margin: 0;\r\n  padding: 20px;\r\n}\r\n\r\n.container {\r\n  background-color: $secondary-color;\r\n  border-radius: 10px;\r\n  box-shadow: $box-shadow;\r\n  padding: 50px 20px;\r\n  text-align: center;\r\n  max-width: 100%;\r\n  width: 800px;\r\n}\r\n\r\nh3 {\r\n  margin: 0;\r\n  opacity: 0.5;\r\n  letter-spacing: 2px;\r\n}\r\n\r\nimg {\r\n  width: 100px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.joke {\r\n  font-size: 30px;\r\n  letter-spacing: 1px;\r\n  line-height: 40px;\r\n  margin: 50px auto;\r\n  max-width: 600px;\r\n}\r\n\r\n.btn {\r\n  background-color: $primary-color;\r\n  color: $secondary-color;\r\n  border: 0;\r\n  border-radius: 10px;\r\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);\r\n  padding: 14px 40px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n\r\n  &:active {\r\n    transform: scale(0.98);\r\n  }\r\n\r\n  &:focus {\r\n    outline: 0;\r\n  }\r\n}\r\n",
            ],
            sourceRoot: '',
          },
        ]);
        const a = s;
      },
      645: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = '',
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += '@supports ('.concat(t[4], ') {')),
                  t[2] && (r += '@media '.concat(t[2], ' {')),
                  n &&
                    (r += '@layer'.concat(
                      t[5].length > 0 ? ' '.concat(t[5]) : '',
                      ' {'
                    )),
                  (r += e(t)),
                  n && (r += '}'),
                  t[2] && (r += '}'),
                  t[4] && (r += '}'),
                  r
                );
              }).join('');
            }),
            (t.i = function (e, r, n, o, i) {
              'string' == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (n)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0];
                  null != c && (s[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var f = [].concat(e[u]);
                (n && s[f[0]]) ||
                  (void 0 !== i &&
                    (void 0 === f[5] ||
                      (f[1] = '@layer'
                        .concat(f[5].length > 0 ? ' '.concat(f[5]) : '', ' {')
                        .concat(f[1], '}')),
                    (f[5] = i)),
                  r &&
                    (f[2]
                      ? ((f[1] = '@media '
                          .concat(f[2], ' {')
                          .concat(f[1], '}')),
                        (f[2] = r))
                      : (f[2] = r)),
                  o &&
                    (f[4]
                      ? ((f[1] = '@supports ('
                          .concat(f[4], ') {')
                          .concat(f[1], '}')),
                        (f[4] = o))
                      : (f[4] = ''.concat(o))),
                  t.push(f));
              }
            }),
            t
          );
        };
      },
      537: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = e[1],
            r = e[3];
          if (!r) return t;
          if ('function' == typeof btoa) {
            var n = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
              o =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  n
                ),
              i = '/*# '.concat(o, ' */'),
              s = r.sources.map(function (e) {
                return '/*# sourceURL='
                  .concat(r.sourceRoot || '')
                  .concat(e, ' */');
              });
            return [t].concat(s).concat([i]).join('\n');
          }
          return [t].join('\n');
        };
      },
      379: (e) => {
        'use strict';
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var i = {}, s = [], a = 0; a < e.length; a++) {
            var c = e[a],
              u = n.base ? c[0] + n.base : c[0],
              f = i[u] || 0,
              p = ''.concat(u, ' ').concat(f);
            i[u] = f + 1;
            var l = r(p),
              d = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== l) t[l].references++, t[l].updater(d);
            else {
              var h = o(d, n);
              (n.byIndex = a),
                t.splice(a, 0, { identifier: p, updater: h, references: 1 });
            }
            s.push(p);
          }
          return s;
        }
        function o(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < i.length; s++) {
              var a = r(i[s]);
              t[a].references--;
            }
            for (var c = n(e, o), u = 0; u < i.length; u++) {
              var f = r(i[u]);
              0 === t[f].references && (t[f].updater(), t.splice(f, 1));
            }
            i = c;
          };
        };
      },
      569: (e) => {
        'use strict';
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, r) => {
        'use strict';
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = '';
                r.supports && (n += '@supports ('.concat(r.supports, ') {')),
                  r.media && (n += '@media '.concat(r.media, ' {'));
                var o = void 0 !== r.layer;
                o &&
                  (n += '@layer'.concat(
                    r.layer.length > 0 ? ' '.concat(r.layer) : '',
                    ' {'
                  )),
                  (n += r.css),
                  o && (n += '}'),
                  r.media && (n += '}'),
                  r.supports && (n += '}');
                var i = r.sourceMap;
                i &&
                  'undefined' != typeof btoa &&
                  (n +=
                    '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      ' */'
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var i = (t[n] = { id: n, exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      var e;
      r.g.importScripts && (e = r.g.location + '');
      var t = r.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName('script');
        n.length && (e = n[n.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (r.p = e);
    })(),
    (r.nc = void 0),
    (() => {
      'use strict';
      var e = r(669),
        t = r.n(e);
      const n = function () {
        t()
          .get('https://icanhazdadjoke.com', {
            headers: { Accept: 'application/json' },
          })
          .then(function (e) {
            document.getElementById('joke').innerHTML = e.data.joke;
          });
      };
      var o = r(379),
        i = r.n(o),
        s = r(795),
        a = r.n(s),
        c = r(569),
        u = r.n(c),
        f = r(565),
        p = r.n(f),
        l = r(216),
        d = r.n(l),
        h = r(589),
        A = r.n(h),
        m = r(144),
        g = {};
      (g.styleTagTransform = A()),
        (g.setAttributes = p()),
        (g.insert = u().bind(null, 'head')),
        (g.domAPI = a()),
        (g.insertStyleElement = d()),
        i()(m.Z, g),
        m.Z && m.Z.locals && m.Z.locals;
      const v = r.p + 'laughing.svg';
      (document.getElementById('laughImg').src = v),
        document.getElementById('jokeBtn').addEventListener('click', n),
        n();
    })();
})();
//# sourceMappingURL=bundledff621101bea9b52b779.js.map
