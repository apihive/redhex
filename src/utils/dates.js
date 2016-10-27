export function getTimestamp() {
  var date = new Date();
  var year = date.getFullYear();
  var month = (date.getMonth() + 1) + '';
  var day = date.getDate() + '';
  var hr = date.getHours() + '';
  var min = date.getMinutes() + '';
  var sec = date.getSeconds() + '';
  var ms = date.getMilliseconds() + '';
  if (month.length === 1) {
    month = '0' + month;
  }
  if (day.length === 1) {
    day = '0' + day;
  }
  if (hr.length === 1) {
    hr = '0' + hr;
  }
  if (min.length === 1) {
    min = '0' + min;
  }
  if (sec.length === 1) {
    sec = '0' + sec;
  }
  if (ms.length === 1) {
    ms = '00' + ms;
  } else if (ms.length === 2) {
    ms = '0' + ms;
  }
  return {
    full:year + month + day + hr + min + sec + ms,
    date:year + month + day
  }
}

export function getLiveTime() {
  var date = new Date();
  var year = date.getFullYear();
  var month = (date.getMonth() + 1) + '';
  var day = date.getDate() + '';
  var hr = date.getHours() + '';
  var min = date.getMinutes() + '';
  var sec = date.getSeconds() + '';
  var ms = date.getMilliseconds() + '';
  if (month.length === 1) {
    month = '0' + month;
  }
  if (day.length === 1) {
    day = '0' + day;
  }
  if (hr.length === 1) {
    hr = '0' + hr;
  }
  if (min.length === 1) {
    min = '0' + min;
  }
  if (sec.length === 1) {
    sec = '0' + sec;
  }
  if (ms.length === 1) {
    ms = '00' + ms;
  } else if (ms.length === 2) {
    ms = '0' + ms;
  }
  return {
    name: hr + ' : ' + min + ' : ' + sec,
    time: hr + min + sec,
    date: year + month + day
  }
}

export function getGraphTime(time) {
  var date = new Date(time);
  var year = date.getFullYear();
  var month = (date.getMonth() + 1) + '';
  var day = date.getDate() + '';
  var hr = date.getHours() + '';
  var origHr = date.getHours() + '';
  var min = date.getMinutes() + '';
  var sec = date.getSeconds() + '';
  var ms = date.getMilliseconds() + '';
  if (month.length === 1) {
    month = '0' + month;
  }
  if (day.length === 1) {
    day = '0' + day;
  }
  if (hr.length === 1) {
    hr = '0' + hr;
  }
  if (origHr.length === 1) {
    origHr = '0' + origHr;
  }
  if (min.length === 1) {
    min = '0' + min;
  }
  if (sec.length === 1) {
    sec = '0' + sec;
  }
  if (ms.length === 1) {
    ms = '00' + ms;
  } else if (ms.length === 2) {
    ms = '0' + ms;
  }
  var meridian = APP.DATE.AM;
  if (hr > 12) {
    hr = hr - 12;
    meridian = APP.DATE.PM;
  } else if (hr > 11) {
    meridian = APP.DATE.PM;
  } else if (hr == 0) {
    hr = 12;
  }
  var name = hr + ' : ' + min + ' ' + meridian;
  if (hr == 12) {
    name = hr + ' : ' + min + ' ' + meridian;
  }
  return {
    name: name,
    time: hr + min + sec,
    hms: origHr + min + sec,
    date: year + month + day
  }
}

export function dateAdd(date, interval, units) {
  var ret = new Date(date); {/* //don't change original date  */}
  switch (interval.toLowerCase()) {
    case 'year'   :
    ret.setFullYear(ret.getFullYear() + units);
    break;
    case 'quarter':
    ret.setMonth(ret.getMonth() + 3 * units);
    break;
    case 'month'  :
    ret.setMonth(ret.getMonth() + units);
    break;
    case 'week'   :
    ret.setDate(ret.getDate() + 7 * units);
    break;
    case 'day'    :
    ret.setDate(ret.getDate() + units);
    break;
    case 'hour'   :
    ret.setTime(ret.getTime() + units * 3600000);
    break;
    case 'minute' :
    ret.setTime(ret.getTime() + units * 60000);
    break;
    case 'second' :
    ret.setTime(ret.getTime() + units * 1000);
    break;
    default       :
    ret = undefined;
    break;
  }
  return ret;
}

export function dateMinus(date, interval, units) {
  var ret = new Date(date); {/* //don't change original date  */}
  switch (interval.toLowerCase()) {
    case 'year'   :
    ret.setFullYear(ret.getFullYear() - units);
    break;
    case 'quarter':
    ret.setMonth(ret.getMonth() - 3 * units);
    break;
    case 'month'  :
    ret.setMonth(ret.getMonth() - units);
    break;
    case 'week'   :
    ret.setDate(ret.getDate() - 7 * units);
    break;
    case 'day'    :
    ret.setDate(ret.getDate() - units);
    break;
    case 'hour'   :
    ret.setTime(ret.getTime() - units * 3600000);
    break;
    case 'minute' :
    ret.setTime(ret.getTime() - units * 60000);
    {/* //return ret.getTime(); */}
    break;
    case 'second' :
    ret.setTime(ret.getTime() - units * 1000);
    break;
    default       :
    ret = undefined;
    break;
  }
  return ret;
}

export function validateExpiration(date) {
  console.log(date)
  var date = new Date(date);
  return (date < new Date());
}

export function validateExpirationAndSchedule(expiration, schedule) {
  var newSched = schedule.replace(/[-,T,:]/g, '');
  var newSched = newSched + '00000';
  console.log(expiration > newSched)
  return (expiration > newSched);
}

export function getFutureTimestamp(date) {
  var newDate = date.split('-');
  return newDate[0] + newDate[1] + newDate[2] + '000000000';
}

export function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
export function getUID() {
  return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}


{/*
  * COOKIES
  */}
  export function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
        return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }
  export function setCookie(name, value) {
    document.cookie = name + '=' + value + '; path=/;';
  }
  export function setCookieDays(name, value, days) {
    var expires = '';
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  export function delCookie(name, value) {
    var expires = '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = name + '=' + expires + '; path=/';
  }

  export function stringfyParticipants(names) {
    var me = rHuPanAZ;
    names.sort();
    var idx = names.indexOf(me);
    if (idx > -1) {
      names.splice(idx, 1);
    }
    var newString = names.toString().replace(",", ", ");
    return newString;
  }

  export function validatePin(pin, confirmPin) {
    var filter = "^[0-9]+$";
    if (isNaN(pin)) {
      return 'PIN must be numeric.';
    }
    if (!(pin.length === 6)) {
      return 'PIN must be 6 digits.';
    }
    if (pin !== confirmPin) {
      return 'Confirm PIN do not match.';
    }
    if ((pin.match(filter)) && (pin.length === 6) && pin === confirmPin) {
      return true;
    }
    return "PIN must be valid.";
  }

  export function removeJrrSlave() {
    localStorage.removeItem('jrr');
    localStorage.removeItem('slave');
    silPU = APP.PURGEFORWARD(APP.Config.silPU);
    localStorage.removeItem(silPU);
    rHuPanAZ = APP.PURGEFORWARD(APP.Config.rHuPanAZ);
    localStorage.removeItem(rHuPanAZ);
  }
  export function logout() {
    removeJrrSlave();
  }
  export function displayDate(startTime) {

    {/* later record end time */}
    var endTime = new Date();
    {/* time difference in ms */}
    var timeDiff = endTime - startTime;
    {/* strip the miliseconds */}
    timeDiff /= 1000;
    {/* get seconds */}
    var seconds = Math.round(timeDiff % 60);
    {/* remove seconds from the date */}
    timeDiff = Math.floor(timeDiff / 60);
    {/* get minutes */}
    var minutes = Math.round(timeDiff % 60);
    {/* remove minutes from the date */}
    timeDiff = Math.floor(timeDiff / 60);
    // get hours */}
    var hours = Math.round(timeDiff % 24);
    {/* remove hours from the date */}
    timeDiff = Math.floor(timeDiff / 24);
    {/* the rest of timeDiff is number of days */}
    var days = timeDiff;
    var dateElapsed;
    var monthsName = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  var daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  if (days == 0) {
    if (hours == 0) {
      if (minutes == 0) {
        dateElapsed = seconds + ' sec';
      } else {
        dateElapsed = minutes + ' mins';
      }
    } else {
      dateElapsed = hours + ' hr';
    }
  } else if (days >= 2 && days < 7) {
    dateElapsed = days + ' days ago.';
  } else if (days == 7) {
    dateElapsed = '1 week ago.';
  } else if (days > 7) {
    dateElapsed = monthsName[startTime.getMonth()] + ' ' + startTime.getDay() + ', ' + startTime.getFullYear();
  } else {
    var newHour = startTime.getHours();
    var newMinute = startTime.getMinutes();
    if (newMinute < 10) {
      newMinute = '0' + newMinute
    }
    var meridian = 'am';
    if (newHour > 12) {
      meridian = 'pm';
      newHour = newHour - 12;
    } else if (newHour == 12) {
      meridian = 'noon';
    } else if (newHour == 0) {
      meridian = 'midnight';
      newHour = 12;
    }
    dateElapsed = ' Yesterday at ' + newHour + ':' + newMinute + ' ' + meridian;
  }
  return dateElapsed;
}

export function DisplayFriendlydate(string) {
  var year = string.substring(0, 4),
  month = string.substring(4, 6),
  day = string.substring(6, 8),
  hour = string.substring(8, 10),
  min = string.substring(10, 12),
  sec = string.substring(12, 14),
  meridian = APP.DATE.AM;
  month = APP.DATE.MONTHS[parseInt(month - 1)];
  if (hour > 12) {
    hour = hour - 12;
    meridian = APP.DATE.PM;
  } else if (hour == 0) {
    hour = 12;
  }
  var date = month + ' ' + day + ', ' + year + ' @ ' + hour + ':' + min + ' ' + meridian;
  return date;
}

export function itemizeDate(string) {
  var year = string.substring(0, 4),
  month = string.substring(4, 6),
  day = string.substring(6, 8),
  hour = string.substring(8, 10),
  min = string.substring(10, 12),
  sec = string.substring(12, 14);
  return {
    ymd: year + month + day,
    ym: year + month,
    md: month + day,
    hms: hour + min + sec,
    ms: min + sec,
    hm: hour + min,
  };
}

export function getMac() {
  var wmi = new ActiveXObject("WbemScripting.SWbemLocator");
  var service = wmi.ConnectServer(".");
  e = new Enumerator(service.ExecQuery("SELECT * FROM Win32_NetworkAdapterConfiguration WHERE IPEnabled = True"));
  for (; !e.atEnd(); e.moveNext()) {
    var s = e.item();
    var macAddress = unescape(s.MACAddress);
  }
  return macAddress;
}

export function concatValues(ArRay, addLocal) {
  var newArray = [];
  if (addLocal == true) {
    newArray.push(rHuPanAZ.toLowerCase());
  }
  var concatVal = '';
  $.each(ArRay, function (i, val) {
    newArray.push(val.toLowerCase());
  });
  newArray.sort();
  $.each(newArray, function (i, val) {
    concatVal = concatVal + val;
  });
  return concatVal.toLowerCase();
}

export function objToArray(oBject) {
  var takki = $.map(oBject, function (value, index) {
    var array = [value];
    return array;
  })
  return takki.length;
}

export function randomColorFactor() {
  return Math.round(Math.random() * 255);
}

export function randomColor(opacity) {
  return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.1') + ')';
}

export function base64toBlob(base64Data, contentType) {
  contentType = contentType || '';
  var sliceSize = 1024;
  var byteCharacters = atob(base64Data);
  var bytesLength = byteCharacters.length;
  var slicesCount = Math.ceil(bytesLength / sliceSize);
  var byteArrays = new Array(slicesCount);

  for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    var begin = sliceIndex * sliceSize;
    var end = Math.min(begin + sliceSize, bytesLength);

    var bytes = new Array(end - begin);
    for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
      bytes[i] = byteCharacters[offset].charCodeAt(0);
    }
    byteArrays[sliceIndex] = new Uint8Array(bytes);
  }
  return new Blob(byteArrays, { type: contentType });
}
