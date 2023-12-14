import { Movies } from "../../constants/movies";

export const getImage = (id) => {
    let image = '';
    Movies.map((item) => {
        if (item.id === id) {
            image = item.image.toString();
        }
    });
    return image;
};