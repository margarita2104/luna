// import {useEffect} from 'react'
//
//
//
// const useAutoFetch = (method, url, requestData, trigger) => {
//     const token = localStorage.getItem('auth-token')
//     const {sendRequest, data, error, loading} = useApiRequest()
//
//     useEffect(() => {
//         if (token) sendRequest(method, url, requestData)
//     }, [url, trigger])
//
//     return {data, error, loading}
// }
//
// export default useAutoFetch