import myAxios from "../network/request";

function post(url,data,successCallback){
  return myAxios
    .post(url,data)
    .then(successCallback)
    .catch(err=>{
      window.console.log(err)
      return err
    })
}

export default post
