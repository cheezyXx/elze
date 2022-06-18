const ACCESS_TOKEN_KEY = "accessToken";

export function saveToken(token: string) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export function deleteToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}
