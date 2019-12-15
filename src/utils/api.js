// const baseURL = "https://www.moodscope.com/m/login";
// const baseURL = "http://100.100.6.56:3006/admin_api/";
// const baseURL = "http://toversnow.flexsin.org:3006/admin_api/";
// const baseURL="http://52.13.196.212:3006/admin_api/"
// const baseURL="http://toversnow.flexsin.org:3006/admin_api/"
const baseURL="http://localhost:8080/"
var count = 0;

//To request for post api
export function postAPI(method, data,) {
    return fetch(baseURL + method, {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then(response => {
      console.log('Response---> ', response)
      var param = response.json();
      return param;
    })
    .catch(function (error) {
      console.log("Error--->" + error);
      return error;
    });
}
export function putAPI(method, data,token, loginId) {
  console.log("url--" + baseURL + method);
  console.log("Request--> ", JSON.stringify(data))
  return fetch(baseURL + method, {
    method: "PUT",
    body: JSON.stringify(data)//formBody
  })
    .then(response => {
      console.log('Response---> ', response)
      var param = response.json();
      return param;
    })
    .catch(function (error) {
      console.log("Error--->" + error);
      return error;
    });
}
//To request for post api using form data
export function submitAPI(method, formdata) {
  console.log("url--" + baseURL + method);
  console.log("Request--> ", JSON.stringify(formdata))
  return fetch(baseURL + method, {
    method: 'post',
    body: formdata
  })
    .then(response => {
      console.log('Response---> ', response)
      var param = JSON.parse(response._bodyText);
      return param;
    })
    .catch(function (error) {
      console.log("Error--->" + error);
      return error;
    });
}

export async function GetAPI(method, token, loginId) {
  console.log("url--" + baseURL + method,token,loginId);

  try {
    let response = await fetch(baseURL + method,
      {
        headers: {
          'Authorization': token?token:null,
          'login_id': loginId?loginId:null
        }
      }
    );
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    return error;
  }
}