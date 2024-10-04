import { decodedToken } from "./jwt"
import { getFromLocalStorage, setToLocalStorage } from "./localStorage"




export const storeUserInto = ({accessToken})=> {
    setToLocalStorage(authKey, accessToken )
}

export const authKey = "accessToken"


export const getUserInfo = ()=> {
    const authToken = getFromLocalStorage(authKey)
  if(authToken){
    const decodedData = decodedToken(authToken)
    return decodedData;
  }
  else {
    return " ";
  }
}


export const IsUserLoggedIn = ()=> {
      const authToken = getFromLocalStorage(authKey);
      return !!authToken
}

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};