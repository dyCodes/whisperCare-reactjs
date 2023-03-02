import React, { useEffect, useState } from "react";
import { Container, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import products from "../assets/products-demo.json";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
	const { id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		const product = products.find((product) => product.code === id);
		setProduct(product);
	}, [id]);

	return (
		<Layout page="Product">
			<Container maxWidth="sm" className="container">
				{product ? (
					<div className="product">
						<ProductDetails product={product} />
						<Divider />
						<ProductInfo product={product} />

						<Divider />
						<ProductReviews product={product} />
					</div>
				) : (
					<h3>No product found..</h3>
				)}
			</Container>
		</Layout>
	);
};

const ProductInfo = ({ product }) => {
	return (
		<div className="product_info">
			<div className="rateProduct">
				<h3>Description</h3>
			</div>
			<p>{product.details}</p>

			<ul>
				{product.description.map((desc, index) => (
					<li key={index}>{desc}</li>
				))}
			</ul>
		</div>
	);
};

const ProductReviews = ({ product }) => {
	return (
		<div className="product_reviews">
			<Typography variant="h6" component="h2" mb={2.5} sx={{ fontWeight: "bold" }}>
				Reviews and ratings
			</Typography>
		</div>
	);
};

export default Product;
