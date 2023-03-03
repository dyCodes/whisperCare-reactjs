import React, { useEffect, useState } from "react";
import { Container, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import products from "../assets/products-demo.json";
import ProductDetails from "../components/ProductDetails";
import ProductReviews from "../components/ProductReviews";

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

						<Divider sx={{ my: "24px" }} />
						<ProductReviews product={product} />
					</div>
				) : (
					<Typography variant="h4" component="h1" mt={6} align="center" sx={{ fontWeight: "bold" }}>
						Product not found
					</Typography>
				)}
			</Container>
		</Layout>
	);
};

const ProductInfo = ({ product }) => {
	return (
		<>
			<div className="product_info">
				<Typography variant="h6" component="h2" my={2} sx={{ fontWeight: "bold" }}>
					Description
				</Typography>
				<p>{product.details}</p>

				<ul>
					{product.description.map((desc, index) => (
						<li key={index}>{desc}</li>
					))}
				</ul>
			</div>

			<Divider sx={{ my: "24px" }} />

			<div className="product_info">
				<Typography variant="h6" component="h2" my={2} sx={{ fontWeight: "bold" }}>
					Ingredients
				</Typography>

				<p>{product.ingredients}</p>
			</div>
		</>
	);
};

export default Product;
