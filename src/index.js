import React from "react";
import {createRoot} from "react-dom/client";

import Map from "./Map.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
	<div>
		<Map />
	</div>,
);
