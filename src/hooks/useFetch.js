import { useEffect, useState } from "react"
const requestOptions = {
  method: "GET",
}
const useFetch = (url, options = requestOptions) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(url, { requestOptions, ...options })
      .then((data) => data.json())
      .then(async (res) => {
        if (!res.success) setLoading(false)

        await setData(res.data)
        setLoading(false)
      })
      .catch((e) => console.log(e))
  }, [url, options])

  return [data, loading]
}

export default useFetch
