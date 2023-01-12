export function getJwtToken() {
  return localStorage.getItem("jwtToken");
}

export function setJwtToken(jwt: string) {
  localStorage.setItem("jwtToken", jwt);
}
