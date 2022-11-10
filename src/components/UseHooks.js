import { useEffect } from "react"




// hooks for dynamic title

const useHooks = title => {
    useEffect(() => {
        document.title = `${title} - Rich Architecture`;
    },[title])
};

export default useHooks;