import { costcenter } from "./costcenter";
import { ids } from "./ids";

export interface assetemployee{ 
    ids? : ids,
    fromm?: string, 
    too? : string, 
    costcenter?: costcenter,
    endoflife? : Date
}