import service from "@/utils/request";

export function sendCodeService(params = {}) {
  return service({
    url: "/cuser/sendCode",
    method: "post",
    data: params,
  });
}

export function codeLoginService(params = {}) {
  return service({
    url: "/cuser/code/login",
    method: "post",
    data: params,
  });
}

export function logoutService() {
  return service({
    url: "/cuser/logout",
    method: "delete",
  });
}

export function getUserInfoService() {
  return service({
    url: "/cuser/info",
    method: "get",
  });
}

export function getUserDetailService(userId) {
  return service({
    url: "/cuser/detail",
    method: "get",
    params: { userId },
  });
}


export function editUserService(params = {}) {
  return service({
    url: "/cuser/edit",
    method: "put",
    data: params,
  });
}

export function updateHeadImageService(params = {}) {
  return service({
    url: "/cuser/head-image/update",
    method: "put",
    data: params,
  });
}

export function userSubmitService(params = {}) {
  return service({
    url: "/cuser/question/rabbit/submit",
    method: "post",
    data: params,
  });
}