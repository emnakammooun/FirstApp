import { Article } from "./Article";

export interface Member{
    id : string,
    cin : string,
    name : string,
    cv : string,
    type : string,
    createdDate : string,
    tab_pub:Article[],
    tab_evt:Event[]
}