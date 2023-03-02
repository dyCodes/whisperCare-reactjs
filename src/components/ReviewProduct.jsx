import { Button, Divider, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import ProductDetails from "./ProductDetails";

const ReviewProduct = ({ product }) => {
	return (
		<>
			<ProductDetails product={product} />
			<Divider sx={{ mb: "18px" }} />
			<RateProduct />
		</>
	);
};

const RateProduct = () => {
	const [stars, setStars] = useState(0);

	return (
		<div className="rateProduct">
			<Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
				Rate this product
			</Typography>

			<form action="">
				<Rating
					name="half-rating"
					precision={0.5}
					value={stars}
					size="large"
					onChange={(e, value) => {
						setStars(value);
					}}
					sx={{ fontSize: "60px", m: "12px auto" }}
				/>

				<div>
					<input type="text" placeholder="Rate Product.." style={{ width: "100%", padding: "12px" }} />
				</div>

				<div className="form_actions" style={{ padding: "24px 0" }}>
					<Button size="large" variant="outlined">
						Cancel
					</Button>
					<Button size="large" variant="contained" type="submit">
						Post
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ReviewProduct;
