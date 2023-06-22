var localAddress = "//127.0.0.1:18080/WebPrintSDK/";
var connectionMode = "http:";
var wsPrint = null;

var WebSocketPrint = function (serverURL, strPrinterName, request, callback) {
  var _websocket;
  var _callback = callback;
  var _request = request;
  var _connectedsocket = false;

  var onMessage = function (msg) {
    if (_websocket.readyState == 1) {
      var res = JSON.parse(msg.data);
      var ret = res.Result;
      var responseID = res.ResponseID;

      if (_request == "/requestMSRData") {
        var track1 = res.Track1;
        var track2 = res.Track2;
        var track3 = res.Track3;

        _callback(ret, track1, track2, track3);
      } else {
        _callback(responseID + ":" + ret);
      }
    } else {
      _callback(msg.data);
    }
  };

  var onClose = function (msg) {
    if (!_connectedsocket) {
      _callback("Cannot connect to server");
    }

    _websocket.close();
    _connectedsocket = false;
    wsPrint = null;
  };

  var webSocketInit = function (uri) {
    _websocket = new WebSocket(uri);
    _websocket.onopen = function (event) {
      console.log("open : " + uri);
    };
    _websocket.onerror = function (event) {
      if (_websocket.readyState == 3) {
        _callback("Cannot connect to server");
      }
    };
    _websocket.onmessage = function (msg) {
      onMessage(msg);
    };
    _websocket.onclose = function (msg) {
      onClose(msg);
    };
  };

  webSocketInit(serverURL + strPrinterName + _request);

  this.send = function (strSubmit) {
    if (_websocket.readyState == 1) {
      _websocket.send(strSubmit);
    } else {
      _websocket.onopen = function () {
        if (_websocket.readyState == 1) {
          _websocket.send(strSubmit);
          _connectedsocket = true;
        }
      };
    }
  };
};

function toHexBinary(s) {
  var l = s.length,
    r = new Array(l),
    i;
  for (i = 0; i < l; i++) {
    r[i] = ("0" + s.charCodeAt(i).toString(16)).slice(-2);
  }
  return r.join("");
}

function makeResultInquiryData(requestId, responseId, timeout) {
  return (
    '{"RequestID":' +
    requestId +
    ',"ResponseID":"' +
    responseId +
    '","Timeout":' +
    timeout +
    "}"
  );
}

function requestMSRData(strPrinterName, timeout, _callback) {
  var serverURL = getServerURL().url;
  var inquiryData = '{"Timeout":' + timeout + "}";

  if (connectionMode == "ws:" || connectionMode == "wss:") {
    if (wsPrint == null)
      var wsPrint = new WebSocketPrint(
        serverURL,
        strPrinterName,
        "/requestMSRData",
        _callback
      );
    wsPrint.send(inquiryData);
  } else {
    var requestURL = serverURL + strPrinterName + "/requestMSRData";
    var xmlHttpCheck = false;
    if (window.XMLHttpRequest) {
      xmlHttpCheck = new XMLHttpRequest();
    }

    xmlHttpCheck.open("POST", requestURL, true);
    xmlHttpCheck.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    xmlHttpCheck.send(inquiryData);
    xmlHttpCheck.onreadystatechange = function () {
      if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 200) {
        var res = JSON.parse(xmlHttpCheck.responseText);

        var track1 = res.Track1;
        var track2 = res.Track2;
        var track3 = res.Track3;

        _callback(res.Result, track1, track2, track3);
      } else if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 404) {
        _callback("No printers");
      } else if (xmlHttpCheck.readyState == 4) {
        _callback("Cannot connect to server");
      }
    };
  }
}

function checkResult(method, strPrinterName, requestId, responseId, _callback) {
  var serverURL = getServerURL().url;
  var requestURL = serverURL + strPrinterName + "/checkStatus";
  var inquiryData = makeResultInquiryData(requestId, responseId, 30);

  var xmlHttpCheck = false;
  if (window.XMLHttpRequest) {
    xmlHttpCheck = new XMLHttpRequest();
  }

  xmlHttpCheck.open(method, requestURL, true);
  xmlHttpCheck.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  xmlHttpCheck.send(inquiryData);
  xmlHttpCheck.onreadystatechange = function () {
    if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 200) {
      var res = JSON.parse(xmlHttpCheck.responseText);
      var ret = res.Result;

      if (ret.search("ready") >= 0 || ret.search("progress") >= 0) {
        checkResult(method, strPrinterName, requestId, responseId, _callback);
      } else {
        _callback(res.ResponseID + ":" + ret);
      }
    } else if (xmlHttpCheck.readyState == 4 && xmlHttpCheck.status == 404) {
      _callback("No printers");
    } else if (xmlHttpCheck.readyState == 4) {
      _callback("Cannot connect to server");
    }
  };
}

export function requestPrint(strPrinterName, strSubmit, _callback) {
  _callback("");
  var serverURL = getServerURL().url;
  if (connectionMode == "ws:" || connectionMode == "wss:") {
    if (wsPrint == null)
      wsPrint = new WebSocketPrint(serverURL, strPrinterName, "", _callback);
    wsPrint.send(strSubmit);
  } else {
    var requestURL = serverURL + strPrinterName;
    var xmlHttpReq = false;
    if (window.XMLHttpRequest) {
      xmlHttpReq = new XMLHttpRequest();
    }

    xmlHttpReq.open("POST", requestURL, true);
    xmlHttpReq.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    xmlHttpReq.send(strSubmit);

    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200) {
        var res = JSON.parse(xmlHttpReq.responseText);
        var ret = res.Result;
        if (ret.search("ready") >= 0 || ret.search("progress") >= 0) {
          checkResult(
            "POST",
            strPrinterName,
            res.RequestID,
            res.ResponseID,
            _callback
          );
        } else if (ret.search("duplicated") >= 0) {
          _callback(res.Result);
        }
      } else if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 404) {
        _callback("No printers");
      } else if (xmlHttpReq.readyState == 4) {
        _callback("Cannot connect to server");
      }
    };
  }
}

function getServerURL() {
  var serverURL = connectionMode + localAddress;
  return {
    url: serverURL,
  };
}

function setConnectionMode(mode) {
  connectionMode = mode;
}

function getBrowser() {
  var ua = navigator.userAgent,
    tem,
    M =
      ua.match(
        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
      ) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return { name: "IE", version: tem[1] || "" };
  }
  if (M[1] === "Chrome") {
    tem = ua.match(/\bOPR|Edge\/(\d+)/);
    if (tem != null) {
      return { name: "Opera", version: tem[1] };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return {
    name: M[0],
    version: M[1],
  };
}

function isEmpty(data) {
  if (typeof data == "undefined" || data == null || data == "") return true;
  else return false;
}
