var url ='https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby'

function getUrlParameterValue(url_string, parameter) {
    var url = new URL(url_string);
var c = url.searchParams.get(parameter);
return c;
    }


console.log(getUrlParameterValue(url,"utm_medium"));
console.log(getUrlParameterValue(url,"utm_campaign"))