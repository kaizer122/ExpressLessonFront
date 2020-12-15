import { useEffect, useState } from "react"
const requestOptions = {
  method: "GET",
}
const useFetch = (url, options = requestOptions) => {
  const [data, setData] = useState([])
  const [refetchFlag, setRefetchFlach] = useState(false)
  const [loading, setLoading] = useState(true)
  const refetch = () => setRefetchFlach(!refetchFlag)

  const updateData = (data) => setData(data)
  useEffect(() => {
    fetch(url, { requestOptions, ...options })
      .then((data) => data.json())
      .then(async (res) => {
        if (!res.success) setLoading(false)

        await setData(res)
        setLoading(false)
      })
      .catch((e) => console.log(e))
  }, [url, options])

  return [data, loading, updateData]
}

export default useFetch
