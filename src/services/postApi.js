import {sendGetRequest} from "./rootApi";

export const fetchPostData = () => {
    return sendGetRequest("get", "https://jsonplaceholder.typicode.com/posts");
}