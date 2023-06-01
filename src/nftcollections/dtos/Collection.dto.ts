import { IsNotEmpty } from "class-validator";

class CollectionDTO {
    @IsNotEmpty()
    name : string;

    @IsNotEmpty()
    ids : string[];
}

export {
    CollectionDTO
};