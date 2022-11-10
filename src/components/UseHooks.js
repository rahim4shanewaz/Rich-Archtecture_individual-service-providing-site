import { useEffect } from "react"

const useHooks = title => {
    useEffect(() => {
        document.title = `${title} - Rich Architecture`;
    },[title])
};

export default useHooks;