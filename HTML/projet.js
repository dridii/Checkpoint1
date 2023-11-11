var x = "chayma";
var y = "gomycode";

var s = "salut";
console.log(`${s} ${y}`);

function somme(a, b) {
  return a + b;
}

function multiplication(x, y) {
  return x * y;
}

function pair(k) {
  if (k % 2 == 0) {
    return "pair";
    //console.log ("pair")
  } else {
    return "impair";
  }
}

function impairC(array) {
  var sumP = 0;
  var sumI = 0;
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] % 2 == 0) {
      sumP = sumP + array[i];
      // SP+=array[i]
    } else {
      sumI = sumI + array[i];
    }
    console.log("sommes des paires est: ", sumP);
    console.log("sommes des impaires est: ", sumI);
  }
}

function rechercher(arr) {
  var sumP = 0;
  var sumI = 0;
  var i = 0;
  while (i < arr.length - 1) {
    if (arr[i] % 2 == 0) {
      sumP += arr[i];
    } else {
      sumI += arr[i];
    }
    i++;
  }
  console.log("sommes des paires est: ", sumP);
  console.log("sommes des impaires est: ", sumI);
}

var Googlegl = function(str) {
  var occ = 0;
  var str2 = "eyaoui";
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < str2.length; j++) {
      if (str[i] == str2[j]) {
        //occ++
        //occ+=1
        occ = occ + 1;
      }
    }
  }
  return occ;
};

function twiter(pub)
var i = 0
var sumP = 0
var sumI = 0
wihle(i < pub.length - 1){if (pub[i] % 2 == 0) {
      sumP+=pub[i]
}else {
      sumI += pub[i];
    }
      i++;
}
  console.log("sommes des paires est: ", sumP);
  console.log("sommes des impaires est: ", sumI);

  

      
