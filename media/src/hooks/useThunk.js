import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useThunk(thunk) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const runThunk = useCallback(async (arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch((error) => {
                console.log(error);
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
}