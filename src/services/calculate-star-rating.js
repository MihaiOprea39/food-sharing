export default function CalculateStarRating(rating) {
    const rounded = Math.floor(rating);
    const decimal = 5 - rounded;

    let totalStars = '<i class="star fas fa-star text-warning"/>'.repeat(rounded);

    if (decimal) {
        const greyStars = ('<i class="star far fa-star text-gray"/>').repeat(decimal);
        totalStars = totalStars.concat(greyStars);
    }

    return totalStars;
}
