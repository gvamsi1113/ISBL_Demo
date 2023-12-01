// globalUser.js
let globalUser = { id: null, username: "", role: 0 };

export function updateUser(newUserData) {
  globalUser.id = newUserData.id;
  globalUser.username = newUserData.username;
  globalUser.role = newUserData.role;
}

export default globalUser;
