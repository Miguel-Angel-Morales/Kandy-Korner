import { Outlet, Route, Routes } from "react-router-dom";
import { LocationsList } from "../Locations/locations.js";
import { ProductsList } from "../Products/Products.js";
import { ProductForm } from "../Products/ProductForm.js";

export const ApplicationViews = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<h1>Store Locations</h1>
						<div>Your Sweet Escape</div>
						<Outlet />
					</>
				}
			/>
			<Route path="/locations" element={<LocationsList />} />
			<Route path="/products" element={<ProductsList />} />
			<Route path="/products/create" element={<ProductForm />} />
		</Routes>
	);
};







