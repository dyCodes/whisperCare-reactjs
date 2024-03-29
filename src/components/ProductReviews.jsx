import { Paper, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const ProductReviews = ({ product, speak }) => {
	return (
		<div className="product_reviews">
			<Typography variant="h6" component="h2" mb={2.5} sx={{ fontWeight: "bold" }}>
				Reviews and Ratings
			</Typography>

			<Stack spacing={2.8} className="review_list">
				{product.reviews.map((review, index) => (
					<ReviewItem key={index} review={review} speak={speak} />
				))}
			</Stack>
		</div>
	);
};

const ReviewItem = ({ review, speak }) => {
	const reviewText = review.content
		? `${review.name} says: ${review.content}, ${review.rating} stars rating`
		: `${review.name}, ${review.rating} stars rating`;

	return (
		<Paper className="review_item bg_gray" onClick={() => speak(reviewText)}>
			<div className="review_header">
				<Typography variant="h6" component="h6">
					{review.name}
				</Typography>
				<Rating name="half-rating-read" value={review.rating} precision={0.5} readOnly />
			</div>

			<div className="content">
				<p>{review.content}</p>

				{review.audio && (
					<div className="audio_div">
						<audio src={review.audio} controls style={{ width: "100%" }}></audio>
					</div>
				)}
			</div>
		</Paper>
	);
};

export default ProductReviews;
