import { IsNotEmpty } from "class-validator";

class CollectionDTO {
    @IsNotEmpty()
    name : string;
}

export {
    CollectionDTO
};