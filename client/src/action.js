import axios from "axios";
var a = `
    query{
        post(id:"5ab2b46d941953bf614e2617") {
            title
            body
            user {
                name
                email
            }
            comments {
                body
                user {
                    name
                    email
                }
            }
        }
    }

`
export function fetchBlog() {
    return function (dispatch) {
        dispatch({ type: "LOAD_DATA" });
        axios.post("http://localhost:4000/graphql", {query:a})
            .then((response) => {
                dispatch({ type: "LOAD_DATA_FULFILLED", payload: response.data })
            })
            .catch((err) => {
                dispatch({ type: "LOAD_DATA_REJECTED", payload: err })
            })
    }
}
