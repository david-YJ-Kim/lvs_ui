const BASE_URL = `http://10.184.50.125:8080/lvs`;
// const BASE_URL = `http://localhost:8080/lvs`;

// get eqpList which message has been created.
export function fetchEqpList() {
  return fetch(`${BASE_URL}/get/eqpList`).then((response) => response.json());
}

// get scenario list based on eqpId
export function fetchEventStreamList(eqpId: string) {
  return fetch(`${BASE_URL}/get/scenario/${eqpId}`).then((response) =>
    response.json()
  );
}

// get event stream
export function fetchDetailLogVo(logKey: string) {
  if (logKey === "") {
    return Promise.resolve(null); // Return an empty array if logKey is empty
  } else {
    return fetch(`${BASE_URL}/get/logs/${logKey}`).then((response) =>
      response.json()
    );
  }
}
export function deleteEventLog(eqpId: string, logKey: string) {
  return fetch(`${BASE_URL}/manage/delete/eqpId/${eqpId}/logs/${logKey}`, {
    method: "DELETE",
  }).then((response) => response.json());
}
