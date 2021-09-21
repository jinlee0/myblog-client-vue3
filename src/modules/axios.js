import { axios } from "@bundled-es-modules/axios"

export default function () {
  const BASE_URL = "http://localhost:3002"
  const doThen = (res) => {
    if (res.status > 199 && res.status < 400) {
      if (onSuccess) {
        onSuccess(res.data)
      }
    } else {
      if (onFailed) {
        onFailed(res.data)
      }
    }
  }
  const axiosGet = (URL, onSuccess = null, onFailed = null) => {
    const final_URL = URL.startsWith("http") ? URL : BASE_URL + URL
    axios.get(final_URL).then((res) => {
      if (res.status > 199 && res.status < 400) {
        if (onSuccess) {
          onSuccess(res.data)
        }
      } else {
        if (onFailed) {
          onFailed(res.data)
        }
      }
    })
  }

  return {
    axiosGet,
  }
}