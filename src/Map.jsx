import React, {useEffect} from "react";
import {Viewer} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

window.CESIUM_BASE_URL = "src/cesium";

export default function Map () {
	useEffect(() => {
		const viewer = new Viewer("map");
		window.viewer = viewer;
		console.log(viewer);
	}, []);

	return (
		<div id="map" ></div>
	);
}
